/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for CiaaSapi.
 * @author lanzierileandro@gmail.com (Leandro Lanzieri Rodriguez)
 */
'use strict';

goog.provide('Blockly.CiaaSapi.texts');

goog.require('Blockly.CiaaSapi');


Blockly.CiaaSapi.text = function() {
  // Text value.
  var code = Blockly.CiaaSapi.quote_(this.getFieldValue('TEXT'));
  return [code, Blockly.CiaaSapi.ORDER_ATOMIC];
};
