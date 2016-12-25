import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let boardConfig = {
      width: 800, height: 800,
      viewWidth: 200,
      viewHeight: 200,
      layout: { width: 4, height: 4, flat: false, spacing: 1.025 },
      origin: { x: 0, y: 0 }
    };
    let hexagons = HexGrid.generate('hexagon', 7);
    this.state = { hexagons, config: boardConfig };
  }
  render() {
    let { hexagons, config } = this.state;
    let actions = {};
    return (
      <div className="App">
        <HexGrid config={config} hexagons={hexagons} actions={actions}/>
      </div>
    );
  }
}

export default App;
