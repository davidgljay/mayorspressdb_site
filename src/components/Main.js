require('normalize.css');
require('styles/App.css');

import React from 'react';
import CitiesComponent from './CitiesComponent.js'

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      		<CitiesComponent />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
