"use strict";
Object.defineProperties(exports, {
  Peripheral: {get: function() {
      return Peripheral;
    }},
  __esModule: {value: true}
});
var $__events__,
    $__raspi_45_board__;
var events = ($__events__ = require("events"), $__events__ && $__events__.__esModule && $__events__ || {default: $__events__}).default;
var board = ($__raspi_45_board__ = require("raspi-board"), $__raspi_45_board__ && $__raspi_45_board__.__esModule && $__raspi_45_board__ || {default: $__raspi_45_board__}).default;
require('../lib/traceur-runtime');
var registeredPins = global.raspiPinUsage = global.raspiPinUsage || {};
var Peripheral = function Peripheral(pins) {
  var $__2 = this;
  this.alive = true;
  if (!Array.isArray(pins)) {
    pins = [pins];
  }
  this.pins = [];
  pins.map((function(pin) {
    var pin = board.getPinNumber(pin);
    $__2.pins.push(pin);
    if (registeredPins[pin]) {
      registeredPins[pin].destroy();
    }
    registeredPins[pin] = $__2;
  }));
};
($traceurRuntime.createClass)(Peripheral, {destroy: function() {
    this.alive = false;
    delete registeredPins[this.pin];
    this.emit('destroyed');
  }}, {}, events.EventEmitter);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzciLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkE7QUN4QkEsS0FBSyxpQkFBaUIsQUFBQyxDQUFDLE9BQU07WUNBOUIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsdUJBQXdCO0lBQUUsQURBOUIsQ0FBQztBRUF2QixXQUFTLENDQVQsRUFBQyxLQUFJLENEQU8sS0FBRyxBQ0FTLENBQUM7Q0pBeUIsQ0FBQzs7O0VEd0I1QyxPQUFLLEVNeEJaLEVBQUMsYUFBb0IsQ0FBQSxPQUFNLEFBQUMsVUFBa0IsQ0FDdEMsQ0FBQSxjQUFxQix1QkFBMkIsQ0FBQSxjQUFxQixHQUFLLEVBQUMsT0FBTSxhQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0VOd0J2RyxNQUFJLEVNekJYLEVBQUMscUJBQW9CLENBQUEsT0FBTSxBQUFDLGVBQWtCLENBQ3RDLENBQUEsc0JBQXFCLCtCQUEyQixDQUFBLHNCQUFxQixHQUFLLEVBQUMsT0FBTSxxQkFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztBTnlCOUcsTUFBTSxBQUFDLENBQUMsd0JBQXVCLENBQUMsQ0FBQztBQUVqQyxBQUFJLEVBQUEsQ0FBQSxjQUFhLEVBQUksQ0FBQSxNQUFLLGNBQWMsRUFBSSxDQUFBLE1BQUssY0FBYyxHQUFLLEdBQUMsQ0FBQztBTzVCdEUsQUFBSSxFQUFBLGFQOEJHLFNBQU0sV0FBUyxDQUNSLElBQUc7O0FBQ2IsS0FBRyxNQUFNLEVBQUksS0FBRyxDQUFDO0FBQ2pCLEtBQUksQ0FBQyxLQUFJLFFBQVEsQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFHO0FBQ3hCLE9BQUcsRUFBSSxFQUFFLElBQUcsQ0FBRSxDQUFDO0VBQ2pCO0FBQUEsQUFDQSxLQUFHLEtBQUssRUFBSSxHQUFDLENBQUM7QUFDZCxLQUFHLElBQUksQUFBQyxFQUFDLFNBQUMsR0FBRSxDQUFNO0FBQ2hCLEFBQUksTUFBQSxDQUFBLEdBQUUsRUFBSSxDQUFBLEtBQUksYUFBYSxBQUFDLENBQUMsR0FBRSxDQUFDLENBQUM7QUFDakMsWUFBUSxLQUFLLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUNuQixPQUFJLGNBQWEsQ0FBRSxHQUFFLENBQUMsQ0FBRztBQUN2QixtQkFBYSxDQUFFLEdBQUUsQ0FBQyxRQUFRLEFBQUMsRUFBQyxDQUFDO0lBQy9CO0FBQUEsQUFDQSxpQkFBYSxDQUFFLEdBQUUsQ0FBQyxPQUFPLENBQUM7RUFDNUIsRUFBQyxDQUFDO0FPNUNrQyxBUG1EeEMsQ09uRHdDO0FDQXhDLEFBQUMsZUFBYyxZQUFZLENBQUMsQUFBQyxjUjhDM0IsT0FBTSxDQUFOLFVBQU8sQUFBQyxDQUFFO0FBQ1IsT0FBRyxNQUFNLEVBQUksTUFBSSxDQUFDO0FBQ2xCLFNBQU8sZUFBYSxDQUFFLElBQUcsSUFBSSxDQUFDLENBQUM7QUFDL0IsT0FBRyxLQUFLLEFBQUMsQ0FBQyxXQUFVLENBQUMsQ0FBQztFQUN4QixNQXBCOEIsQ0FBQSxNQUFLLGFBQWEsQ1E3Qk07QVJtRHhEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTMtMjAxNCBCcnlhbiBIdWdoZXMgPGJyeWFuQHRoZW9yZXRpY2FsaWRlYXRpb25zLmNvbT4gKGh0dHA6Ly90aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCBldmVudHMgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBib2FyZCBmcm9tICdyYXNwaS1ib2FyZCc7XG5yZXF1aXJlKCcuLi9saWIvdHJhY2V1ci1ydW50aW1lJyk7XG5cbnZhciByZWdpc3RlcmVkUGlucyA9IGdsb2JhbC5yYXNwaVBpblVzYWdlID0gZ2xvYmFsLnJhc3BpUGluVXNhZ2UgfHwge307XG5cbmV4cG9ydCBjbGFzcyBQZXJpcGhlcmFsIGV4dGVuZHMgZXZlbnRzLkV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHBpbnMpIHtcbiAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGlucykpIHtcbiAgICAgIHBpbnMgPSBbIHBpbnMgXTtcbiAgICB9XG4gICAgdGhpcy5waW5zID0gW107XG4gICAgcGlucy5tYXAoKHBpbikgPT4ge1xuICAgICAgdmFyIHBpbiA9IGJvYXJkLmdldFBpbk51bWJlcihwaW4pO1xuICAgICAgdGhpcy5waW5zLnB1c2gocGluKTtcbiAgICAgIGlmIChyZWdpc3RlcmVkUGluc1twaW5dKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRQaW5zW3Bpbl0uZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgcmVnaXN0ZXJlZFBpbnNbcGluXSA9IHRoaXM7XG4gICAgfSk7XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFsaXZlID0gZmFsc2U7XG4gICAgZGVsZXRlIHJlZ2lzdGVyZWRQaW5zW3RoaXMucGluXTtcbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3llZCcpO1xuICB9XG59XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCAkX19wbGFjZWhvbGRlcl9fMCk7Iiwie2dldDogJF9fcGxhY2Vob2xkZXJfXzB9IiwiZ2V0ICRfX3BsYWNlaG9sZGVyX18wKCkgeyByZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzE7IH0iLCJfX2VzTW9kdWxlOiB0cnVlIiwie3ZhbHVlOiAkX19wbGFjZWhvbGRlcl9fMH0iLCIoJF9fcGxhY2Vob2xkZXJfXzAgPSByZXF1aXJlKCRfX3BsYWNlaG9sZGVyX18xKSwgXG4gICAgICAgICRfX3BsYWNlaG9sZGVyX18yICYmICRfX3BsYWNlaG9sZGVyX18zLl9fZXNNb2R1bGUgJiYgJF9fcGxhY2Vob2xkZXJfXzQgfHwge2RlZmF1bHQ6ICRfX3BsYWNlaG9sZGVyX181fSkiLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMSIsIigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKCRfX3BsYWNlaG9sZGVyX18wLCAkX19wbGFjZWhvbGRlcl9fMSwgJF9fcGxhY2Vob2xkZXJfXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMykiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=