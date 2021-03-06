'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hex = require('./Hex');

var _Hex2 = _interopRequireDefault(_Hex);

var _HexShape = require('./HexShape');

var _HexShape2 = _interopRequireDefault(_HexShape);

var _Path = require('./Path');

var _Path2 = _interopRequireDefault(_Path);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _HexUtils = require('./HexUtils');

var _HexUtils2 = _interopRequireDefault(_HexUtils);

var _GridGenerator = require('./GridGenerator');

var _GridGenerator2 = _interopRequireDefault(_GridGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    number = _React$PropTypes.number,
    object = _React$PropTypes.object,
    bool = _React$PropTypes.bool,
    string = _React$PropTypes.string,
    array = _React$PropTypes.array;

var HexGrid = function (_React$Component) {
  _inherits(HexGrid, _React$Component);

  function HexGrid(props) {
    _classCallCheck(this, HexGrid);

    var _this = _possibleConstructorReturn(this, (HexGrid.__proto__ || Object.getPrototypeOf(HexGrid)).call(this, props));

    _this.state = {
      layout: new _Layout2.default(props.config.layout, props.config.origin)
    };
    return _this;
  }

  _createClass(HexGrid, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var viewBox = [-(this.props.config.viewWidth / 2), -(this.props.config.viewHeight / 2), this.props.config.viewWidth, this.props.config.viewHeight];
      return _react2.default.createElement(
        'svg',
        { className: 'grid', width: this.props.config.width, height: this.props.config.height, viewBox: viewBox.join(' '), version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        this.props.hexagons.map(function (hex, index) {
          return _react2.default.createElement(_HexShape2.default, { key: _HexUtils2.default.getID(hex), hex: hex, layout: _this2.state.layout, actions: _this2.props.actions });
        }),
        _react2.default.createElement(_Path2.default, _extends({}, this.props.path, { layout: this.state.layout }))
      );
    }
  }]);

  return HexGrid;
}(_react2.default.Component);

HexGrid.generate = function (type) {
  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  var generator = _GridGenerator2.default.getGenerator(type);
  var hexagons = generator.apply(undefined, params);

  return hexagons;
};

HexGrid.propTypes = {
  config: object.isRequired,
  actions: object.isRequired,
  hexagons: array.isRequired,
  path: object
};

HexGrid.defaultProps = {
  config: {
    width: 800,
    height: 600,
    viewWidth: 100,
    viewHeight: 100
  },
  path: { start: null, end: null }
};

exports.default = HexGrid;