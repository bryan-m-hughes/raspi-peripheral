/*
The MIT License (MIT)

Copyright (c) 2014 Bryan Hughes <bryan@nebri.us>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require('events');
var raspi_board_1 = require('raspi-board');
if (!global.raspiPinUsage) {
    global.raspiPinUsage = {};
}
var registeredPins = global.raspiPinUsage;
var Peripheral = (function (_super) {
    __extends(Peripheral, _super);
    function Peripheral(pins) {
        _super.call(this);
        this.alive = true;
        this.pins = [];
        if (!Array.isArray(pins)) {
            pins = [pins];
        }
        for (var _i = 0, pins_1 = pins; _i < pins_1.length; _i++) {
            var alias = pins_1[_i];
            var pin = raspi_board_1.getPinNumber(alias);
            if (pin === null) {
                throw new Error("Invalid pin: " + alias);
            }
            this.pins.push(pin);
            if (registeredPins[pin]) {
                registeredPins[pin].destroy();
            }
            registeredPins[pin] = this;
        }
    }
    Peripheral.prototype.destroy = function () {
        if (this.alive) {
            this.alive = false;
            for (var _i = 0, _a = this.pins; _i < _a.length; _i++) {
                var pin = _a[_i];
                delete registeredPins[pin];
            }
            this.emit('destroyed');
        }
    };
    Peripheral.prototype.validateAlive = function () {
        if (!this.alive) {
            throw new Error('Attempted to access a destroyed peripheral');
        }
    };
    return Peripheral;
}(events_1.EventEmitter));
exports.Peripheral = Peripheral;
//# sourceMappingURL=index.js.map