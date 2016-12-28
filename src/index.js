
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
