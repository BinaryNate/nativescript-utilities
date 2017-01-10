import trace from 'trace';

/**
* A Logger that implements a Winston-style logging interface.
*/
class Logger {

    constructor() {
        // Enable NativeScript tracing.
        trace.setCategories(trace.categories.concat(
            trace.categories.Debug,
            trace.categories.Error
        ));
        trace.enable();
    }

    /**
    * Logs a message at the debug level.
    *
    * @param {string} message  - Main message to log
    * @param {Object} metadata - Additional data that will be serialized and logged.
    */
    info(message, metadata) {
        this._trace(message, metadata, trace.categories.Debug);
    }

    /**
    * Logs a message at the error level.
    *
    * @param {string} message  - Main message to log
    * @param {Object} metadata - Additional data that will be serialized and logged.
    *                            If an error is included in the metadata object, its stack trace will be
    *                            expanded for logging.
    */
    error(message, metadata) {
        this._trace(message, metadata, trace.categories.Error);
    }

    /**
    * Logs a message at the debug level and prepends it with 'WARN: '.
    *
    * @param {string} message  - Main message to log
    * @param {Object} metadata - Additional data that will be serialized and logged.
    */
    warn(message, metadata) {
        this._trace(`WARN: ${message}`, metadata, trace.categories.Debug);
    }

    /**
    * Logs a message at the debug level.
    *
    * @param {string} message  - Main message to log
    * @param {Object} metadata - Additional data that will be serialized and logged.
    */
    verbose(...args) {
        this.info(...args);
    }

    /**
    * Logs a message at the debug level.
    *
    * @param {string} message  - Main message to log
    * @param {Object} metadata - Additional data that will be serialized and logged.
    */
    silly(...args) {
        this.info(...args);
    }

    /**
    * Replaces error objects included in the metadata with their stack traces.
    * @private
    */
    _expandErrors(metadata) {

        if (typeof metadata !== 'object') {
            return;
        }

        for (let key in metadata) {
            let value = metadata[key];

            if (value instanceof Error) {
                metadata[key] = `${value.name}: ${value.message}\n${value.stack}`;
            }
        }
    }

    _trace(message, metadata, category) {

        this._expandErrors(metadata);

        if (typeof message !== 'string') {
            message = '';
        }

        if (typeof metadata === 'object') {
            message += ' ' + JSON.stringify(metadata);
        }

        trace.write(message, category);
    }
}

export default Logger;
