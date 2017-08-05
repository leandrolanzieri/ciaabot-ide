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


goog.provide('Blockly.Blocks.base');

goog.require('Blockly.Blocks');

/*
Blockly.Blocks['base_delay'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Delay")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time');
  }
};*/

Blockly.Blocks['ciaa_sapi_blocking_delay'] = {
    init: function () {
        this.appendValueInput("delay_time")
            .setCheck("Number")
            .appendField("Esperar ticks");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('Retardo bloqueante');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_delay_seconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Esperar");
        this.appendValueInput("TIME")
            .setCheck(["Number", "Entero"]);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(profile.edu_ciaa.timeUnits), "UNIT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_inaccurate_blocking_delay'] = {
    init: function () {
        this.appendValueInput("delay_ms")
            .setCheck("Number")
            .appendField("Esperar milisegundos");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('Retardo aproximado bloqueante');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_gpio_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Establecer estado del GPIO");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(profile.default.leds.concat(profile.default.digital)), "pin_option");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(" en ");
        this.appendValueInput("value")
            .setCheck("Boolean");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Escribe una salida digital');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_gpio_digital_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Leer estado del GPIO");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(profile.default.digital.concat(profile.default.buttons)), "pin_option");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(135);
        this.setTooltip('Lee una entrada digital');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_gpio_toggle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Invertir el estado del pin")
        .appendField(new Blockly.FieldDropdown(profile.default.digital.concat(profile.default.leds)), "DIGITAL_PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Invertir estado de una salida digital");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ciaa_sapi_gpio_analog_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Leer conversor A/D");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(profile.default.adc), "pin_option");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(135);
        this.setTooltip('Lee una entrada del conversor anlógico/digital');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_dac_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Escribir conversor D/A ");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(profile.default.dac), "pin_option");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(" al valor ");
        // .appendField(new Blockly.FieldNumber(0, 0, 65535), "value");
        this.appendValueInput("value")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Escribe una salida del conversor digital/analógico');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_sleep_until_interrupt'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Esperar hasta la próxima interrupción");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('Modo bajo consumo');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_set_tick_count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Escribir base de tiempo");
    this.appendValueInput("ticks")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Establecer el tiempo del sistema en ms");
  }
};

Blockly.Blocks['ciaa_sapi_get_tick_count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leer base de tiempo (ms)");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Devuelve el tiempo del sistema en ms");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ciaa_sapi_pwm_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Establecer ciclo de trabajo del PWM");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(profile.default.pwm), "pin_option");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(" en ");
        this.appendValueInput("value")
            .setCheck("Number");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("%");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Escribe una salida de PWM');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['ciaa_sapi_pwm_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Leer ciclo de trabajo del PWM");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(profile.default.pwm), "pin_option");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(135);
        this.setTooltip('Lee una salida de PWM');
        this.setHelpUrl('');
    }
};

// Blockly.Blocks['string_length'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": 'length of %1',
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "VALUE",
//           "check": "String"
//         }
//       ],
//       "output": "Number",
//       "colour": 160,
//       "tooltip": "Returns number of letters in the provided text.",
//       "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
//     });
//   }
// };

// Blockly.Blocks['base_map'] = {
//   helpUrl: 'http://arduino.cc/en/Reference/map',
//   init: function() {
//     this.setColour(230);
//     this.appendValueInput("NUM", 'Number')
//         .appendField("Map ")
//         .setCheck('Number');
//     this.appendValueInput("DMAX", 'Number')
//         .appendField("value to [0-")
//         .setCheck('Number');
//     this.appendDummyInput()
// 	      .appendField("]");
//     this.setInputsInline(true);
//     this.setOutput(true);
//     this.setTooltip('Re-maps a number from [0-1024] to another.');
//   }
// };

// Blockly.Blocks['inout_buildin_led'] = {
//    helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
//    init: function() {
//      this.setColour(190);
//      this.appendDummyInput()
// 	       .appendField("Build-in LED Stat")
// 	       .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
//      this.setPreviousStatement(true, null);
//      this.setNextStatement(true, null);
//      this.setTooltip('light or off the build-in LED');
//    }
// };

// Blockly.Blocks['inout_digital_write'] = {
//   helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
//   init: function() {
//     this.setColour(230);
//     this.appendDummyInput()
// 	      .appendField("DigitalWrite PIN#")
// 	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//       	.appendField("Stat")
//       	.appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Write digital value to a specific Port');
//   }
// };

// Blockly.Blocks['inout_digital_read'] = {
//   helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
//   init: function() {
//     this.setColour(230);
//     this.appendDummyInput()
// 	      .appendField("DigitalRead PIN#")
// 	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.setOutput(true, 'Boolean');
//     this.setTooltip('');
//   }
// };

// Blockly.Blocks['inout_analog_write'] = {
//   helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
//   init: function() {
//     this.setColour(230);
//     this.appendDummyInput()
//         .appendField("AnalogWrite PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.appendValueInput("NUM", 'Number')
//         .appendField("value")
//         .setCheck('Number');
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Write analog value between 0 and 255 to a specific Port');
//   }
// };

// Blockly.Blocks['inout_analog_read'] = {
//   helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
//   init: function() {
//     this.setColour(230);
//     this.appendDummyInput()
//         .appendField("AnalogRead PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
//     this.setOutput(true, 'Number');
//     this.setTooltip('Return value between 0 and 1024');
//   }
// };

// Blockly.Blocks['inout_tone'] = {
//   helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
//   init: function() {
//     this.setColour(230);
//     this.appendDummyInput()
//         .appendField("Tone PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.appendValueInput("NUM", "Number")
//         .appendField("frequency")
//         .setCheck("Number");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip("Generate audio tones on a pin");
//   }
// };

// Blockly.Blocks['inout_notone'] = {
//   helpUrl: 'http://www.arduino.cc/en/Reference/NoTone',
//   init: function() {
//     this.setColour(230);
//     this.appendDummyInput()
//         .appendField("No tone PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip("Stop generating a tone on a pin");
//   }
// };

// Blockly.Blocks['inout_highlow'] = {
//   helpUrl: 'http://arduino.cc/en/Reference/Constants',
//   init: function() {
//     this.setColour(230);
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), 'BOOL')
//     this.setOutput(true, 'Boolean');
//     this.setTooltip('');
//   }
// };

// //servo block
// //http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
// Blockly.Blocks['servo_move'] = {
//   helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Servo")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//     this.appendValueInput("DEGREE", 'Number')
//         .setCheck('Number')
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Degree (0~180)");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('move between 0~180 degree');
//   }
// };

// Blockly.Blocks['servo_read_degrees'] = {
//   helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Servo")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.appendDummyInput()
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Read Degrees")
//     this.setOutput(true, 'Number');
//     this.setTooltip('return that degree with the last servo move.');
//   }
// };

// Blockly.Blocks['serial_print'] = {
//   helpUrl: 'http://www.arduino.cc/en/Serial/Print',
//   init: function() {
//     this.setColour(230);
//     this.appendValueInput("CONTENT", 'String')
//         .appendField("Serial Print");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
//   }
// };
