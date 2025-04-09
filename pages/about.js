// pages/about.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';

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

const About = () => {
    return (
        <Layout title="À propos | Mouad Ben Jelloun">
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroImage}>
                        <Image
                            src="/images/profile.jpg"
                            alt="Mouad Ben Jelloun"
                            width={200}
                            height={200}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>Mouad Ben Jelloun</h1>
                        <h2 className={styles.subtitle}>Développeur Web Junior</h2>
                        <p className={styles.description}>
                            Développeur motivé et récemment diplômé d'un Diplôme d'Études Collégiales (DEC) en informatique,
                            avec une solide formation en programmation orientée objet, développement web et gestion de bases de données.
                        </p>
                        <Link href="/" className={styles.button}>
                            Voir CV Complet
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.skills}>
                <h2 className={styles.sectionTitle}>Compétences</h2>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>
                            <i className="fas fa-code"></i> Langages de programmation
                        </h3>
                        <ul className={styles.skillList}>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>
                            <i className="fas fa-database"></i> Bases de données
                        </h3>
                        <ul className={styles.skillList}>
                            <li>MySQL</li>
                            <li>SQL Server</li>
                        </ul>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>
                            <i className="fas fa-laptop-code"></i> Autres technologies
                        </h3>
                        <ul className={styles.skillList}>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>Redux</li>
                            <li>WPF</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.featuredProjects}>
                <h2 className={styles.sectionTitle}>Projets Récents</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className={styles.viewAllContainer}>
                    <Link href="/projects" className={styles.viewAllButton}>
                        Voir tous les projets
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default About;