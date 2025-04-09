import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { deleteTestimonial } from '../redux/slices/testimonialSlice';
import styles from '../styles/TestimonialCard.module.css';

const TestimonialCard = ({ testimonial }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useSelector((state) => state.auth);
    const isOwner = user && user.email === testimonial.email;

    const handleEdit = () => {
        router.push(`/testimonials/edit/${testimonial.id}`);
    };

    const handleDelete = () => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce témoignage?')) {
            dispatch(deleteTestimonial(testimonial.id));
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <div className={styles.date}>
                    {new Date(testimonial.date).toLocaleDateString()}
                </div>
            </div>
            <p className={styles.message}>{testimonial.message}</p>
            {isOwner && (
                <div className={styles.actions}>
                    <button onClick={handleEdit} className={styles.editBtn}>
                        <i className="fas fa-edit"></i> Modifier
                    </button>
                    <button onClick={handleDelete} className={styles.deleteBtn}>
                        <i className="fas fa-trash"></i> Supprimer
                    </button>
                </div>
            )}
        </div>
    );
};

export default TestimonialCard;
