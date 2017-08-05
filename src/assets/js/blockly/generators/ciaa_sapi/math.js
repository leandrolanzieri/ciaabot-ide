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
 * @fileoverview Helper functions for generating CiaaSapi blocks.
 * @author lanzierileandro@gmail.com <Leandro Lanzieri Rodriguez>
 */
'use strict';

goog.provide('Blockly.CiaaSapi.math');

goog.require('Blockly.CiaaSapi');


Blockly.CiaaSapi.math_number = function() {
  // Numeric value.
  var code = window.parseFloat(this.getFieldValue('NUM'));
  // -4.abs() returns -4 in Dart due to strange order of operation choices.
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
      Blockly.CiaaSapi.ORDER_UNARY_PREFIX : Blockly.CiaaSapi.ORDER_ATOMIC;
  return [code, order];
};

Blockly.CiaaSapi.math_arithmetic = function() {
  // Basic arithmetic operators, and power.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.CiaaSapi.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.CiaaSapi.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.CiaaSapi.valueToCode(this, 'B', order) || '0';
  var code;
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.CiaaSapi.ORDER_UNARY_POSTFIX];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.CiaaSapi.math_arithmetic.OPERATORS = {
  ADD: [' + ', Blockly.CiaaSapi.ORDER_ADDITIVE],
  MINUS: [' - ', Blockly.CiaaSapi.ORDER_ADDITIVE],
  MULTIPLY: [' * ', Blockly.CiaaSapi.ORDER_MULTIPLICATIVE],
  DIVIDE: [' / ', Blockly.CiaaSapi.ORDER_MULTIPLICATIVE],
  POWER: [null, Blockly.CiaaSapi.ORDER_NONE]  // Handle power separately.
};


Blockly.CiaaSapi['math_map_range'] = function(block) {
  var value_value = Blockly.CiaaSapi.valueToCode(block, 'VALUE', Blockly.CiaaSapi.ORDER_ATOMIC);
  if (!value_value) value_value = '512';
  var value_min_initial = Blockly.CiaaSapi.valueToCode(block, 'MIN_INITIAL', Blockly.CiaaSapi.ORDER_ATOMIC);
  if (!value_min_initial) value_min_initial = '0';
  var value_max_initial = Blockly.CiaaSapi.valueToCode(block, 'MAX_INITIAL', Blockly.CiaaSapi.ORDER_ATOMIC);
  if (!value_max_initial) value_max_initial = '1023';
  var value_min_last = Blockly.CiaaSapi.valueToCode(block, 'MIN_LAST', Blockly.CiaaSapi.ORDER_ATOMIC);
  if (!value_min_last) value_min_last = '0';
  var value_max_last = Blockly.CiaaSapi.valueToCode(block, 'MAX_LAST', Blockly.CiaaSapi.ORDER_ATOMIC);
  if (!value_max_last) value_max_last = '255';

  var code = '(' + value_value + ' - ' + value_min_initial + ') * (' + value_max_last + ' - ' + value_min_last + ') / (' + value_max_initial +  ' - ' + value_min_initial + ' ) + ' + value_min_last;
  return [code, Blockly.CiaaSapi.ORDER_NONE];
};
