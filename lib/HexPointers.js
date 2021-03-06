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

var _React$PropTypes = _react2.default.PropTypes,
    object = _React$PropTypes.object,
    string = _React$PropTypes.string;

var HexPointers = function (_React$Component) {
  _inherits(HexPointers, _React$Component);

  function HexPointers() {
    _classCallCheck(this, HexPointers);

    return _possibleConstructorReturn(this, (HexPointers.__proto__ || Object.getPrototypeOf(HexPointers)).apply(this, arguments));
  }

  _createClass(HexPointers, [{
    key: 'createPointerPolygon',
    value: function createPointerPolygon(corner1, corner2) {
      var p1 = corner1.split(',');
      var p2 = corner2.split(',');
      var a = { x: parseFloat(p1[0]), y: parseFloat(p1[1]) };
      var b = { x: parseFloat(p2[0]), y: parseFloat(p2[1]) };
      var c = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };

      var x = { x: (b.x + c.x) * 0.7, y: (b.y + c.y) * 0.7 };

      // Construct the points to polygon string
      return [b, c, x].map(function (p) {
        return p.x + ',' + p.y;
      }).join(' ');
    }
  }, {
    key: 'createPointerArc',
    value: function createPointerArc(corner1, corner2) {
      var c1 = corner1.split(',');
      var c2 = corner2.split(',');
      var p1 = { x: parseFloat(c1[0]), y: parseFloat(c1[1]) };
      var p2 = { x: parseFloat(c2[0]), y: parseFloat(c2[1]) };

      var a = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
      var b = p2;

      var size = 1.2;
      var ax = { x: a.x * size, y: a.y * size };
      var bx = { x: b.x * size, y: b.y * size };

      return 'M' + a.x + ',' + a.y + ' C' + ax.x + ',' + ax.y + ' ' + bx.x + ',' + bx.y + ' ' + b.x + ',' + b.y;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hex = this.props.hex;
      if (!hex || !hex.arrows) return null;

      var arrows = hex.arrows;
      var points = this.props.points.split(' ');

      var polygons = points.map(function (point, index) {
        if (arrows[index]) {
          var nextPoint = index == points.length - 1 ? points[0] : points[index + 1];
          // return this.createPointerPolygon(point, nextPoint);
          return _this2.createPointerArc(point, nextPoint);
        }
      });

      return _react2.default.createElement(
        'g',
        null,
        polygons.map(function (points, index) {
          // return <polygon key={index} points={points} />
          return _react2.default.createElement('path', { d: points });
        })
      );
    }
  }]);

  return HexPointers;
}(_react2.default.Component);

HexPointers.propTypes = {
  hex: object.isRequired,
  points: string.isRequired
};

exports.default = HexPointers;