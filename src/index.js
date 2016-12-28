/* globals interop */

/**
* Converts an NSArray from the Objective-C runtime to a JavaScript array.
*
* @param   {NSArray|NSMutableArray} nsarray
* @returns {Array}
*/
export function convertNSArrayToArray(nsarray) {

    let array = [];

    for (let i = 0; i < nsarray.count; i++) {
        array.push(nsarray.objectAtIndex(i));
    }

    return array;
}

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
