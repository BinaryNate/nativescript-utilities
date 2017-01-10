# nativescript-utilities

A (currently small) collection of reusable NativeScript utility classes and functions.


## Usage

Check out the [API docs](https://github.com/BinaryNate/nativescript-utilities/blob/master/docs/api.md) for the current utilities' documentation. Every class and function can be imported by name:

```js
import { Logger, convertUint8ArrayToReference } from 'nativescript-utilities';


try {
    let bytesReference = convertUint8ArrayToReference(new Uint8Array([ 0x90, 0xC3, 0xFF ]));
    // Do something with the interop.Reference instance, like pass it to some native C library.
} catch (error) {
    logger.error(`Something happened while trying to send the buffer.`, { error });
}
```

## building

This module is implemented in ES 6 and transpiled to ES 5 for export. To build the source:

```
npm run build
```

There's also a git pre-commit hook that automatically builds upon commit, since the dist directory is committed.

## linting

```
npm run lint
```
