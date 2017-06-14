
'use strict';

goog.provide('Blockly.Procedures');

// TODO(scr): Fix circular dependencies
// goog.require('Blockly.Block');
goog.require('Blockly.Field');
goog.require('Blockly.Names');
goog.require('Blockly.Workspace');


/**
 * Category to separate procedure names from variables and generated functions.
 */
Blockly.Procedures.NAME_TYPE = 'PROCEDURE';


/**
 * When a procedure definition is disposed of, find and dispose of all its
 *     callers.
 * @param {string} name Name of deleted procedure definition.
 * @param {!Blockly.Workspace} workspace The workspace to delete callers from.
 */
Blockly.Procedures.disposeCallers = function(name, workspace) {
  var callers = Blockly.Procedures.getCallers(name, workspace);
  for (var x = 0; x < callers.length; x++) {
    callers[x].dispose(true, false);
  }
};


/**
 * When a procedure definition changes its parameters, find and edit all its
 * callers.
 * @param {string} name Name of edited procedure definition.
 * @param {!Blockly.Workspace} workspace The workspace to delete callers from.
 * @param {!Array.<string>} paramNames Array of new parameter names.
 * @param {!Array.<string>} paramIds Array of unique parameter IDs.
 */
Blockly.Procedures.mutateCallers = function(name, workspace,
                                            paramNames, paramIds) {
  var callers = Blockly.Procedures.getCallers(name, workspace);
  for (var x = 0; x < callers.length; x++) {
    callers[x].setProcedureParameters(paramNames, paramIds);
  }
};
