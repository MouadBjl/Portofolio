import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={project.image || '/images/placeholder.jpg'}
                    alt={project.title}
                    width={400}
                    height={225}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.shortDescription}</p>
                <div className={styles.technologies}>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className={styles.tech}>
              {tech}
            </span>
                    ))}
                </div>
                <Link href={`/projects/${project.id}`} className={styles.button}>
                    Voir Détails
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;