import React, { Component } from 'react';

class About extends Component {
  render() {
    const skills = ["HTML", "CSS", "JS"];
    const jsxSkills = skills.map((skill, indice) => <li key={indice}>{skill}</li>);
    return (
      <div>
        <h1>Otávio Vinícius</h1>
        <p>Eu sou um cara <em>legal</em></p>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;
