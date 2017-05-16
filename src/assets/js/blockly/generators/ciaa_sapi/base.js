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

goog.provide('Blockly.CiaaSapi.base');

goog.require('Blockly.CiaaSapi');


Blockly.CiaaSapi.ciaa_sapi_blocking_delay = function() {
  var delay_time = Blockly.CiaaSapi.valueToCode(this, 'delay_time', Blockly.CiaaSapi.ORDER_ATOMIC) || '2000';
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.CiaaSapi['ciaa_sapi_inaccurate_blocking_delay'] = function(block) {
  var value_delay_ms = Blockly.CiaaSapi.valueToCode(block, 'delay_ms', Blockly.CiaaSapi.ORDER_ATOMIC);
  var code = 'delayInaccurate(' + value_delay_ms + ');\n';
  return code;
};

Blockly.CiaaSapi['ciaa_sapi_gpio_write'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  var value_pin = Blockly.CiaaSapi.valueToCode(block, 'pin', Blockly.CiaaSapi.ORDER_ATOMIC);
  var dropdown_value_option = block.getFieldValue('value_option');
  var value_value = Blockly.CiaaSapi.valueToCode(block, 'value', Blockly.CiaaSapi.ORDER_ATOMIC);
  // Add configuration to user setups
  Blockly.CiaaSapi.setups_['gpio-enable'] = 'gpioConfig(0, GPIO_ENABLE);';
  Blockly.CiaaSapi.setups_['gpio-config-output' + dropdown_pin_option] = 'gpioConfig(' + dropdown_pin_option + ', GPIO_OUTPUT);';
  var code = 'gpioWrite(' + dropdown_pin_option + ', ' + dropdown_value_option + ');\n';
  return code;
};

Blockly.CiaaSapi['ciaa_sapi_gpio_digital_read'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  // Add configuration to user setups
  Blockly.CiaaSapi.setups_['gpio-enable'] = 'gpioConfig(0, GPIO_ENABLE);';
  Blockly.CiaaSapi.setups_['gpio-config-input' + dropdown_pin_option] = 'gpioConfig(' + dropdown_pin_option + ', GPIO_INPUT);';
  var code = 'gpioRead(' + dropdown_pin_option + ')';
  return [code, Blockly.CiaaSapi.ORDER_NONE];
};

Blockly.CiaaSapi['ciaa_sapi_gpio_analog_read'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  // Add configuration to user setups
  Blockly.CiaaSapi.setups_['adc-enable'] = 'adcConfig(ADC_ENABLE);';
  var code = 'adcRead(' + dropdown_pin_option + ')';
  return [code, Blockly.CiaaSapi.ORDER_NONE];
};

Blockly.CiaaSapi['ciaa_sapi_dac_write'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  var number_value = block.getFieldValue('value');
  // Add configuration to user setups
  Blockly.CiaaSapi.setups_['dac-enable'] = 'dacConfig(DAC_ENABLE);';
  var code = 'dacWrite(' + dropdown_pin_option + ', ' + number_value +');\n';
  return code;
};

Blockly.CiaaSapi['ciaa_sapi_sleep_until_interrupt'] = function(block) {
  var code = 'sleepUntilNextInterrupt();\n';
  return code;
};

Blockly.CiaaSapi['ciaa_sapi_pwm_write'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  var number_value_option = block.getFieldValue('value_option');
  // Add configuration to user setups
  Blockly.CiaaSapi.setups_['pwm-enable'] = 'pwmConfig(0, PWM_ENABLE);';
  Blockly.CiaaSapi.setups_['pwm-' + dropdown_pin_option + '-enable'] = 'pwmConfig(' + dropdown_pin_option + ', PWM_ENABLE_OUTPUT);';
  var code = 'pwmWrite(' + dropdown_pin_option + ', ' + number_value_option + ');';
  return code;
};

Blockly.CiaaSapi['ciaa_sapi_pwm_read'] = function(block) {
  var dropdown_pin_option = block.getFieldValue('pin_option');
  Blockly.CiaaSapi.setups_['pwm-enable'] = 'pwmConfig(0, PWM_ENABLE);';
  Blockly.CiaaSapi.setups_['pwm-' + dropdown_pin_option + '-enable'] = 'pwmConfig(' + dropdown_pin_option + ', PWM_ENABLE_OUTPUT);';
  var code = 'pwmRead(' + dropdown_pin_option + ')';
  return [code, Blockly.CiaaSapi.ORDER_NONE];
};

// Blockly.Arduino.base_map = function() {
//   var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
//   var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);
//   var code = 'map(' + value_num + ', 0, 1024, 0, ' + value_dmax + ')';
//   return [code, Blockly.Arduino.ORDER_NONE];
// };

// Blockly.Arduino.inout_buildin_led = function() {
//   var dropdown_stat = this.getFieldValue('STAT');
//   Blockly.Arduino.setups_['setup_output_13'] = 'pinMode(13, OUTPUT);';
//   var code = 'digitalWrite(13, ' + dropdown_stat + ');\n'
//   return code;
// };

// Blockly.Arduino.inout_digital_write = function() {
//   var dropdown_pin = this.getFieldValue('PIN');
//   var dropdown_stat = this.getFieldValue('STAT');
//   Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
//   var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n'
//   return code;
// };

// Blockly.Arduino.inout_digital_read = function() {
//   var dropdown_pin = this.getFieldValue('PIN');
//   Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
//   var code = 'digitalRead(' + dropdown_pin + ')';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

// Blockly.Arduino.inout_analog_write = function() {
//   var dropdown_pin = this.getFieldValue('PIN');
//   //var dropdown_stat = this.getFieldValue('STAT');
//   var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
//   //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
//   var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
//   return code;
// };

// Blockly.Arduino.inout_analog_read = function() {
//   var dropdown_pin = this.getFieldValue('PIN');
//   //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
//   var code = 'analogRead(' + dropdown_pin + ')';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

// Blockly.Arduino.inout_tone = function() {
//   var dropdown_pin = this.getFieldValue("PIN");
//   var value_num = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
//   Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
//   var code = "tone(" + dropdown_pin + ", " + value_num + ");\n";
//   return code;
// };

// Blockly.Arduino.inout_notone = function() {
//   var dropdown_pin = this.getFieldValue("PIN");
//   Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
//   var code = "noTone(" + dropdown_pin + ");\n";
//   return code;
// };

// Blockly.Arduino.inout_highlow = function() {
//   // Boolean values HIGH and LOW.
//   var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

// /*
// //servo
// #include <Servo.h>

// Servo servo_11;

// void setup() {
//   servo_11.attach(11);
// }

// void loop() {
// servo_11.write(0);

// servo_11.write(150); //0~180
// }
// */
// Blockly.Arduino.servo_move = function() {
//   var dropdown_pin = this.getFieldValue('PIN');
//   var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

//   Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
//   Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
//   Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

//   var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n';
//   return code;
// };

// Blockly.Arduino.servo_read_degrees = function() {
//   var dropdown_pin = this.getFieldValue('PIN');

//   Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
//   Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
//   Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

//   var code = 'servo_' + dropdown_pin + '.read()';
//   return code;
// };

// Blockly.Arduino.serial_print = function() {
//   var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
//   //content = content.replace('(','').replace(')','');

//   Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

//   var code = 'Serial.println(' + content + ');\n';
//   return code;
// };