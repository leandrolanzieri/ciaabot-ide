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
 * @fileoverview Variable blocks for Ciaa sAPI.
 * @author lanzierileandro@gmail.com (Leandro Lanzieri Rodriguez)
 */
'use strict';

goog.provide('Blockly.CiaaSapi.variables');

goog.require('Blockly.CiaaSapi');


Blockly.CiaaSapi.variables_get = function () {
    // Variable getter.
    var name;
    if ((this.getFieldValue('VAR').search('::') + 1)) {
        name = this.getFieldValue('VAR').split('::')[1];
    } else {
        name = this.getFieldValue('VAR');
    }
    var code = Blockly.CiaaSapi.variableDB_.getName(name,
        Blockly.Variables.NAME_TYPE);
    return [code, Blockly.CiaaSapi.ORDER_ATOMIC];
};

Blockly.CiaaSapi.variables_declare = function () {
    // Variable setter.
    var dropdown_type = this.getFieldValue('TYPE');
    //TODO: settype to variable
    var argument0 = Blockly.CiaaSapi.valueToCode(this, 'VALUE',
        Blockly.CiaaSapi.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    Blockly.CiaaSapi.setups_['setup_var' + varName] = varName + ' = ' + argument0 + ';\n';
    return '';
};

Blockly.CiaaSapi.variables_set = function () {
    // Variable setter.
    var argument0 = Blockly.CiaaSapi.valueToCode(this, 'VALUE',
        Blockly.CiaaSapi.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
};

Blockly.CiaaSapi['typed_variable_declare'] = function (block) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_name = Blockly.CiaaSapi.variableDB_.getName(block.getFieldValue('NAME'));

    // Blockly.CiaaSapi.typedVariables_[dropdown_type + ' ' + text_name] = dropdown_type + ' ' + text_name + ';\n';
    Blockly.CiaaSapi.typedVariables_[dropdown_type + '_' + text_name] = { type: dropdown_type, name: text_name };

    var code = '';
    return code;
};

Blockly.CiaaSapi['typed_variable_get'] = function (block) {
    var dropdown_var = '';

    if (block.getFieldValue('VAR') != '')
        dropdown_var = Blockly.CiaaSapi.variableDB_.getName(block.getFieldValue('VAR'));

    var code = dropdown_var;
    return [code, Blockly.CiaaSapi.ORDER_NONE];
    // return code;
};

Blockly.CiaaSapi['typed_variable_set'] = function (block) {
    var dropdown_var = '';
    var value_value = '0';
    var code = '// Definir variable a establecer';

    if (Blockly.CiaaSapi.valueToCode(block, 'VALUE', Blockly.CiaaSapi.ORDER_ATOMIC))
        value_value = Blockly.CiaaSapi.valueToCode(block, 'VALUE', Blockly.CiaaSapi.ORDER_ATOMIC);

    if (block.getFieldValue('VAR') != '') {
        dropdown_var = Blockly.CiaaSapi.variableDB_.getName(block.getFieldValue('VAR'));
        code = dropdown_var + ' = ' + value_value + ';\n';
    }

    return code;
};