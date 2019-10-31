import React, { Component } from 'react';

import TechItem from './TechItem';

export default class Techlist extends Component {
  /**
   * static defaultProps = {
   *  tech: 'Oculto',
   * };
   *
   * static propTypes = {
   *  stech: PropTypes.string.isRequired,
   * }
   */

  state = {
    newTech: '',
    techs: ['Node.js', 'ReactJS', 'React Native'],
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { techs, newTech } = this.state;

    this.setState({ techs: [...techs, newTech], newTech: '' });
  };

  handleDelete = tech => {
    const { techs } = this.state;
    this.setState({ techs: techs.filter(t => t !== tech) });
  };

  render() {
    const { techs, newTech } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add Tech"
          onChange={this.handleInputChange}
          value={newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
