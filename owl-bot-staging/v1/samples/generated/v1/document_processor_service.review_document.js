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

function main(humanReviewConfig) {
  // [START documentai_v1_generated_DocumentProcessorService_ReviewDocument_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  An inline document proto.
   */
  // const inlineDocument = {}
  /**
   *  Required. The resource name of the HumanReviewConfig that the document will be
   *  reviewed with.
   */
  // const humanReviewConfig = 'abc123'
  /**
   *  Whether the validation should be performed on the ad-hoc review request.
   */
  // const enableSchemaValidation = true
  /**
   *  The priority of the human review task.
   */
  // const priority = {}

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callReviewDocument() {
    // Construct request
    const request = {
      humanReviewConfig,
    };

    // Run request
    const [operation] = await documentaiClient.reviewDocument(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callReviewDocument();
  // [END documentai_v1_generated_DocumentProcessorService_ReviewDocument_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));