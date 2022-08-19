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

function main(parent) {
  // [START documentai_v1beta3_generated_DocumentProcessorService_ListProcessorTypes_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location of processor type to list.
   *  The available processor types may depend on the allow-listing on projects.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of processor types to return.
   *  If unspecified, at most 100 processor types will be returned.
   *  The maximum value is 500; values above 500 will be coerced to 500.
   */
  // const pageSize = 1234
  /**
   *  Used to retrieve the next page of results, empty if at the end of the list.
   */
  // const pageToken = 'abc123'

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1beta3;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callListProcessorTypes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await documentaiClient.listProcessorTypesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListProcessorTypes();
  // [END documentai_v1beta3_generated_DocumentProcessorService_ListProcessorTypes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
