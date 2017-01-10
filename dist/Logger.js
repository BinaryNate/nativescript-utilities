'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _trace2 = require('trace');

var _trace3 = _interopRequireDefault(_trace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* A Logger that implements a Winston-style logging interface.
*/
var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);

        // Enable NativeScript tracing.
        _trace3.default.setCategories(_trace3.default.categories.concat(_trace3.default.categories.Debug, _trace3.default.categories.Error));
        _trace3.default.enable();
    }

    /**
    * Logs a message at the debug level.
    *
    * @param {string} message  - Main message to log
    * @param {Object} metadata - Additional data that will be serialized and logged.
    */


    _createClass(Logger, [{
        key: 'info',
        value: function info(message, metadata) {
            this._trace(message, metadata, _trace3.default.categories.Debug);
        }

        /**
        * Logs a message at the error level.
        *
        * @param {string} message  - Main message to log
        * @param {Object} metadata - Additional data that will be serialized and logged.
        *                            If an error is included in the metadata object, its stack trace will be
        *                            expanded for logging.
        */

    }, {
        key: 'error',
        value: function error(message, metadata) {
            this._trace(message, metadata, _trace3.default.categories.Error);
        }

        /**
        * Logs a message at the debug level and prepends it with 'WARN: '.
        *
        * @param {string} message  - Main message to log
        * @param {Object} metadata - Additional data that will be serialized and logged.
        */

    }, {
        key: 'warn',
        value: function warn(message, metadata) {
            this._trace('WARN: ' + message, metadata, _trace3.default.categories.Debug);
        }

        /**
        * Logs a message at the debug level.
        *
        * @param {string} message  - Main message to log
        * @param {Object} metadata - Additional data that will be serialized and logged.
        */

    }, {
        key: 'verbose',
        value: function verbose() {
            this.info.apply(this, arguments);
        }

        /**
        * Logs a message at the debug level.
        *
        * @param {string} message  - Main message to log
        * @param {Object} metadata - Additional data that will be serialized and logged.
        */

    }, {
        key: 'silly',
        value: function silly() {
            this.info.apply(this, arguments);
        }

        /**
        * Replaces error objects included in the metadata with their stack traces.
        * @private
        */

    }, {
        key: '_expandErrors',
        value: function _expandErrors(metadata) {

            if ((typeof metadata === 'undefined' ? 'undefined' : _typeof(metadata)) !== 'object') {
                return;
            }

            for (var key in metadata) {
                var value = metadata[key];

                if (value instanceof Error) {
                    metadata[key] = value.name + ': ' + value.message + '\n' + value.stack;
                }
            }
        }
    }, {
        key: '_trace',
        value: function _trace(message, metadata, category) {

            this._expandErrors(metadata);

            if (typeof message !== 'string') {
                message = '';
            }

            if ((typeof metadata === 'undefined' ? 'undefined' : _typeof(metadata)) === 'object') {
                message += ' ' + JSON.stringify(metadata);
            }

            _trace3.default.write(message, category);
        }
    }]);

    return Logger;
}();

exports.default = Logger;