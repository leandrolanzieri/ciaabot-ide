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

Blockly.CiaaSapi['ciaa_sapi_uart_send_string'] = function(block) {
  var dropdown_print_type = block.getFieldValue('PRINT_TYPE');
  var printing_value = Blockly.CiaaSapi.valueToCode(block, 'printing', Blockly.CiaaSapi.ORDER_ATOMIC);
  var checkbox_new_line = block.getFieldValue('new_line') == 'TRUE';
  Blockly.CiaaSapi.setups_['console_print_config_uart'] = 'consolePrintConfigUart(UART_USB, 9600);';
  var code = '';
  if (dropdown_print_type === 'TEXT') {
    code = 'consolePrintString(' + printing_value + ');\n'
  } else if (dropdown_print_type === 'NUMBER') {
    code = 'consolePrintInt(' + printing_value + ');\n'
  } else if (dropdown_print_type === 'CHAR') {

  }
  if (checkbox_new_line) {
    code += 'consolePrintEnter();\n';
  }
  return code;
};

Blockly.CiaaSapi['ciaa_sapi_uart_receive_byte'] = function(block) {
  var variable = Blockly.CiaaSapi.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  Blockly.CiaaSapi.setups_['console_print_config_uart'] = 'consolePrintConfigUart(UART_USB, 9600);';
  var code = 'uartReadByte(UART_USB, &' + variable + ')';
  return [code, Blockly.CiaaSapi.ORDER_NONE];
};

Blockly.CiaaSapi['ciaa_sapi_uart_send_byte'] = function(block) {
  var value_byte = Blockly.CiaaSapi.valueToCode(block, 'BYTE', Blockly.CiaaSapi.ORDER_ATOMIC);
  Blockly.CiaaSapi.setups_['console_print_config_uart'] = 'consolePrintConfigUart(UART_USB, 9600);';
  var code = 'uartWriteByte(UART_USB, ' + value_byte + ');\n';
  return code;
};