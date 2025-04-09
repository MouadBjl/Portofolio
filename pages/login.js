import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { login, clearError } from '../redux/slices/authSlice';
import Layout from '../components/Layout';
import styles from '../styles/Auth.module.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated, error, registrationSuccess } = useSelector((state) => state.auth);

    useEffect(() => {
        // Redirect if user is already authenticated
        if (isAuthenticated) {
            router.push('/');
        }

        // Clear previous errors on component mount
        dispatch(clearError());
    }, [isAuthenticated, dispatch, router]);

    // Add effect to handle successful registration
    useEffect(() => {
        if (registrationSuccess) {
            alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            router.push('/login');
        }
    }, [registrationSuccess, router]);

    const validateForm = () => {
        const errors = {};

        if (!formData.email) {
            errors.email = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Format d\'email invalide';
        }

        if (!formData.password) {
            errors.password = 'Le mot de passe est requis';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear field error when typing
        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            dispatch(login(formData));
        }
    };

    return (
        <Layout title="Connexion | Mouad Ben Jelloun">
            <div className={styles.authContainer}>
                <h2 className={styles.title}>Connexion</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={formErrors.email ? styles.inputError : styles.input}
                            placeholder="Entrez votre email"
                        />
                        {formErrors.email && (
                            <p className={styles.errorText}>{formErrors.email}</p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={formErrors.password ? styles.inputError : styles.input}
                            placeholder="Entrez votre mot de passe"
                        />
                        {formErrors.password && (
                            <p className={styles.errorText}>{formErrors.password}</p>
                        )}
                    </div>

                    {error && <p className={styles.serverError}>{error}</p>}

                    <button type="submit" className={styles.submitButton}>
                        Se connecter
                    </button>
                </form>

                <p className={styles.switchAuth}>
                    Vous n'avez pas de compte?{' '}
                    <Link href="/register" className={styles.switchLink}>
                        S'inscrire
                    </Link>
                </p>
            </div>
        </Layout>
    );
};

export default Login;
