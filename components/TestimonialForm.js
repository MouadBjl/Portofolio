import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/TestimonialForm.module.css';

const TestimonialForm = ({
                             initialData = { name: '', email: '', message: '' },
                             onSubmit,
                             isEdit = false
                         }) => {
    const [formData, setFormData] = useState(initialData);
    const [formErrors, setFormErrors] = useState({});

    const router = useRouter();

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const validateForm = () => {
        const errors = {};

        if (!formData.name) {
            errors.name = 'Le nom est requis';
        }

        if (!isEdit && !formData.email) {
            errors.email = 'L\'email est requis';
        } else if (!isEdit && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Format d\'email invalide';
        }

        if (!formData.message) {
            errors.message = 'Le message est requis';
        } else if (formData.message.length < 10) {
            errors.message = 'Le message doit contenir au moins 10 caractères';
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
            onSubmit(formData);
        }
    };

    return (
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
                    readOnly={isEdit}
                    disabled={isEdit}
                />
                {formErrors.email && (
                    <p className={styles.errorText}>{formErrors.email}</p>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? styles.textareaError : styles.textarea}
                    placeholder="Partagez votre expérience..."
                    rows={6}
                />
                {formErrors.message && (
                    <p className={styles.errorText}>{formErrors.message}</p>
                )}
            </div>

            <div className={styles.buttonGroup}>
                <button
                    type="button"
                    className={styles.cancelButton}
                    onClick={() => router.push('/testimonials')}
                >
                    Annuler
                </button>
                <button type="submit" className={styles.submitButton}>
                    {isEdit ? 'Mettre à jour' : 'Soumettre'}
                </button>
            </div>
        </form>
    );
};

export default TestimonialForm;