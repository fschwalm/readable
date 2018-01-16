import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 'Hello',
    };
  }
  render() {
    const { initial } = this.state;
    return (
      <div className="App">
        <h1>{initial}</h1>
      </div>
    );
  }
}

export default App;
