/**
 * @license
 * Visual Blocks Editor
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


goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');

Blockly.Blocks['ciaa_sapi_servo_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leer Salida de un Servo");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown(profile.default.servo), "pin_option");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(135);
    this.setTooltip('Lee una salida de un Servo');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['ciaa_sapi_servo_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Escribir Salida de un Servo");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown(profile.default.servo), "pin_option");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ángulo")
        .appendField(new Blockly.FieldAngle(90), "value_option")
        .appendField("º (0º a 180º)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('Escribe una salida de un Servo');
    this.setHelpUrl('');
  }
};