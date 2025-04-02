import React from 'react';

const Education = ({ education }) => {
  return (
    <section>
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h4>{edu.degree} - {edu.institution}</h4>
            <p>{edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
