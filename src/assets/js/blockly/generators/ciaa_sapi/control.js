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
 * @fileoverview Code for control blocks
 * @author lanzierileandro@gmail.con (Leandro Lanzieri Rodriguez)
 */
'use strict';

goog.provide('Blockly.CiaaSapi.loops');

goog.require('Blockly.CiaaSapi');


Blockly.CiaaSapi.controls_for = function () {
    // For loop.
    var variable0 = Blockly.CiaaSapi.variableDB_.getName(
        this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.CiaaSapi.valueToCode(this, 'FROM',
        Blockly.CiaaSapi.ORDER_ASSIGNMENT) || '0';
    var argument1 = Blockly.CiaaSapi.valueToCode(this, 'TO',
        Blockly.CiaaSapi.ORDER_ASSIGNMENT) || '0';
    var argument2 = Blockly.CiaaSapi.valueToCode(this, 'BY',
        Blockly.CiaaSapi.ORDER_ASSIGNMENT) || '0';
    var branch = Blockly.CiaaSapi.statementToCode(this, 'DO');
    if (Blockly.CiaaSapi.INFINITE_LOOP_TRAP) {
        branch = Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + this.id + '\'') + branch;
    }
    var code;
    if (argument0.match(/^-?\d+(\.\d+)?$/) &&
        argument1.match(/^-?\d+(\.\d+)?$/)) {
        // Both arguments are simple numbers.
        var up = parseFloat(argument0) <= parseFloat(argument1);
        code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
            variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
            // variable0 + (up ? '++' : '--') + ') {\n' +
            variable0 + (argument2 == 0 ? '++' : '+=' + argument2) + ') {\n' +
            branch + '}\n';
    } else {
        code = '';
        // Cache non-trivial values to variables to prevent repeated look-ups.
        var startVar = argument0;
        if (!argument0.match(/^\w+$/) && !argument0.match(/^-?\d+(\.\d+)?$/)) {
            var startVar = Blockly.CiaaSapi.variableDB_.getDistinctName(
                variable0 + '_start', Blockly.Variables.NAME_TYPE);
            code += 'int ' + startVar + ' = ' + argument0 + ';\n';
        }
        var endVar = argument1;
        if (!argument1.match(/^\w+$/) && !argument1.match(/^-?\d+(\.\d+)?$/)) {
            var endVar = Blockly.CiaaSapi.variableDB_.getDistinctName(
                variable0 + '_end', Blockly.Variables.NAME_TYPE);
            code += 'int ' + endVar + ' = ' + argument1 + ';\n';
        }
        code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
            '    (' + startVar + ' <= ' + endVar + ') ? ' +
            variable0 + ' <= ' + endVar + ' : ' +
            variable0 + ' >= ' + endVar + ';\n' +
            '    ' + variable0 + ' += (' + startVar + ' <= ' + endVar +
            ') ? 1 : -1) {\n' +
            branch + '}\n';
    }
    return code;
};


Blockly.CiaaSapi.controls_for_simplified = function () {
    var value_cant = Blockly.CiaaSapi.valueToCode(this, 'CANT', Blockly.CiaaSapi.ORDER_ATOMIC);
    var branch = Blockly.CiaaSapi.statementToCode(this, 'DO');
    if (Blockly.CiaaSapi.INFINITE_LOOP_TRAP) {
        branch = Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + this.id + '\'') + branch;
    }
    var code;
    code = 'for (int counter = 0; counter < ';
    if (value_cant) {
        code += value_cant;
    } else {
        code += '1';
    }
    code += '; counter++) {\n' + branch + '}\n';
    return code;
};

Blockly.CiaaSapi.controls_whileUntil = function () {
    // Do while/until loop.
    var until = this.getFieldValue('MODE') == 'UNTIL';
    var argument0 = Blockly.CiaaSapi.valueToCode(this, 'BOOL',
        until ? Blockly.CiaaSapi.ORDER_LOGICAL_NOT :
            Blockly.CiaaSapi.ORDER_NONE) || 'false';
    var branch = Blockly.CiaaSapi.statementToCode(this, 'DO');
    if (Blockly.CiaaSapi.INFINITE_LOOP_TRAP) {
        branch = Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + this.id + '\'') + branch;
    }
    if (until) {
        argument0 = '!' + argument0;
    }
    return 'while (' + argument0 + ') {\n' + branch + '}\n';
}

Blockly.CiaaSapi['controls_repeat_forever'] = function (block) {

    // Do while/until loop.
    var until = this.getFieldValue('MODE') == 'UNTIL';
    var argument0 = Blockly.CiaaSapi.valueToCode(this, 'BOOL',
        until ? Blockly.CiaaSapi.ORDER_LOGICAL_NOT :
            Blockly.CiaaSapi.ORDER_NONE) || 'false';
    var statements_name = Blockly.CiaaSapi.statementToCode(block, 'NAME');
    if (Blockly.CiaaSapi.INFINITE_LOOP_TRAP) {
        statements_name = Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + this.id + '\'') + statements_name;
    }
    return 'while (TRUE) {\n' + statements_name + '}\n';
};

Blockly.CiaaSapi['controls_main_program'] = function (block) {
    var statements_programa = Blockly.CiaaSapi.statementToCode(block, 'programa');
    var code = '';
    code = 'void main(void) {\n// Inicializar placa \nboardConfig(); \n\n';
    code += '// Habilita cuenta de tick cada 1ms \ntickConfig(1, 0); \n\n';
    code += '// Inicializaciones del usuario prueba\nsetup(); \n\n';
    code += statements_programa + '\n}';
    return code;
};