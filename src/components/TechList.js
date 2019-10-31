import React, { Component } from 'react';

export default class Techlist extends Component {
  state = {
    techs: ['Node.js', 'ReactJS', 'React Native'],
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}
