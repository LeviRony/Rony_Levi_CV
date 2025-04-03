import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import styles from "./page.module.css";

const App = () => {
  const headerData = {
    name: 'Rony Levi',
    email: 'ronylevi99@gmail.com',
    phone: '+972544273287',
  };

  const experienceData = [
    {
      role: 'Director of QA',
      company: 'Celsius Network',
      date: '2020 - 2025',
      description: [
        <div className={styles.description_list}>
          <li>Built and managed a global QA department with 50+ employees across multiple locations.</li>
          <li>Oversaw Mobile, Web, Backend, and Database products.</li>
          <li>Led automation (Java), manual testing, infrastructure, and load testing teams.</li>
          <li>Defined company-wide QA processes across departments.</li>
          <li>Managed budgets, contracts, and KPIs to ensure cost efficiency.</li>
        </div>
      ],
    },
    {
      role: 'Head of QA',
      company: 'Glassbox Dgtal',
      date: '2018 - 2020',
      description: [
        <div className={styles.description_list}>
          <li>Established and managed the global QA department (Manual & Automation).</li>
          <li>Led CI/CD implementation and optimized release cycles.</li>
          <li>Developed and standardized work & quality processes for R&D.</li>
          <li>Acted as Release Manager, ensuring seamless software deployments.</li>
          <li>Built automated reports, dashboards, and release notes for visibility and tracking.</li>
        </div>
      ],
    },
    {
      role: 'QA Team Manager',
      company: 'Mobilogy (Formerly Cellebrite Division) - Company sold',
      date: '2017 - 2018',
      description: [
        <div className={styles.description_list}>
          <li>Led the System-Level QA team, testing mobile, web, Windows (SaaS), and hardware.</li>
          <li>Built and defined QA methodologies, processes, and recruitment for a new system-level team.</li>
          <li>Managed both manual and automation testers, providing mentorship and leadership.</li>
        </div>
      ],
    },
    {
      role: 'SW QA Team Leader',
      company: 'SIRIN Labs',
      date: '2014 - 2017',
      description: [
        <div className={styles.description_list}>
          <li>Led end-to-end testing on a custom Android OS, encrypted communication, and hardware upgrades.</li>
          <li>Built the QA team from the ground up, setting high testing standards.</li>
          <li>Conducted product comparisons and vendor evaluations for strategic partnerships.</li>
        </div>
      ],
    },
    {
      role: 'QA Engineer',
      company: 'SIRIN Labs',
      date: '2013 - 2014',
      description: [
        <div className={styles.description_list}>
          <li>Tested Android OS for all Samsung mobile devices, ensuring optimal performance and stability.</li>
        </div>
      ],
    },
    {
      role: 'QA Engineer',
      company: 'SIRIN Labs',
      date: '2011 - 2013',
      description: [
        <div className={styles.description_list}>
          <li>Performed manual testing on games and applications for iOS, Android, and TV platforms.</li>
        </div>
      ],
    },
  ];

  const skillsData = ['JavaScript', 'React', 'Node.js', 'Java', 'CSS', 'HTML', 'SQL', 'Express'];

  const educationData = [
    {
      degree: 'Full Stack Developer',
      institution: 'IPC',
      year: '(2024 - 2025)',
    },
    {
      degree: 'Full Stack QA Automation',
      institution: 'Tech University',
      year: '(2018)',
    },
    {
      degree: 'Jira & Confluence Master',
      institution: '',
      year: '(2017)',
    },
    {
      degree: 'Software QA',
      institution: 'John Brice',
      year: '(2008-2009)',
    },
  ];

  return (
    <div className={styles.resume}>
      <div className={styles.scrollable_section}>
        <div className={styles.header}>
          <Header
            name={headerData.name}
            email={headerData.email}
            phone={headerData.phone}
          />
        </div>
        <div className={styles.experience_item}>
          <Experience experiences={experienceData} />
        </div>
        <div className={styles.skills_education_container}>
          <div className={styles.skill}>
            <Skills skills={skillsData} />
          </div>
          <div className={styles.education_item}>
            <Education education={educationData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
