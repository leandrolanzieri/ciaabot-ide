/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating CiaaSapi blocks.
 * @author lanzierileandro@gmail.com <Leandro Lanzieri Rodriguez>
 */
'use strict';

goog.provide('Blockly.CiaaSapi.servo');

goog.require('Blockly.CiaaSapi');

Blockly.CiaaSapi['ciaa_sapi_servo_read'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  Blockly.CiaaSapi.setups_['servo-enable'] = 'servoConfig(0, SERVO_ENABLE);';
  Blockly.CiaaSapi.setups_['servo-' + dropdown_pin_option + '-enable'] = 'servoConfig(' + dropdown_pin_option + ', SERVO_ENABLE_OUTPUT);';
  var code = 'servoRead(' + dropdown_pin_option + ')';
  return [code, Blockly.CiaaSapi.ORDER_NONE];
};

Blockly.CiaaSapi['ciaa_sapi_servo_write'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  var angle_value_option = block.getFieldValue('value_option');
  Blockly.CiaaSapi.setups_['servo-enable'] = 'servoConfig(0, SERVO_ENABLE);';
  Blockly.CiaaSapi.setups_['servo-' + dropdown_pin_option + '-enable'] = 'servoConfig(' + dropdown_pin_option + ', SERVO_ENABLE_OUTPUT);';
  var code = 'servoWrite(' + dropdown_pin_option + ', ' + angle_value_option + ');\n';
  return code;
};