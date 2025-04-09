import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <a
                    href="https://github.com/MouadBjl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/mouad-ben-jelloun-aaa68029b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="mailto:benjellounmouad7@gmail.com"
                    aria-label="Email"
                >
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Mouad Ben Jelloun. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
