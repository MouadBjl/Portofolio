import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { register, clearError } from '../redux/slices/authSlice';
import Layout from '../components/Layout';
import styles from '../styles/Auth.module.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated, error } = useSelector((state) => state.auth);

    useEffect(() => {
        // Redirect if user is already authenticated
        if (isAuthenticated) {
            router.push('/');
        }

        // Clear previous errors on component mount
        dispatch(clearError());
    }, [isAuthenticated, dispatch, router]);

    const validateForm = () => {
        const errors = {};

        if (!formData.name) {
            errors.name = 'Le nom est requis';
        }

        if (!formData.email) {
            errors.email = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Format d\'email invalide';
        }

        if (!formData.password) {
            errors.password = 'Le mot de passe est requis';
        } else if (formData.password.length < 6) {
            errors.password = 'Le mot de passe doit contenir au moins 6 caractères';
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Veuillez confirmer votre mot de passe';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Les mots de passe ne correspondent pas';
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
            // Remove confirmPassword from submission
            const { confirmPassword, ...userData } = formData;
            dispatch(register(userData));
            router.push('/login');
        }
    };

    return (
        <Layout title="Inscription | Mouad Ben Jelloun">
            <div className={styles.authContainer}>
                <h2 className={styles.title}>Inscription</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={formErrors.name ? styles.inputError : styles.input}
                            placeholder="Entrez votre nom"
                        />
                        {formErrors.name && (
                            <p className={styles.errorText}>{formErrors.name}</p>
                        )}
                    </div>

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

                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword" className={styles.label}>
                            Confirmer le mot de passe
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={formErrors.confirmPassword ? styles.inputError : styles.input}
                            placeholder="Confirmez votre mot de passe"
                        />
                        {formErrors.confirmPassword && (
                            <p className={styles.errorText}>{formErrors.confirmPassword}</p>
                        )}
                    </div>

                    {error && <p className={styles.serverError}>{error}</p>}

                    <button type="submit" className={styles.submitButton}>
                        S'inscrire
                    </button>
                </form>

                <p className={styles.switchAuth}>
                    Vous avez déjà un compte?{' '}
                    <Link href="/login" className={styles.switchLink}>
                        Se connecter
                    </Link>
                </p>
            </div>
        </Layout>
    );
};

export default Register;