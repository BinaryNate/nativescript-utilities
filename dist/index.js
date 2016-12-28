"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertNSArrayToArray = convertNSArrayToArray;

/**
* Converts an NSArray from the Objective-C runtime to a JavaScript array.
*
* @param   {NSArray|NSMutableArray} nsarray
* @returns {Array}
*/
function convertNSArrayToArray(nsarray) {

    var array = [];

    for (var i = 0; i < nsarray.count; i++) {
        array.push(nsarray.objectAtIndex(i));
    }

    return array;
}