// pages/projects/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/ProjectDetail.module.css';

// Sample project data with full details
const projectsData = [
    {
        id: '1',
        title: 'Système de Gestion Hospitalière',
        shortDescription: 'Application WPF pour la gestion hospitalière',
        fullDescription:
            `Développement d'une application de gestion hospitalière en utilisant WPF et C#, permettant la gestion des dossiers patients, rendez-vous et informations du personnel.
      
      L'application offre une interface utilisateur intuitive et se connecte à une base de données SQL Server pour le stockage sécurisé des informations. Elle permet d'améliorer l'efficacité des opérations hospitalières avec des fonctionnalités de suivi en temps réel des patients.
      
      Le système inclut plusieurs modules dont la gestion des patients, des rendez-vous, du personnel médical, des traitements, et des facturations. Chaque module est conçu pour faciliter le travail quotidien du personnel hospitalier et offrir une meilleure expérience aux patients.`,
        technologies: ['C#', 'WPF', 'SQL Server', 'MVVM'],
        features: [
            'Gestion des dossiers patients',
            'Planification de rendez-vous',
            'Gestion du personnel',
            'Suivi des traitements',
            'Facturation automatisée',
            'Rapports et statistiques',
        ],
        image: '/images/hospital.jpg'
    },
    {
        id: '2',
        title: 'Site Web sur les Legos',
        shortDescription: 'Site web interactif sur les collections Lego',
        fullDescription:
            `Conception d'un site web interactif dédié aux collections Lego en utilisant HTML, CSS et JavaScript. Le site présente différentes collections Lego, leurs caractéristiques et leur histoire.
      
      Le site est entièrement responsive, garantissant une compatibilité sur divers écrans et appareils. Il offre une expérience utilisateur riche avec des animations fluides et une interface intuitive.
      
      Les utilisateurs peuvent naviguer à travers différentes catégories, rechercher des collections spécifiques, et même voir des instructions de montage pour certains modèles populaires.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        features: [
            'Catalogue de collections Lego',
            'Recherche avancée',
            'Galerie d\'images',
            'Design responsive',
            'Animations interactives',
            'Mode thème clair/sombre',
        ],
        image: '/images/lego.jpg'
    },
    {
        id: '3',
        title: 'Système de Gestion d\'une École',
        shortDescription: 'Application de gestion scolaire',
        fullDescription:
            `Développement d'une application de gestion scolaire en utilisant React.js pour améliorer l'administration des étudiants et des cours. L'application simplifie les processus administratifs quotidiens dans un établissement scolaire.
      
      La création d'une interface utilisateur dynamique et interactive facilite la gestion des étudiants, enseignants, cours et classes. L'application intègre Redux pour une gestion efficace de l'état global.
      
      Le système permet de suivre les performances des étudiants, gérer les emplois du temps, et faciliter la communication entre les différents acteurs de l'établissement.`,
        technologies: ['React.js', 'Redux', 'CSS', 'Node.js', 'Express', 'MongoDB'],
        features: [
            'Gestion des dossiers étudiants',
            'Gestion des enseignants',
            'Emplois du temps',
            'Notation et évaluation',
            'Communication interne',
            'Rapports analytiques',
        ],
        image: '/images/school.jpg'
    },
];

const ProjectDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the project with the matching id
    const project = projectsData.find((p) => p.id === id);

    // If project not found or page is still loading
    if (!project) {
        return (
            <Layout title="Chargement... | Mouad Ben Jelloun">
                <div className={styles.loading}>
                    <p>Chargement...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title={`${project.title} | Mouad Ben Jelloun`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{project.title}</h1>
                </div>

                <div className={styles.mainImage}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={450}
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2 className={styles.sectionTitle}>Description</h2>
                        {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className={styles.paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className={styles.details}>
                        <div className={styles.technologiesContainer}>
                            <h2 className={styles.sectionTitle}>Technologies utilisées</h2>
                            <div className={styles.technologies}>
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className={styles.technology}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.featuresContainer}>
                            <h2 className={styles.sectionTitle}>Fonctionnalités</h2>
                            <ul className={styles.featuresList}>
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className={styles.feature}>
                                        <i className="fas fa-check"></i> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default ProjectDetail;