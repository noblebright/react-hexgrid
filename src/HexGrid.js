import React from 'react'
import Hex from './Hex'
const { number, object, bool, string, array } = React.PropTypes
import HexShape from './HexShape'
import Path from './Path'
import Layout from './Layout'
import GridGenerator from './GridGenerator'

class HexGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: new Layout(props.config.layout, props.config.origin)
    };
  }

  render() {
    let viewBox = [-(this.props.config.viewWidth / 2), -(this.props.config.viewHeight / 2), this.props.config.viewWidth, this.props.config.viewHeight]
    return (
      <svg className="grid" width={this.props.config.width} height={this.props.config.height} viewBox={viewBox.join(' ')} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {
          this.props.hexagons.map((hex, index) => {
            return (
              <HexShape key={index} hex={hex} layout={this.state.layout} actions={this.props.actions} />
            );
          })
        }
        <Path {...this.props.path} layout={this.state.layout} />
      </svg>
    );
  }
}

HexGrid.generate = (type, ...params) => {
  let generator = GridGenerator.getGenerator(type);
  let hexagons = generator.apply(this, params);

  return hexagons;
}

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

export default HexGrid;
