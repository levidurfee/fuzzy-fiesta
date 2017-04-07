"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fuzzy = function () {
  function Fuzzy() {
    _classCallCheck(this, Fuzzy);
  }

  _createClass(Fuzzy, [{
    key: "factorial",
    value: function factorial(n, accumulator) {
      if (n === 0) {
        return accumulator;
      }
      return this.factorial(n - 1, n * accumulator);
    }
  }]);

  return Fuzzy;
}();

module.exports = Fuzzy;