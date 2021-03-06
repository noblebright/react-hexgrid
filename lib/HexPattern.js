'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HexUtils = require('./HexUtils');

var _HexUtils2 = _interopRequireDefault(_HexUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react2.default.PropTypes.object;

var HexPattern = function (_React$Component) {
  _inherits(HexPattern, _React$Component);

  function HexPattern() {
    _classCallCheck(this, HexPattern);

    return _possibleConstructorReturn(this, (HexPattern.__proto__ || Object.getPrototypeOf(HexPattern)).apply(this, arguments));
  }

  _createClass(HexPattern, [{
    key: 'render',
    value: function render() {
      var hex = this.props.hex;
      if (!hex.image) return null;

      return _react2.default.createElement(
        'defs',
        null,
        _react2.default.createElement(
          'pattern',
          { id: _HexUtils2.default.getID(hex), patternUnits: 'userSpaceOnUse', x: '-15', y: '-10', width: '30', height: '20' },
          _react2.default.createElement('image', { xlinkHref: hex.image, x: '0', y: '0', width: '30', height: '20' })
        )
      );
    }
  }]);

  return HexPattern;
}(_react2.default.Component);

HexPattern.propTypes = {
  hex: object.isRequired
};

exports.default = HexPattern;