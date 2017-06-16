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
 * @fileoverview Generating Arduino for variable blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.CiaaSapi.procedures');

goog.require('Blockly.CiaaSapi');


Blockly.CiaaSapi.procedures_defreturn = function() {
  // Define a procedure with a return value.
  var funcName = Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.CiaaSapi.statementToCode(this, 'STACK');
  if (Blockly.CiaaSapi.INFINITE_LOOP_TRAP) {
    branch = Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var returnValue = Blockly.CiaaSapi.valueToCode(this, 'RETURN',
      Blockly.CiaaSapi.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var returnType = returnValue ? 'int' : 'void';
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = 'int ' + Blockly.CiaaSapi.variableDB_.getName(this.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}\n';
  code = Blockly.CiaaSapi.scrub_(this, code);
  Blockly.CiaaSapi.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.CiaaSapi.procedures_defnoreturn = Blockly.CiaaSapi.procedures_defreturn;

Blockly.CiaaSapi.procedures_callreturn = function() {
  // Call a procedure with a return value.
  var funcName = Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.CiaaSapi.valueToCode(this, 'ARG' + x,
        Blockly.CiaaSapi.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.CiaaSapi.ORDER_UNARY_POSTFIX];
};

Blockly.CiaaSapi.procedures_callnoreturn = function() {
  // Call a procedure with no return value.
  var funcName = Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.CiaaSapi.valueToCode(this, 'ARG' + x,
        Blockly.CiaaSapi.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.CiaaSapi.procedures_ifreturn = function() {
  // Conditionally return value from a procedure.
  var condition = Blockly.CiaaSapi.valueToCode(this, 'CONDITION',
      Blockly.CiaaSapi.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (this.hasReturnValue_) {
    var value = Blockly.CiaaSapi.valueToCode(this, 'VALUE',
        Blockly.CiaaSapi.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};
