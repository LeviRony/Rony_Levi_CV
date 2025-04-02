import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section>
      <h3>Experience</h3>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h4>{exp.role} - {exp.company}</h4>
            <p>{exp.date}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
