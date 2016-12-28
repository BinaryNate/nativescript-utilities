'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertNSArrayToArray = convertNSArrayToArray;
exports.convertReferenceToUint8Array = convertReferenceToUint8Array;
/* globals interop */

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

/**
* Converts a reference to an array of bytes to a Uint8Array.
*
* @param   {interop.Reference} reference
* @param   {int}               length
* @returns {Uint8Array}
*/
function convertReferenceToUint8Array(reference, length) {

    if (!(reference instanceof interop.Reference)) {
        throw new Error('The first parameter must be an interop.Reference instance.');
    }
    if (!Number.isInteger(length)) {
        throw new Error('The second parameter must be an integer.');
    }

    var uint8Array = new Uint8Array(length);

    for (var byteIndex = 0; byteIndex < length; byteIndex++) {

        var bytePointer = reference.add(byteIndex),
            byteReference = new interop.Reference(interop.types.uint8, bytePointer);

        uint8Array[byteIndex] = byteReference.value;
    }
    return uint8Array;
}