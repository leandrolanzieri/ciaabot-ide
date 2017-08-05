/*! ciaabot-ide 2017-08-05 */

"use strict";goog.provide("Blockly.CiaaSapi"),goog.require("Blockly.Generator"),Blockly.CiaaSapi=new Blockly.Generator("CiaaSapi"),Blockly.CiaaSapi.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts"),Blockly.CiaaSapi.ORDER_ATOMIC=0,Blockly.CiaaSapi.ORDER_UNARY_POSTFIX=1,Blockly.CiaaSapi.ORDER_UNARY_PREFIX=2,Blockly.CiaaSapi.ORDER_MULTIPLICATIVE=3,Blockly.CiaaSapi.ORDER_ADDITIVE=4,Blockly.CiaaSapi.ORDER_SHIFT=5,Blockly.CiaaSapi.ORDER_RELATIONAL=6,Blockly.CiaaSapi.ORDER_EQUALITY=7,Blockly.CiaaSapi.ORDER_BITWISE_AND=8,Blockly.CiaaSapi.ORDER_BITWISE_XOR=9,Blockly.CiaaSapi.ORDER_BITWISE_OR=10,Blockly.CiaaSapi.ORDER_LOGICAL_AND=11,Blockly.CiaaSapi.ORDER_LOGICAL_OR=12,Blockly.CiaaSapi.ORDER_CONDITIONAL=13,Blockly.CiaaSapi.ORDER_ASSIGNMENT=14,Blockly.CiaaSapi.ORDER_NONE=99;var profile={edu_ciaa:{description:"EDU-CIAA-NXP board",digital:[["Gpio 0","GPIO0"],["Gpio 1","GPIO1"],["Gpio 2","GPIO2"],["Gpio 3","GPIO3"],["Gpio 4","GPIO4"],["Gpio 5","GPIO5"],["Gpio 6","GPIO6"],["Gpio 7","GPIO7"],["Gpio 8","GPIO8"],["T_FIL1","T_FIL1"],["T_COL2","T_COL2"],["T_COL0","T_COL0"],["T_FIL2","T_FIL2"],["T_FIL3","T_FIL3"],["T_FIL0","T_FIL0"],["T_COL1","T_COL1"],["CAN_TD","CAN_TD"],["CAN_RD","CAN_RD"],["RS232_TXD","RS232_TXD"],["RS232_RXD","RS232_RXD"],["LCD1","LCD1"],["LCD2","LCD2"],["LCD3","LCD3"],["LCDRS","LCDRS"],["LCD4","LCD4"],["SPI_MISO","SPI_MISO"],["ENET_TXD1","ENET_TXD1"],["ENET_TXD0","ENET_TXD0"],["ENET_MDIO","ENET_MDIO"],["ENET_CRS_DV","ENET_CRS_DV"],["ENET_MDC","ENET_MDC"],["ENET_TXEN","ENET_TXEN"],["ENET_RXD1","ENET_RXD1"],["LCDEN","LCDEN"],["SPI_MOSI","SPI_MOSI"],["ENET_RXD0","ENET_RXD0"]],leds:[["Led 1","LED1"],["Led 2","LED2"],["Led 3","LED3"],["Led Rojo","LEDR"],["Led Verde","LEDG"],["Led Azul","LEDB"]],buttons:[["Tecla 1","TEC1"],["Tecla 2","TEC2"],["Tecla 3","TEC3"],["Tecla 4","TEC4"]],adc:[["Canal 1","CH1"],["Canal 2","CH2"],["Canal 3","CH3"]],dac:[["DAC","DAC"]],serial:9600,pwm:[["PWM0","PWM0"],["PWM1","PWM1"],["PWM2","PWM2"],["PWM3","PWM3"],["PWM4","PWM4"],["PWM5","PWM5"],["PWM6","PWM6"],["PWM7","PWM7"],["PWM8","PWM8"],["PWM9","PWM9"],["PWM10","PWM10"]],servo:[["SERVO0","SERVO0"],["SERVO1","SERVO1"],["SERVO2","SERVO2"],["SERVO3","SERVO3"],["SERVO4","SERVO4"],["SERVO5","SERVO5"],["SERVO6","SERVO6"],["SERVO7","SERVO7"],["SERVO8","SERVO8"]],types:[["Entero","int"],["Decimal","float"],["Booleano","bool_t"],["Nulo","void"]],timeUnits:[["segundos","_s"],["milisegundos","_ms"]],printTypes:[["texto","TEXT"],["número","NUMBER"],["caracter","CHAR"]]},ciaa:{description:"CIAA board"}};profile.default=profile.edu_ciaa,Blockly.CiaaSapi.init=function(a){Blockly.CiaaSapi.definitions_=Object.create(null),Blockly.CiaaSapi.definitions_["sapi-header-file"]='\r\n#include "sapi.h"\nCONSOLE_PRINT_ENABLE',Blockly.CiaaSapi.setups_=Object.create(null),Blockly.CiaaSapi.variableDB_?Blockly.CiaaSapi.variableDB_.reset():Blockly.CiaaSapi.variableDB_=new Blockly.Names(Blockly.CiaaSapi.RESERVED_WORDS_);for(var i=[],l=Blockly.Variables.allVariables(a),o=0;o<l.length;o++)i[o]="int "+Blockly.CiaaSapi.variableDB_.getName(l[o],Blockly.Variables.NAME_TYPE)+";\n";Blockly.CiaaSapi.definitions_.variables=i.join("\n")},Blockly.CiaaSapi.finish=function(a){a=(a="  "+a.replace(/\n/g,"\n\t")).replace(/\n\s+$/,"\n")+"\n";var i=[],l=[];for(var o in Blockly.CiaaSapi.definitions_){var e=Blockly.CiaaSapi.definitions_[o];e.match(/^#include/)?i.push(e):l.push(e)}var t=[];for(var o in Blockly.CiaaSapi.setups_)t.push(Blockly.CiaaSapi.setups_[o]);return(i.join("\n")+"\n\n"+l.join("\n")+"\ninline void setup(void) \n{\n  "+t.join("\n  ")+"\n}\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a},Blockly.CiaaSapi.scrubNakedValue=function(a){return a+";\n"},Blockly.CiaaSapi.quote_=function(a){return'"'+(a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'"))+'"'},Blockly.CiaaSapi.scrub_=function(a,i){if(null===i)return"";var l="";if(!a.outputConnection||!a.outputConnection.targetConnection){var o=a.getCommentText();o&&(l+=Blockly.CiaaSapi.prefixLines(o,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)if(a.inputList[e].type==Blockly.INPUT_VALUE){var t=a.inputList[e].connection.targetBlock();t&&(o=Blockly.CiaaSapi.allNestedComments(t))&&(l+=Blockly.CiaaSapi.prefixLines(o,"// "))}}var n=a.nextConnection&&a.nextConnection.targetBlock();return l+i+Blockly.CiaaSapi.blockToCode(n)},goog.provide("Blockly.CiaaSapi.base"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.ciaa_sapi_blocking_delay=function(){return"delay("+(Blockly.CiaaSapi.valueToCode(this,"delay_time",Blockly.CiaaSapi.ORDER_ATOMIC)||"2000")+");\n"},Blockly.CiaaSapi.ciaa_sapi_delay_seconds=function(a){var i,l=Blockly.CiaaSapi.valueToCode(a,"TIME",Blockly.CiaaSapi.ORDER_ATOMIC);switch(a.getFieldValue("UNIT")){case"_s":i="1000 * ";break;default:i=""}return"delay("+i+l+");\n"},Blockly.CiaaSapi.ciaa_sapi_inaccurate_blocking_delay=function(a){return"delayInaccurate("+Blockly.CiaaSapi.valueToCode(a,"delay_ms",Blockly.CiaaSapi.ORDER_ATOMIC)+");\n"},Blockly.CiaaSapi.ciaa_sapi_gpio_write=function(a){var i=a.getFieldValue("pin_option"),l=(Blockly.CiaaSapi.valueToCode(a,"pin",Blockly.CiaaSapi.ORDER_ATOMIC),Blockly.CiaaSapi.valueToCode(a,"value",Blockly.CiaaSapi.ORDER_ATOMIC));return Blockly.CiaaSapi.setups_["gpio-enable"]="gpioConfig(0, GPIO_ENABLE);",Blockly.CiaaSapi.setups_["gpio-config-output"+i]="gpioConfig("+i+", GPIO_OUTPUT);","gpioWrite("+i+", "+l+");\n"},Blockly.CiaaSapi.ciaa_sapi_gpio_digital_read=function(a){var i=a.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["gpio-enable"]="gpioConfig(0, GPIO_ENABLE);",Blockly.CiaaSapi.setups_["gpio-config-input"+i]="gpioConfig("+i+", GPIO_INPUT);",["gpioRead("+i+")",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_gpio_toggle=function(a){return"gpioToggle("+a.getFieldValue("DIGITAL_PIN")+");\n"},Blockly.CiaaSapi.ciaa_sapi_gpio_analog_read=function(a){var i=a.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["adc-enable"]="adcConfig(ADC_ENABLE);",["adcRead("+i+")",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_dac_write=function(a){var i=a.getFieldValue("pin_option"),l=Blockly.CiaaSapi.valueToCode(a,"value",Blockly.CiaaSapi.ORDER_ATOMIC);return Blockly.CiaaSapi.setups_["dac-enable"]="dacConfig(DAC_ENABLE);","dacWrite("+i+", "+l+");\n"},Blockly.CiaaSapi.ciaa_sapi_sleep_until_interrupt=function(a){return"sleepUntilNextInterrupt();\n"},Blockly.CiaaSapi.ciaa_sapi_get_tick_count=function(a){return["tickRead()",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_set_tick_count=function(a){return"tickWrite("+Blockly.CiaaSapi.valueToCode(a,"ticks",Blockly.CiaaSapi.ORDER_ATOMIC)+");\n"},Blockly.CiaaSapi.ciaa_sapi_pwm_write=function(a){var i=a.getFieldValue("pin_option"),l=Blockly.CiaaSapi.valueToCode(a,"value",Blockly.CiaaSapi.ORDER_ATOMIC);return Blockly.CiaaSapi.setups_["pwm-enable"]="pwmConfig(0, PWM_ENABLE);",Blockly.CiaaSapi.setups_["pwm-"+i+"-enable"]="pwmConfig("+i+", PWM_ENABLE_OUTPUT);","pwmWrite("+i+", "+l+");"},Blockly.CiaaSapi.ciaa_sapi_pwm_read=function(a){var i=a.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["pwm-enable"]="pwmConfig(0, PWM_ENABLE);",Blockly.CiaaSapi.setups_["pwm-"+i+"-enable"]="pwmConfig("+i+", PWM_ENABLE_OUTPUT);",["pwmRead("+i+")",Blockly.CiaaSapi.ORDER_NONE]},goog.provide("Blockly.CiaaSapi.servo"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.ciaa_sapi_servo_read=function(a){var i=a.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["servo-enable"]="servoConfig(0, SERVO_ENABLE);",Blockly.CiaaSapi.setups_["servo-"+i+"-enable"]="servoConfig("+i+", SERVO_ENABLE_OUTPUT);",["servoRead("+i+")",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_servo_write=function(a){var i=a.getFieldValue("pin_option"),l=Blockly.CiaaSapi.valueToCode(a,"value",Blockly.CiaaSapi.ORDER_ATOMIC);return Blockly.CiaaSapi.setups_["servo-enable"]="servoConfig(0, SERVO_ENABLE);",Blockly.CiaaSapi.setups_["servo-"+i+"-enable"]="servoConfig("+i+", SERVO_ENABLE_OUTPUT);","servoWrite("+i+", "+l+");\n"},goog.provide("Blockly.CiaaSapi.math"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.math_number=function(){var a=window.parseFloat(this.getFieldValue("NUM"));return[a,a<0?Blockly.CiaaSapi.ORDER_UNARY_PREFIX:Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.math_arithmetic=function(){var a,i=this.getFieldValue("OP"),l=Blockly.CiaaSapi.math_arithmetic.OPERATORS[i],o=l[0],e=l[1],t=Blockly.CiaaSapi.valueToCode(this,"A",e)||"0",n=Blockly.CiaaSapi.valueToCode(this,"B",e)||"0";return o?(a=t+o+n,[a,e]):(a="Math.pow("+t+", "+n+")",[a,Blockly.CiaaSapi.ORDER_UNARY_POSTFIX])},Blockly.CiaaSapi.math_arithmetic.OPERATORS={ADD:[" + ",Blockly.CiaaSapi.ORDER_ADDITIVE],MINUS:[" - ",Blockly.CiaaSapi.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.CiaaSapi.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.CiaaSapi.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.math_map_range=function(a){var i=Blockly.CiaaSapi.valueToCode(a,"VALUE",Blockly.CiaaSapi.ORDER_ATOMIC);i||(i="512");var l=Blockly.CiaaSapi.valueToCode(a,"MIN_INITIAL",Blockly.CiaaSapi.ORDER_ATOMIC);l||(l="0");var o=Blockly.CiaaSapi.valueToCode(a,"MAX_INITIAL",Blockly.CiaaSapi.ORDER_ATOMIC);o||(o="1023");var e=Blockly.CiaaSapi.valueToCode(a,"MIN_LAST",Blockly.CiaaSapi.ORDER_ATOMIC);e||(e="0");var t=Blockly.CiaaSapi.valueToCode(a,"MAX_LAST",Blockly.CiaaSapi.ORDER_ATOMIC);return t||(t="255"),["("+i+" - "+l+") * ("+t+" - "+e+") / ("+o+" - "+l+" ) + "+e,Blockly.CiaaSapi.ORDER_NONE]},goog.provide("Blockly.CiaaSapi.logic"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.controls_if=function(){var a=0,i=Blockly.CiaaSapi.valueToCode(this,"IF"+a,Blockly.CiaaSapi.ORDER_NONE)||"false",l=Blockly.CiaaSapi.statementToCode(this,"DO"+a),o="if ("+i+") {\n"+l+"\n}";for(a=1;a<=this.elseifCount_;a++)o+=" else if ("+(i=Blockly.CiaaSapi.valueToCode(this,"IF"+a,Blockly.CiaaSapi.ORDER_NONE)||"false")+") {\n"+(l=Blockly.CiaaSapi.statementToCode(this,"DO"+a))+"}";return this.elseCount_&&(o+=" else {\n"+(l=Blockly.CiaaSapi.statementToCode(this,"ELSE"))+"\n}"),o+"\n"},Blockly.CiaaSapi.logic_compare=function(){var a=this.getFieldValue("OP"),i=Blockly.CiaaSapi.logic_compare.OPERATORS[a],l="=="==i||"!="==i?Blockly.CiaaSapi.ORDER_EQUALITY:Blockly.CiaaSapi.ORDER_RELATIONAL;return[(Blockly.CiaaSapi.valueToCode(this,"A",l)||"0")+" "+i+" "+(Blockly.CiaaSapi.valueToCode(this,"B",l)||"0"),l]},Blockly.CiaaSapi.logic_compare.OPERATORS={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="},Blockly.CiaaSapi.logic_operation=function(){var a="AND"==this.getFieldValue("OP")?"&&":"||",i="&&"==a?Blockly.CiaaSapi.ORDER_LOGICAL_AND:Blockly.CiaaSapi.ORDER_LOGICAL_OR;return[(Blockly.CiaaSapi.valueToCode(this,"A",i)||"false")+" "+a+" "+(Blockly.CiaaSapi.valueToCode(this,"B",i)||"false"),i]},Blockly.CiaaSapi.logic_negate=function(){var a=Blockly.CiaaSapi.ORDER_UNARY_PREFIX;return["!"+(Blockly.CiaaSapi.valueToCode(this,"BOOL",a)||"false"),a]},Blockly.CiaaSapi.logic_boolean=function(){return["TRUE"==this.getFieldValue("BOOL")?"true":"false",Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.logic_null=function(){return["NULL",Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.logic_true=function(a){return["TRUE",Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.logic_false=function(a){return["FALSE",Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.logic_on=function(a){return["ON",Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.logic_off=function(a){return["OFF",Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.switch_case=function(a){var i,l="",o=Blockly.CiaaSapi.valueToCode(a,"CONDITION",Blockly.CiaaSapi.ORDER_NONE)||null;if(o){l="\nswitch ("+o+"){\n",l+="\tcase "+(Blockly.CiaaSapi.valueToCode(a,"CASECONDITION0",Blockly.CiaaSapi.ORDER_NONE)||null)+":\n"+Blockly.CiaaSapi.statementToCode(a,"CASE0")+"\n\t\tbreak;\n";for(var e=1;e<=a.caseCount_;e++)(i=Blockly.CiaaSapi.valueToCode(a,"CASECONDITION"+e,Blockly.CiaaSapi.ORDER_NONE)||null)&&(l+="\tcase "+i+":\n"+Blockly.CiaaSapi.statementToCode(a,"CASE"+e)+"\n\t\tbreak;\n");a.defaultCount_&&(l+="\tdefault:\n"+Blockly.CiaaSapi.statementToCode(a,"ONDEFAULT")+"\n\t\tbreak;\n"),l+="}\n"}return l},goog.provide("Blockly.CiaaSapi.procedures"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.procedures_defreturn=function(){var a=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),i=Blockly.CiaaSapi.statementToCode(this,"STACK");Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(i=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+i);var l=Blockly.CiaaSapi.valueToCode(this,"RETURN",Blockly.CiaaSapi.ORDER_NONE)||"";l&&(l="  return "+l+";\n");for(var o=l?"int":"void",e=[],t=0;t<this.arguments_.length;t++)e[t]=this.argumentsTypes_[t]+" "+Blockly.CiaaSapi.variableDB_.getName(this.arguments_[t],Blockly.Variables.NAME_TYPE);var n=o+" "+a+"("+e.join(", ")+") {\n"+i+l+"}\n";return n=Blockly.CiaaSapi.scrub_(this,n),Blockly.CiaaSapi.definitions_[a]=n,null},Blockly.CiaaSapi.procedures_defnoreturn=Blockly.CiaaSapi.procedures_defreturn,Blockly.CiaaSapi.procedures_callreturn=function(){for(var a=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),i=[],l=0;l<this.arguments_.length;l++)i[l]=Blockly.CiaaSapi.valueToCode(this,"ARG"+l,Blockly.CiaaSapi.ORDER_NONE)||"null";return[a+"("+i.join(", ")+")",Blockly.CiaaSapi.ORDER_UNARY_POSTFIX]},Blockly.CiaaSapi.procedures_callnoreturn=function(){for(var a=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),i=[],l=0;l<this.arguments_.length;l++)i[l]=Blockly.CiaaSapi.valueToCode(this,"ARG"+l,Blockly.CiaaSapi.ORDER_NONE)||"null";return a+"("+i.join(", ")+");\n"},Blockly.CiaaSapi.procedures_ifreturn=function(){var a="if ("+(Blockly.CiaaSapi.valueToCode(this,"CONDITION",Blockly.CiaaSapi.ORDER_NONE)||"false")+") {\n";return this.hasReturnValue_?a+="  return "+(Blockly.CiaaSapi.valueToCode(this,"VALUE",Blockly.CiaaSapi.ORDER_NONE)||"null")+";\n":a+="  return;\n",a+="}\n"},goog.provide("Blockly.CiaaSapi.variables"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.variables_get=function(){return[Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.variables_declare=function(){this.getFieldValue("TYPE");var a=Blockly.CiaaSapi.valueToCode(this,"VALUE",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0",i=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return Blockly.CiaaSapi.setups_["setup_var"+i]=i+" = "+a+";\n",""},Blockly.CiaaSapi.variables_set=function(){var a=Blockly.CiaaSapi.valueToCode(this,"VALUE",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0";return Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+a+";\n"},goog.provide("Blockly.CiaaSapi.texts"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.text=function(){return[Blockly.CiaaSapi.quote_(this.getFieldValue("TEXT")),Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.ciaa_sapi_uart_send_string=function(a){var i=a.getFieldValue("PRINT_TYPE"),l=Blockly.CiaaSapi.valueToCode(a,"printing",Blockly.CiaaSapi.ORDER_ATOMIC),o="TRUE"==a.getFieldValue("new_line");Blockly.CiaaSapi.setups_.console_print_config_uart="consolePrintConfigUart(UART_USB, 9600);";var e="";return"TEXT"===i?e="consolePrintString("+l+");\n":"NUMBER"===i&&(e="consolePrintInt("+l+");\n"),o&&(e+="consolePrintEnter();\n"),e},Blockly.CiaaSapi.ciaa_sapi_uart_receive_byte=function(a){var i=Blockly.CiaaSapi.variableDB_.getName(a.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE);return Blockly.CiaaSapi.setups_.console_print_config_uart="consolePrintConfigUart(UART_USB, 9600);",["uartReadByte(UART_USB, &"+i+")",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_uart_send_byte=function(a){var i=Blockly.CiaaSapi.valueToCode(a,"BYTE",Blockly.CiaaSapi.ORDER_ATOMIC);return Blockly.CiaaSapi.setups_.console_print_config_uart="consolePrintConfigUart(UART_USB, 9600);","uartWriteByte(UART_USB, "+i+");\n"},goog.provide("Blockly.CiaaSapi.loops"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.controls_for=function(){var a=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),i=Blockly.CiaaSapi.valueToCode(this,"FROM",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0",l=Blockly.CiaaSapi.valueToCode(this,"TO",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0",o=Blockly.CiaaSapi.valueToCode(this,"BY",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0",e=Blockly.CiaaSapi.statementToCode(this,"DO");Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(e=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+e);var t;if(i.match(/^-?\d+(\.\d+)?$/)&&l.match(/^-?\d+(\.\d+)?$/))t="for ("+a+" = "+i+"; "+a+(parseFloat(i)<=parseFloat(l)?" <= ":" >= ")+l+"; "+a+(0==o?"++":"+="+o)+") {\n"+e+"}\n";else{t="";var n=i;i.match(/^\w+$/)||i.match(/^-?\d+(\.\d+)?$/)||(t+="int "+(n=Blockly.CiaaSapi.variableDB_.getDistinctName(a+"_start",Blockly.Variables.NAME_TYPE))+" = "+i+";\n");var c=l;l.match(/^\w+$/)||l.match(/^-?\d+(\.\d+)?$/)||(t+="int "+(c=Blockly.CiaaSapi.variableDB_.getDistinctName(a+"_end",Blockly.Variables.NAME_TYPE))+" = "+l+";\n"),t+="for ("+a+" = "+n+";\n    ("+n+" <= "+c+") ? "+a+" <= "+c+" : "+a+" >= "+c+";\n    "+a+" += ("+n+" <= "+c+") ? 1 : -1) {\n"+e+"}\n"}return t},Blockly.CiaaSapi.controls_for_simplified=function(){var a=Blockly.CiaaSapi.valueToCode(this,"CANT",Blockly.CiaaSapi.ORDER_ATOMIC),i=Blockly.CiaaSapi.statementToCode(this,"DO");Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(i=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+i);var l;return l="for (int counter = 0; counter < ",l+=a||"1",l+="; counter++) {\n"+i+"}\n"},Blockly.CiaaSapi.controls_whileUntil=function(){var a="UNTIL"==this.getFieldValue("MODE"),i=Blockly.CiaaSapi.valueToCode(this,"BOOL",a?Blockly.CiaaSapi.ORDER_LOGICAL_NOT:Blockly.CiaaSapi.ORDER_NONE)||"false",l=Blockly.CiaaSapi.statementToCode(this,"DO");return Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(l=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+l),a&&(i="!"+i),"while ("+i+") {\n"+l+"}\n"},Blockly.CiaaSapi.controls_repeat_forever=function(a){var i="UNTIL"==this.getFieldValue("MODE"),l=(Blockly.CiaaSapi.valueToCode(this,"BOOL",i?Blockly.CiaaSapi.ORDER_LOGICAL_NOT:Blockly.CiaaSapi.ORDER_NONE),Blockly.CiaaSapi.statementToCode(a,"NAME"));return Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(l=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+l),"while (TRUE) {\n"+l+"}\n"},Blockly.CiaaSapi.controls_main_program=function(a){var i="";return i="void main(void) {\n// Inicializar placa \nboardConfig(); \n\n",i+="// Habilita cuenta de tick cada 1ms \ntickConfig(1, 0); \n\n",i+="// Inicializaciones del usuario prueba\nsetup(); \n\n",i+=Blockly.CiaaSapi.statementToCode(a,"programa")+"\n}"};