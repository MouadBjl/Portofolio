import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectDetail.module.css';

const ProjectDetail = ({ project }) => {
    if (!project) {
        return (
            <div className={styles.loading}>
                <p>Chargement...</p>
            </div>
        );
    }

    return (
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

                <div className={styles.gallery}>
                    <h2 className={styles.sectionTitle}>Galerie</h2>
                    <div className={styles.galleryGrid}>
                        {project.gallery.map((image, idx) => (
                            <div key={idx} className={styles.galleryItem}>
                                <Image
                                    src={image}
                                    alt={`${project.title} - Image ${idx + 1}`}
                                    width={350}
                                    height={200}
                                    className={styles.galleryImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;