## Classes

<dl>
<dt><a href="#Logger">Logger</a></dt>
<dd><p>A Logger that implements a Winston-style logging interface.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#convertPointerToUint8Array">convertPointerToUint8Array(pointer, length)</a> ⇒ <code>Uint8Array</code></dt>
<dd><p>Converts a pointer to an array of bytes to a Uint8Array.</p>
</dd>
<dt><a href="#convertUint8ArrayToReference">convertUint8ArrayToReference(array)</a> ⇒ <code>interop.Reference</code></dt>
<dd><p>Converts a Uint8Array to an interop.Reference instance.</p>
</dd>
<dt><a href="#convertReferenceToString">convertReferenceToString(stringReference)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a reference to a null-terminated C string to a JavaScript string.</p>
</dd>
<dt><a href="#convertUint8ArrayToString">convertUint8ArrayToString(array)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a Uint8Array containing a null-terminated C string to a JavaScript string.</p>
</dd>
</dl>

<a name="Logger"></a>

## Logger
A Logger that implements a Winston-style logging interface.

**Kind**: global class  

* [Logger](#Logger)
    * [.info(message, metadata)](#Logger+info)
    * [.error(message, metadata)](#Logger+error)
    * [.warn(message, metadata)](#Logger+warn)
    * [._expandErrors()](#Logger+_expandErrors)

<a name="Logger+info"></a>

### logger.info(message, metadata)
Logs a message at the debug level.

**Kind**: instance method of <code>[Logger](#Logger)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Main message to log |
| metadata | <code>Object</code> | Additional data that will be serialized and logged. |

<a name="Logger+error"></a>

### logger.error(message, metadata)
Logs a message at the error level.

**Kind**: instance method of <code>[Logger](#Logger)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Main message to log |
| metadata | <code>Object</code> | Additional data that will be serialized and logged.                            If an error is included in the metadata object, its stack trace will be                            expanded for logging. |

<a name="Logger+warn"></a>

### logger.warn(message, metadata)
Logs a message at the debug level and prepends it with 'WARN: '.

**Kind**: instance method of <code>[Logger](#Logger)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Main message to log |
| metadata | <code>Object</code> | Additional data that will be serialized and logged. |

<a name="Logger+_expandErrors"></a>

### logger._expandErrors()
Replaces error objects included in the metadata with their stack traces.

**Kind**: instance method of <code>[Logger](#Logger)</code>  
<a name="convertPointerToUint8Array"></a>

## convertPointerToUint8Array(pointer, length) ⇒ <code>Uint8Array</code>
Converts a pointer to an array of bytes to a Uint8Array.

**Kind**: global function  

| Param | Type |
| --- | --- |
| pointer | <code>interop.Pointer</code> | 
| length | <code>int</code> | 

<a name="convertUint8ArrayToReference"></a>

## convertUint8ArrayToReference(array) ⇒ <code>interop.Reference</code>
Converts a Uint8Array to an interop.Reference instance.

**Kind**: global function  

| Param | Type |
| --- | --- |
| array | <code>Uint8Array</code> | 

<a name="convertReferenceToString"></a>

## convertReferenceToString(stringReference) ⇒ <code>string</code>
Converts a reference to a null-terminated C string to a JavaScript string.

**Kind**: global function  

| Param | Type |
| --- | --- |
| stringReference | <code>interop.Reference</code> | 

<a name="convertUint8ArrayToString"></a>

## convertUint8ArrayToString(array) ⇒ <code>string</code>
Converts a Uint8Array containing a null-terminated C string to a JavaScript string.

**Kind**: global function  

| Param | Type |
| --- | --- |
| array | <code>Uint8Array</code> | 

