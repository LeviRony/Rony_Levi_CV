import React from 'react';
import styles from "../page.module.css"
const Experience = ({ experiences }) => {
  return (
    <section>
      <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <ul key={index}>
            <h4>{exp.role} - {exp.company}</h4>
            <p>{exp.date}</p>
            <p className={styles.description}>{exp.description}</p>
          </ul>
        ))}
    </section>
  );
};

export default Experience;
