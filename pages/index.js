// pages/index.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const Home = () => {
    const { testimonials } = useSelector((state) => state.testimonials);
    const { isAuthenticated } = useSelector((state) => state.auth);
    const [visibleTestimonials, setVisibleTestimonials] = useState(3);

    const loadMoreTestimonials = () => {
        setVisibleTestimonials(prev => prev + 3);
    };

    return (
        <Layout title="Accueil | Mouad Ben Jelloun">
            <div className={styles.container}>
                <section className={styles.profileSection}>
                    <div className={styles.profileImageContainer}>
                        <Image
                            src="/images/profile.jpeg"
                            alt="Mouad Ben Jelloun"
                            width={300}
                            height={300}
                            className={styles.profileImage}
                        />
                    </div>

                    <div className={styles.profileInfo}>
                        <h1 className={styles.name}>Mouad Ben Jelloun</h1>
                        <h2 className={styles.title}>Développeur Web Junior</h2>

                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>400 Den Haag</span>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-phone"></i>
                                <span>613-796-6109</span>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-envelope"></i>
                                <span>benjellounmouad7@gmail.com</span>
                            </div>
                        </div>

                        <div className={styles.objective}>
                            <h3 className={styles.sectionTitle}>Objectif Professionnel</h3>
                            <p>
                                Développeur motivé et récemment diplômé d'un Diplôme d'Études Collégiales (DEC) en informatique,
                                avec une solide formation en programmation orientée objet, développement web et gestion de bases de données.
                                Je cherche à appliquer mes compétences acquises au cours de mes études à un poste de développeur junior
                                pour contribuer à des projets innovants et continuer à apprendre au sein d'une équipe dynamique.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <i className="fas fa-graduation-cap"></i> Formation
                    </h2>
                    <div className={styles.educationItem}>
                        <div className={styles.educationHeader}>
                            <h3 className={styles.degree}>DEC - Diplôme d'Études Collégiales en Programmation Informatique</h3>
                            <span className={styles.date}>2023-2025</span>
                        </div>
                        <p className={styles.institution}>La Cité Collégiale – Ottawa, ON</p>
                        <p className={styles.courses}>
                            <strong>Principaux cours:</strong> Développement web, structures de données, génie logiciel,
                            bases de données, systèmes d'exploitation, cybersécurité, Développement iOS, Développement application bureau.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <i className="fas fa-laptop-code"></i> Compétences Techniques
                    </h2>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skillGroup}>
                            <h3 className={styles.skillGroupTitle}>Langages de programmation</h3>
                            <ul className={styles.skillList}>
                                <li>C#</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>

                        <div className={styles.skillGroup}>
                            <h3 className={styles.skillGroupTitle}>Bases de données</h3>
                            <ul className={styles.skillList}>
                                <li>MySQL</li>
                                <li>SQL Server</li>
                            </ul>
                        </div>

                        <div className={styles.skillGroup}>
                            <h3 className={styles.skillGroupTitle}>Systèmes d'exploitation</h3>
                            <ul className={styles.skillList}>
                                <li>Linux</li>
                                <li>Windows</li>
                            </ul>
                        </div>

                        <div className={styles.skillGroup}>
                            <h3 className={styles.skillGroupTitle}>Cybersécurité</h3>
                            <ul className={styles.skillList}>
                                <li>Connaissances de base en sécurité des applications</li>
                                <li>Gestion des vulnérabilités</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <i className="fas fa-code-branch"></i> Projets Académiques
                    </h2>

                    <div className={styles.projectsContainer}>
                        <div className={styles.project}>
                            <h3 className={styles.projectTitle}>Système de Gestion Hospitalière (WPF C#)</h3>
                            <p className={styles.projectDescription}>
                                Développement d'une application de gestion hospitalière en utilisant WPF et C#, permettant la gestion des dossiers patients,
                                rendez-vous et informations du personnel. L'application offre une interface utilisateur intuitive et se connecte à une
                                base de données SQL Server.
                            </p>
                            <div className={styles.projectTechnologies}>
                                <span className={styles.technology}>C#</span>
                                <span className={styles.technology}>WPF</span>
                                <span className={styles.technology}>SQL Server</span>
                                <span className={styles.technology}>MVVM</span>
                            </div>
                        </div>

                        <div className={styles.project}>
                            <h3 className={styles.projectTitle}>Site Web sur les Legos</h3>
                            <p className={styles.projectDescription}>
                                Conception d'un site web interactif dédié aux collections Lego en utilisant HTML, CSS et JavaScript.
                                Mise en place d'un design responsive garantissant une compatibilité sur divers écrans et appareils.
                            </p>
                            <div className={styles.projectTechnologies}>
                                <span className={styles.technology}>HTML</span>
                                <span className={styles.technology}>CSS</span>
                                <span className={styles.technology}>JavaScript</span>
                                <span className={styles.technology}>Responsive Design</span>
                            </div>
                        </div>

                        <div className={styles.project}>
                            <h3 className={styles.projectTitle}>Système de Gestion d'une École (React.js)</h3>
                            <p className={styles.projectDescription}>
                                Développement d'une application de gestion scolaire en utilisant React.js pour améliorer l'administration des étudiants et des cours.
                                Création d'une interface utilisateur dynamique et interactive pour faciliter la gestion des étudiants.
                            </p>
                            <div className={styles.projectTechnologies}>
                                <span className={styles.technology}>React.js</span>
                                <span className={styles.technology}>Redux</span>
                                <span className={styles.technology}>CSS</span>
                                <span className={styles.technology}>Node.js</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <i className="fas fa-briefcase"></i> Expérience Professionnelle
                    </h2>

                    <div className={styles.experienceItem}>
                        <div className={styles.experienceHeader}>
                            <h3 className={styles.position}>Stagiaire Développeur</h3>
                            <span className={styles.date}>Juillet - Août 2024</span>
                        </div>
                        <p className={styles.company}>Société Transport Marocain – Casablanca (Maroc)</p>
                        <ul className={styles.responsibilities}>
                            <li>Participation au développement d'une application web/bureau pour optimiser la gestion des opérations logistiques.</li>
                            <li>Collaboration avec l'équipe technique pour améliorer l'interface utilisateur et intégrer des fonctionnalités avancées.</li>
                        </ul>
                    </div>

                    <div className={styles.experienceItem}>
                        <div className={styles.experienceHeader}>
                            <h3 className={styles.position}>Agent de Sécurité</h3>
                            <span className={styles.date}>2024-2025</span>
                        </div>
                        <p className={styles.company}>Securitas – Musée de Guerre d'Ottawa (Emploi étudiant à temps partiel)</p>
                        <ul className={styles.responsibilities}>
                            <li>Surveillance des lieux et garantie de la sécurité des visiteurs et du personnel.</li>
                            <li>Communication efficace avec les collègues et les superviseurs pour assurer une gestion fluide de la sécurité.</li>
                            <li>Intervention rapide et efficace en cas d'incidents ou d'urgences.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <i className="fas fa-comments"></i> Compétences Non Techniques
                    </h2>
                    <ul className={styles.softSkillsList}>
                        <li>
                            <strong>Communication:</strong> Capacité à expliquer des concepts techniques de manière claire et concise.
                        </li>
                        <li>
                            <strong>Travail en équipe:</strong> Expérience en collaboration au sein d'équipes agiles.
                        </li>
                        <li>
                            <strong>Gestion du temps:</strong> Capacité à organiser les tâches et respecter les délais sous pression.
                        </li>
                        <li>
                            <strong>Résolution de problèmes:</strong> Capacité à analyser et résoudre efficacement des problèmes techniques.
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <i className="fas fa-user"></i> Qualités Personnelles
                    </h2>
                    <ul className={styles.personalQualitiesList}>
                        <li>Parfaite maîtrise du français, anglais et arabe, tant à l'écrit qu'à l'oral.</li>
                        <li>Excellente gestion des priorités et respect des délais.</li>
                        <li>Esprit d'équipe et compétences en communication avancées.</li>
                        <li>Organisé, rigoureux et méthodique dans la gestion des projets et tâches quotidiennes.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <i className="fas fa-certificate"></i> Autres Formations
                    </h2>
                    <ul className={styles.certificationsList}>
                        <li>
                            <span className={styles.certification}>Licence d'Agent de Sécurité</span> – Ottawa, ON (20 décembre 2023)
                        </li>
                        <li>
                            <span className={styles.certification}>Certificat en Secourisme d'Urgence et RCR/DEA Niveau C</span> – Ottawa, ON (11 novembre 2023)
                        </li>
                    </ul>
                </section>

                {/* Témoignages section that's visible to everyone */}
                <section className={styles.section}>
                    <div className={styles.testimonialHeader}>
                        <h2 className={styles.sectionTitle}>
                            <i className="fas fa-star"></i> Témoignages
                        </h2>

                        {!isAuthenticated && (
                            <div className={styles.testimonialCta}>
                                <p>Vous souhaitez laisser un témoignage?</p>
                                <Link href="/login" className={styles.testimonialCtaBtn}>
                                    Se connecter pour écrire un témoignage
                                </Link>
                            </div>
                        )}
                    </div>

                    {testimonials.length === 0 ? (
                        <div className={styles.emptyTestimonials}>
                            <i className="fas fa-comment-dots"></i>
                            <p>Aucun témoignage pour le moment.</p>
                        </div>
                    ) : (
                        <>
                            <div className={styles.testimonialsContainer}>
                                {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
                                    <div key={testimonial.id} className={styles.testimonialCard}>
                                        <div className={styles.testimonialHeader}>
                                            <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                                            <span className={styles.testimonialDate}>
                                                {new Date(testimonial.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className={styles.testimonialMessage}>{testimonial.message}</p>
                                    </div>
                                ))}
                            </div>

                            {testimonials.length > visibleTestimonials && (
                                <div className={styles.loadMoreContainer}>
                                    <button
                                        onClick={loadMoreTestimonials}
                                        className={styles.loadMoreBtn}
                                    >
                                        Voir plus de témoignages
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </section>
            </div>
        </Layout>
    );
};

export default Home;