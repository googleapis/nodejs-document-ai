/**
 * Copyright 2019 Google LLC
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

async function main(
  projectId = process.env.GCLOUD_PROJECT, // Your GCP Project Id
  gcsInputUri = 'gs://cloud-samples-data/vision/document_parsing/table_parsing_small.pdf', // TODO(erschmid): replace
  gcsOutputUri = 'gs://document-ai-erchmid/',
) {

  // Imports the Google Cloud client library
  const {DocumentUnderstandingServiceClient} = require('@google-cloud/documentai');

  const client = new DocumentUnderstandingServiceClient();

  // [START document_parse_table]
  /**
   * Parses a table in a PDF document
   *
   * ARGS
   * inputUri: path to image file
   * RETURNS
   * -TODO-
   **/
  async function parseTable(inputUri, outputUri) {
    console.log(inputUri);
    console.log(projectId);

    const request = {
      parent: `projects/${projectId}`,
      inputConfig: {
        gcsSource: {
          uri: inputUri
        },
        mimeType: 'application/pdf'
      },
      outputConfig: {
        gcsDestination: {
          uri: outputUri
        }
      },
      tableExtractionParams: {
          enabled: true,
          tableBoundHints: [
              {
                boundingBox: {
                  normalizedVertices: [
                      { x: 0, y: 0 },
                      { x: 1, y: 0 },
                      { x: 1, y: 1 },
                      { x: 0, y: 1 }
                  ]
                }
              }
        ]
      }
    };

    const requests = {
      requests: [ request ]
    }

    try {

    // Batch process document using a long-running operation.
    // You can wait for now, or get results later.
    const [operation] = await client.batchProcessDocuments(requests);

    // Wait for operation to complete.
    const [response] = await operation.promise();

    } catch (ex) {
      console.log(ex);
    }
  }
  // [END document_parse_table]

  parseTable(gcsInputUri, gcsOutputUri);
  
}
main(...process.argv.slice(2));