import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import styles from "./page.module.css";
import './page.module.css';

const App = () => {
  const headerData = {
    id: 1,
    name: 'Rony Levi',
    email: 'ronylevi99@gmail.com',
    phone: '+972544273287',
    location: '',
    title:'',
  };

  const experienceData = [
    {
      role: 'Director of QA',
      company: 'Celsius Network',
      date: '2020 - 2025',
      description: [
        <div key="exp1" className={styles.description_list}>
          <ul>Built and managed a global QA department with 50+ employees across multiple locations.</ul>
          <ul>Oversaw Mobile, Web, Backend, and Database products.</ul>
          <ul>Led automation (Java), manual testing, infrastructure, and load testing teams.</ul>
          <ul>Defined company-wide QA processes across departments.</ul>
          <ul>Managed budgets, contracts, and KPIs to ensure cost efficiency.</ul>
        </div>
      ],
    },
    {
      role: 'Head of QA',
      company: 'Glassbox Dgtal',
      date: '2018 - 2020',
      description: [
        <div key="exp2" className={styles.description_list}>
          <ul>Established and managed the global QA department (Manual & Automation).</ul>
          <ul>Led CI/CD implementation and optimized release cycles.</ul>
          <ul>Developed and standardized work & quality processes for R&D.</ul>
          <ul>Acted as Release Manager, ensuring seamless software deployments.</ul>
          <ul>Built automated reports, dashboards, and release notes for visibility and tracking.</ul>
        </div>


      ],
    },
    {
      role: 'QA Team Manager',
      company: 'Mobilogy (Formerly Cellebrite Division) - Company sold',
      date: '2017 - 2018',
      description: [
        <div key="exp3" className={styles.description_list}>
          <ul>Led the System-Level QA team, testing mobile, web, Windows (SaaS), and hardware.</ul>
          <ul>Built and defined QA methodologies, processes, and recruitment for a new system-level team.</ul>
          <ul>Managed both manual and automation testers, providing mentorship and leadership.</ul>
        </div>
      ],
    },
    {
      role: 'SW QA Team Leader',
      company: 'SIRIN Labs',
      date: '2014 - 2017',
      description: [
        <div key="exp4" className={styles.description_list}>
          <ul>Led end-to-end testing on a custom Android OS, encrypted communication, and hardware upgrades.</ul>
          <ul>Built the QA team from the ground up, setting high testing standards.</ul>
          <ul>Conducted product comparisons and vendor evaluations for strategic partnerships.</ul>
        </div>
      ],
    },
    {
      role: 'QA Engineer',
      company: 'SIRIN Labs',
      date: '2013 - 2014',
      description: [
        <div key="exp5" className={styles.description_list}>
          <ul>Tested Android OS for all Samsung mobile devices, ensuring optimal performance and stability.</ul>
        </div>
      ],
    },
    {
      role: 'QA Engineer',
      company: 'SIRIN Labs',
      date: '2011 - 2013',
      description: [
        <div key="exp6" className={styles.description_list}>
          <ul>Performed manual testing on games and applications for iOS, Android, and TV platforms.</ul>
        </div>
      ],
    },
  ];

  const skillsData = ['JavaScript', 'React', 'Node.js', 'Java', 'CSS', 'HTML', 'SQL', 'Express'];

  const educationData = [
    {
      degree: 'Full Stack Developer',
      institution: 'IPC',
      year: '2024 - 2025',
    },
    {
      degree: 'Full Stack QA Automation',
      institution: 'Tech University',
      year: '2018',
    },
    {
      degree: 'Jira & Confluence Master',
      institution: '',
      year: '2017',
    },
    {
      degree: 'Software QA',
      institution: 'John Brice',
      year: '2008-2009',
    },
  ];

  return (
    <div className={styles.resume}>
      <div className={styles.scrollable_section}>
      <div className={styles.header}>
        <Header
          name={headerData.name}
          title={headerData.title}
          email={headerData.email}
          phone={headerData.phone}
          location={headerData.location}
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
