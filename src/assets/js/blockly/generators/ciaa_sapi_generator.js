/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
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
 * @fileoverview Helper functions for generating Ciaa sAPI for blocks.
 * @author lanzierileandro@gmail.com <Leandro Lanzieri Rodriguez>
 */
'use strict';

goog.provide('Blockly.CiaaSapi');

goog.require('Blockly.Generator');


/**
 * CiaaSapi code generator.
 * @type !Blockly.Generator
 */
Blockly.CiaaSapi = new Blockly.Generator('CiaaSapi');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.CiaaSapi.addReservedWords(
  'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts'
);

/**
 * Order of operation ENUMs.
 *
 */
Blockly.CiaaSapi.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.CiaaSapi.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.CiaaSapi.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.CiaaSapi.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.CiaaSapi.ORDER_ADDITIVE = 4;       // + -
Blockly.CiaaSapi.ORDER_SHIFT = 5;          // << >>
Blockly.CiaaSapi.ORDER_RELATIONAL = 6;     // is is! >= > <= <
Blockly.CiaaSapi.ORDER_EQUALITY = 7;       // == != === !==
Blockly.CiaaSapi.ORDER_BITWISE_AND = 8;    // &
Blockly.CiaaSapi.ORDER_BITWISE_XOR = 9;    // ^
Blockly.CiaaSapi.ORDER_BITWISE_OR = 10;    // |
Blockly.CiaaSapi.ORDER_LOGICAL_AND = 11;   // &&
Blockly.CiaaSapi.ORDER_LOGICAL_OR = 12;    // ||
Blockly.CiaaSapi.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.CiaaSapi.ORDER_ASSIGNMENT = 14;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.CiaaSapi.ORDER_NONE = 99;          // (...)

/*
 * Ciaa Board profiles
 *
 */
var profile = {
  edu_ciaa: {
    description: "EduCiaa board",
    digital: [['Gpio 0','GPIO0'], ['Gpio 1','GPIO1'], ['Gpio 2','GPIO2'], ['Gpio 3','GPIO3'], ['Gpio 4','GPIO4'], ['Gpio 5','GPIO5'], ['Gpio 6','GPIO6'], ['Gpio 7','GPIO7'], ['Gpio 8','GPIO8']],
    leds: [["Led 1", "LED1"], ["Led 2", "LED2"], ["Led 3", "LED3"], ["Led Rojo", "LEDR"], ["Led Verde", "LEDG"], ["Led Azul", "LEDB"]],
    buttons: [["Tecla 1", "TEC1"], ["Tecla 2", "TEC2"], ["Tecla 3", "TEC3"], ["Tecla 4", "TEC4"]],
    adc: [["Canal 1", "CH1"], ["Canal 2", "CH2"], ["Canal 3", "CH3"]],
    dac: [['DAC', 'DAC']],
    serial: 9600,
    pwm: [["PWM0", "PWM0"], ["PWM1", "PWM1"], ["PWM2", "PWM2"], ["PWM3", "PWM3"], ["PWM4", "PWM4"],
          ["PWM5", "PWM5"], ["PWM6", "PWM6"], ["PWM7", "PWM7"], ["PWM8", "PWM8"], ["PWM9", "PWM9"], ["PWM10", "PWM10"]],
    servo: [["SERVO0", "SERVO0"], ["SERVO1", "SERVO1"], ["SERVO2", "SERVO2"], ["SERVO3", "SERVO3"], ["SERVO4", "SERVO4"],
            ["SERVO5", "SERVO5"], ["SERVO6", "SERVO6"], ["SERVO7", "SERVO7"], ["SERVO8", "SERVO8"]]
  },
  ciaa: {
    description: "Ciaa board"
    //53 digital
    //15 analog
  }
};
//set default profile to edu_ciaa standard-compatible board
profile["default"] = profile["edu_ciaa"];
//alert(profile.default.digital[0]);

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.CiaaSapi.init = function(workspace) {
  // Create a dictionary of definitions to be printed before setups.
  Blockly.CiaaSapi.definitions_ = Object.create(null);
  // Always include sAPI header file
  Blockly.CiaaSapi.definitions_['sapi-header-file'] = '#include "sapi.h"';
  // Create a dictionary of setups to be printed before the code.
  Blockly.CiaaSapi.setups_ = Object.create(null);

	if (!Blockly.CiaaSapi.variableDB_) {
		Blockly.CiaaSapi.variableDB_ =
				new Blockly.Names(Blockly.CiaaSapi.RESERVED_WORDS_);
	} else {
		Blockly.CiaaSapi.variableDB_.reset();
	}

	var defvars = [];
	var variables = Blockly.Variables.allVariables(workspace);
	for (var x = 0; x < variables.length; x++) {
		defvars[x] = 'int ' +
				Blockly.CiaaSapi.variableDB_.getName(variables[x],
				Blockly.Variables.NAME_TYPE) + ';\n';
	}
	Blockly.CiaaSapi.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.CiaaSapi.finish = function(code) {
  // Indent every line.
  code = '  ' + code.replace(/\n/g, '\n      ');
  var userCode = code.replace(/\n\s+$/, '\n');
  code = 'void main(void) \n{\n   // Board Initialization \n   boardConfig(); \n\n';
  code += '   // Enable tick counting every 1ms \n   tickConfig(1, 0); \n\n';
  code += '   // User generated setups \n   setup(); \n\n';
  code += '   while(1) {\n    '+ userCode + '\n  }\n}';

  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  for (var name in Blockly.CiaaSapi.definitions_) {
    var def = Blockly.CiaaSapi.definitions_[name];
    if (def.match(/^#include/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }

  // Convert the setups dictionary into a list.
  var setups = [];
  for (var name in Blockly.CiaaSapi.setups_) {
    setups.push(Blockly.CiaaSapi.setups_[name]);
  }

  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n') + '\n inline void setup(void) \n{\n  '+setups.join('\n  ') + '\n}'+ '\n\n';
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.CiaaSapi.scrubNakedValue = function(line) {
  return line + ';\n';
};

/**
 * Encode a string as a properly escaped CiaaSapi string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} CiaaSapi string.
 * @private
 */
Blockly.CiaaSapi.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};

/**
 * Common tasks for generating CiaaSapi from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The CiaaSapi code created for this block.
 * @return {string} CiaaSapi code with comments and subsequent blocks added.
 * @private
 */
Blockly.CiaaSapi.scrub_ = function(block, code) {
  if (code === null) {
    // Block has handled code generation itself.
    return '';
  }
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.CiaaSapi.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.CiaaSapi.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.CiaaSapi.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.CiaaSapi.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
