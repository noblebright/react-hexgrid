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

var Path = function (_React$Component) {
  _inherits(Path, _React$Component);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).apply(this, arguments));
  }

  _createClass(Path, [{
    key: 'getPoints',
    value: function getPoints() {
      var _this2 = this;

      if (!this.props.start || !this.props.end) {
        return '';
      }

      // Get all the intersecting hexes between start and end points
      var distance = _HexUtils2.default.distance(this.props.start, this.props.end);
      var intersects = [];
      var step = 1.0 / Math.max(distance, 1);
      for (var i = 0; i <= distance; i++) {
        intersects.push(_HexUtils2.default.round(_HexUtils2.default.lerp(this.props.start, this.props.end, step * i)));
      }

      // Construct Path points out of all the intersecting hexes (e.g. M 0,0 L 10,20, L 30,20)
      var points = 'M';
      points += intersects.map(function (hex) {
        var p = _HexUtils2.default.hexToPixel(hex, _this2.props.layout);
        return ' ' + p.x + ',' + p.y + ' ';
      }).join('L');

      return points;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('path', { d: this.getPoints() });
    }
  }]);

  return Path;
}(_react2.default.Component);

Path.propTypes = {
  start: object,
  end: object,
  layout: object.isRequired
};

exports.default = Path;