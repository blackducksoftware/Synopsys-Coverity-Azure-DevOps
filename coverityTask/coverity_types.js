"use strict";
exports.__esModule = true;
exports.CoverityCommand = void 0;
//Move the below to their own area.
//Maybe sort things a little more.
var CoverityCommand = /** @class */ (function () {
    function CoverityCommand(tool, commandArgs, commandMultiArgs) {
        this.commandArgs = [];
        this.commandMultiArgs = [];
        this.tool = tool;
        this.commandArgs = commandArgs;
        this.commandMultiArgs = commandMultiArgs;
    }
    return CoverityCommand;
}());
exports.CoverityCommand = CoverityCommand;
