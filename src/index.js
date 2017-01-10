/* globals interop */

import _Logger from './Logger';
export const Logger = _Logger;

/**
* Converts a pointer to an array of bytes to a Uint8Array.
*
* @param   {interop.Pointer} pointer
* @param   {int}             length
* @returns {Uint8Array}
*/
export function convertPointerToUint8Array(pointer, length) {

    if (!(pointer instanceof interop.Pointer)) {
        throw new Error('The first parameter must be an interop.Pointer instance.');
    }
    if (!Number.isInteger(length)) {
        throw new Error ('The second parameter must be an integer.');
    }

    let uint8Array = new Uint8Array(length);

    for (let byteIndex = 0; byteIndex < length; byteIndex++) {

        let bytePointer = pointer.add(byteIndex),
            byteReference = new interop.Reference(interop.types.uint8, bytePointer);

        uint8Array[byteIndex] = byteReference.value;
    }
    return uint8Array;
}

/**
* Converts a Uint8Array to an interop.Reference instance.
*
* @param   {Uint8Array}        array
* @returns {interop.Reference}
*/
export function convertUint8ArrayToReference(array) {

    if (!(array instanceof Uint8Array)) {
        throw new Error('The parameter must be a Uint8Array instance.');
    }

    let pointer = interop.alloc(array.length * interop.sizeof(interop.types.uint8)),
        reference = new interop.Reference(interop.types.uint8, pointer);

    array.forEach((byte, index) => reference[index] = byte);

    return reference;
}

/**
* Converts a reference to a null-terminated C string to a JavaScript string.
*
* @param   {interop.Reference} stringReference
* @returns {string}
*/
export function convertReferenceToString(stringReference) {

    if (!(stringReference instanceof interop.Reference)) {
        throw new Error(`stringReference value '${stringReference}' is not a Reference instance.`);
    }

    let charCode,
        string = '',
        index = 0;

    do {
        charCode = stringReference[index];
        string += String.fromCharCode(charCode);
        index++;
    } while (charCode !== 0);

    return string;
}

/**
* Converts a Uint8Array containing a null-terminated C string to a JavaScript string.
*
* @param   {Uint8Array} array
* @returns {string}
*/
export function convertUint8ArrayToString(array) {

    if (!(array instanceof Uint8Array)) {
        throw new Error(`array value '${array}' is not a Uint8Array instance.`);
    }

    let charCode,
        string = '',
        index = 0;

    while (charCode !== 0 && (index < array.length)) {
        charCode = array[index];
        string += String.fromCharCode(charCode);
        index++;
    }

    return string;
}
