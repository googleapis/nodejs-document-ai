/**
 * Copyright 2019, Google, Inc.
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

const path = require('path');
const {assert} = require('chai');
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');
const PROJECT_ID = process.env.GCLOUD_PROJECT;
const LOCATION = 'us';
const PROCESSOR_ID = process.env.PROCESSOR_ID; // TODO: Add processor ID to env vars for test project

const fileName = 'invoice.pdf';
const filePath = path.resolve(path.join(__dirname, `../resources/${fileName}`));

describe('Process document', () => {
  it('should run document (process invoice)', async () => {
    const stdout = execSync(
      `node ./process-document.v1beta3.js ${PROJECT_ID} ${LOCATION} ${PROCESSOR_ID} ${filePath}`,
      {
        cwd,
      }
    );
    assert.match(stdout, /Paragraph/);
    assert.match(stdout, /Entity/);
  });
});
