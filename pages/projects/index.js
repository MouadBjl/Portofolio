// pages/projects/index.js
import React from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/Projects.module.css';

// Sample project data (would normally come from a database)
const projects = [
    {
        id: '1',
        title: 'Système de Gestion Hospitalière',
        shortDescription: 'Application WPF pour la gestion hospitalière',
        technologies: ['C#', 'WPF', 'SQL Server'],
        image: '/images/hospital.jpg',
    },
    {
        id: '2',
        title: 'Site Web sur les Legos',
        shortDescription: 'Site web interactif sur les collections Lego',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/lego.jpg',
    },
    {
        id: '3',
        title: 'Système de Gestion d\'une École',
        shortDescription: 'Application de gestion scolaire',
        technologies: ['React.js', 'Redux', 'CSS'],
        image: '/images/school.jpg',
    },
];

const Projects = () => {
    return (
        <Layout title="Projets | Mouad Ben Jelloun">
            <div className={styles.container}>
                <h1 className={styles.title}>Mes Projets</h1>
                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Projects;