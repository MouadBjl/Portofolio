import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logout } from '../redux/slices/authSlice';
import styles from '../styles/Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        router.push('/');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <h1>Mouad Ben Jelloun</h1>
                </Link>
            </div>
            <nav className={styles.nav}>
                {/* Home (about) and projects links are always visible */}
                <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
                    Accueil
                </Link>
                <Link href="/projects" className={router.pathname.startsWith('/projects') ? styles.active : ''}>
                    Projets
                </Link>

                {isAuthenticated ? (
                    <>
                        <Link href="/testimonials" className={router.pathname.startsWith('/testimonials') ? styles.active : ''}>
                            Témoignages
                        </Link>
                        <button onClick={handleLogout} className={styles.logoutBtn}>
                            Déconnexion
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className={router.pathname === '/login' ? styles.active : ''}>
                            Connexion
                        </Link>
                        <Link href="/register" className={router.pathname === '/register' ? styles.active : ''}>
                            Inscription
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;