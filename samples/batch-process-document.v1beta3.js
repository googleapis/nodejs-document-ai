/**
 * Copyright 2020 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const uuid = require('uuid');

async function main(
  projectId = 'YOUR_PROJECT_ID',
  location = 'YOUR_PROJECT_LOCATION',
  processorId = 'YOUR_PROCESSOR_ID', // Create this in the Cloud Console
  gcsInputUri = 'gs://cloud-samples-data/documentai/invoice.pdf',
  gcsOutputUri = 'output-bucket',
  gcsOutputUriPrefix = uuid.v4()
) {
  // [START documentai_batch_process_document]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const location = 'YOUR_PROJECT_LOCATION'; // Format is 'us' or 'eu'
  // const processorId = 'YOUR_PROCESSOR_ID';
  // const gcsInputUri = 'YOUR_SOURCE_PDF';
  // const gcsOutputUri = 'YOUR_STORAGE_BUCKET';
  // const gcsOutputUriPrefix = 'YOUR_STORAGE_PREFIX';

  // Imports the Google Cloud client library
  const {
    DocumentProcessorServiceClient,
  } = require('@google-cloud/documentai').v1beta3;
  const {Storage} = require('@google-cloud/storage');

  const clientOptions = {
    apiEndpoint: 'us-documentai.googleapis.com',
  };

  const client = new DocumentProcessorServiceClient(clientOptions);
  const storage = new Storage();

  async function batchProcessDocument() {
    const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;

    const inputConfig = {
      gcsSource: gcsInputUri,
      mimeType: 'application/pdf',
    };
    const inputConfigs = [inputConfig];

    // Configure the batch process request.
    const request = {
      name,
      inputConfigs,
      outputConfig: {
        gcsDestination: `${gcsOutputUri}/${gcsOutputUriPrefix}/`,
      },
    };

    // Batch process document using a long-running operation.
    // You can wait for now, or get results later.
    // Note: first request to the service takes longer than subsequent
    // requests.
    try {
      const [operation] = await client.batchProcessDocuments(request);

      // Wait for operation to complete.
      await operation.promise();
    } catch (ex) {
      // CURRENTLY the LRO returned from service has 'done = true' but
      // does not provide a result. This raises an error from the google-gax
      // library, despite the LRO actually succeeeding.
      const lroError = 'Long running operation has finished but there was no result';

      if (ex.message.indexOf(lroError) === -1) {
          throw ex;
      }
    }

    console.log('Document processing complete.');

    // Query Storage bucket for the results file(s).
    const query = {
      prefix: gcsOutputUriPrefix,
    };

    console.log('Fetching results ...');

    // List all of the files in the Storage bucket
    const [files] = await storage.bucket(gcsOutputUri).getFiles(query);

    files.forEach(async (fileInfo, index) => {
      // Get the file as a buffer
      const [file] = await fileInfo.download();

      console.log(`Fetched file #${index + 1}:`);

      // The results stored in the output Storage location
      // are formatted as a document object.
      const document = JSON.parse(file.toString());
      const {text} = document;

      // Extract shards from the text field
      const getText = textAnchor => {
        if (!textAnchor.textSegments || textAnchor.textSegments.length == 0) {
          return '';
        }

        // First shard in document doesn't have startIndex property
        const startIndex = textAnchor.textSegments[0].startIndex || 0;
        const endIndex = textAnchor.textSegments[0].endIndex;

        return text.substring(startIndex, endIndex);
      };

      // Read the text recognition output from the processor
      console.log('The document contains the following paragraphs:');

      const [page1] = document.pages;
      const {paragraphs} = page1;
      for (const paragraph of paragraphs) {
        const paragraphText = getText(paragraph.layout.textAnchor);
        console.log(`Paragraph text:\n${paragraphText}`);
      }

      // Invoice parsing provides additional output about
      // invoice-formatted PDFs. You  must create an invoice
      // processor in the Cloud Console to see full entity details.
      console.log('\nThe following entities were detected:');

      const {entities} = document;
      for (const entity of entities) {
        console.log(`Entity text: ${entity.mentionText}`);
        console.log(`Entity ID: ${entity.id}`);
        console.log(`Entity type: ${entity.type}`);
        console.log(`Confidence: ${entity.confidence}\n`);
      }
    });
  }
  // [END documentai_batch_process_document]

  batchProcessDocument();
}
main(...process.argv.slice(2));
