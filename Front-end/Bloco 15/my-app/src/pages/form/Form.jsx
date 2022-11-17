import React, { Component } from 'react'

import './form.css';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    area: 'front-end',
    profile: {},
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  saveButton = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        profile: {
            name: prevState.name,
            email: prevState.email,
            area: prevState.area,
          },
      }
    }, () => this.setState ({
      name: '',
      email: '',
      area: 'front-end',
    }));
  }

  render() {
    const { name, email } = this.state;
    
    return (
      <section id="section-form">
        <h1>Formulário</h1>
        <form id="form">
          <label class="labels" htmlFor="input-name">
            Nome:
            <input
              id="input-name"
              name="name"
              type="text"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label class="labels" htmlFor="input-name">
            Email:
            <input
              id="input-email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <select id="area" name="area" onChange={ this.handleChange }>
              <option value="front-end">Front-end</option>
              <option value="back-end">Back-end</option>
            </select>
          </div>

          <button
          id="submit-button"
          type="submit"
          onClick={ (event) => this.saveButton(event) }
          >
            Salvar
          </button>
        </form>
      </section>
    )
  }
}
