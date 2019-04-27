import React, { Component } from 'react';
import Navigation from './component/Navigation';
import Hero from './component/Hero';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
      </div>
    );
  }
}

export default App;
