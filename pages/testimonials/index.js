import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Layout from '../../components/Layout';
import TestimonialCard from '../../components/TestimonialCard';
import styles from '../../styles/Testimonials.module.css';

const Testimonials = () => {
    const { testimonials } = useSelector((state) => state.testimonials);

    return (
        <Layout title="Témoignages | Mouad Ben Jelloun">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Témoignages</h1>
                    <Link href="/testimonials/add" className={styles.addButton}>
                        <i className="fas fa-plus"></i> Ajouter un témoignage
                    </Link>
                </div>

                {testimonials.length === 0 ? (
                    <div className={styles.emptyState}>
                        <i className="fas fa-comments"></i>
                        <p>Aucun témoignage pour le moment. Soyez le premier à en ajouter un!</p>
                        <Link href="/testimonials/add" className={styles.emptyStateButton}>
                            Ajouter un témoignage
                        </Link>
                    </div>
                ) : (
                    <div className={styles.testimonialGrid}>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Testimonials;
