import React from 'react';
const { object } = React.PropTypes
import HexPattern from './HexPattern';
import HexPointers from './HexPointers';
import HexUtils from './HexUtils';

class HexShape extends React.Component {

  getPoints(hex) {
    let points = this.props.layout.getPolygonPoints(hex)

    return points.map(point => {
      return point.x + ',' + point.y;
    }).join(' ');
  }

  translate() {
    let hex = this.props.hex;
    let pixel = HexUtils.hexToPixel(hex, this.props.layout);
    return `translate(${pixel.x}, ${pixel.y})`;
  }

  getStyles(hex) {
    return !hex.image ? {} : { fill: 'url(#'+ HexUtils.getID(hex) +')' };
  }

  render() {
    let hex = this.props.hex;
    let text = hex.text || HexUtils.getID(hex);
    let actions = this.props.actions;
    let styles = this.getStyles(hex);
    let points = this.getPoints(hex);
    let className = hex.className ? 'shape-group ' + hex.className : 'shape-group';

    return (
      <g className={className} transform={this.translate()} draggable="true"
        onMouseEnter={e => actions.onMouseEnter && actions.onMouseEnter(this.props.hex, e)}
        onMouseLeave={e => actions.onMouseLeave && actions.onMouseLeave(this.props.hex, e)}
        onDragStart={e => actions.onDragStart && actions.onDragStart(this.props.hex, e)}
        onDragEnd={e => actions.onDragEnd && actions.onDragEnd(this.props.hex, e)}
        onDragOver={e => actions.onDragOver && actions.onDragOver(this.props.hex, e)}
        onDrop={e => actions.onDrop && actions.onDrop(this.props.hex, e)}
        onClick={e => actions.onClick && actions.onClick(this.props.hex, e)}
        >
        <HexPattern hex={hex} />
        <polygon points={points} style={styles} />
        <HexPointers hex={hex} points={points} />
        <text x="0" y="0.3em" textAnchor="middle">{text}</text>
      </g>
    );
  }
}
HexShape.propTypes = {
  hex: object.isRequired,
  layout: object.isRequired,
  actions: object.isRequired
};

export default HexShape;
