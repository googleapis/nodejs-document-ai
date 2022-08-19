// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name) {
  // [START documentai_v1beta3_generated_DocumentProcessorService_ProcessDocument_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  An inline document proto.
   */
  // const inlineDocument = {}
  /**
   *  A raw document content (bytes).
   */
  // const rawDocument = {}
  /**
   *  Required. The resource name of the Processor google.cloud.documentai.v1beta3.Processor  or
   *  ProcessorVersion google.cloud.documentai.v1beta3.ProcessorVersion 
   *  to use for processing. If a Processor google.cloud.documentai.v1beta3.Processor  is specified, the server will use
   *  its default version google.cloud.documentai.v1beta3.Processor.default_processor_version. Format:
   *  `projects/{project}/locations/{location}/processors/{processor}`, or
   *  `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
   */
  // const name = 'abc123'
  /**
   *  The document payload, the content  and mime_type  fields must be set.
   */
  // const document = {}
  /**
   *  Whether Human Review feature should be skipped for this request. Default to
   *  false.
   */
  // const skipHumanReview = true
  /**
   *  Specifies which fields to include in ProcessResponse's document.
   */
  // const fieldMask = {}

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1beta3;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callProcessDocument() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await documentaiClient.processDocument(request);
    console.log(response);
  }

  callProcessDocument();
  // [END documentai_v1beta3_generated_DocumentProcessorService_ProcessDocument_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
