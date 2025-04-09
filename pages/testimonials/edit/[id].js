import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import TestimonialForm from '../../../components/TestimonialForm';
import { updateTestimonial } from '../../../redux/slices/testimonialSlice';
import styles from '../../../styles/TestimonialForm.module.css';

const EditTestimonial = () => {
    const [testimonial, setTestimonial] = useState(null);
    const { testimonials } = useSelector((state) => state.testimonials);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id && testimonials.length > 0) {
            const foundTestimonial = testimonials.find(t => t.id === id);

            if (foundTestimonial) {
                // Check if the current user is the owner of the testimonial
                if (user && user.email === foundTestimonial.email) {
                    setTestimonial(foundTestimonial);
                } else {
                    // Redirect if not the owner
                    router.push('/testimonials');
                }
            } else {
                // Testimonial not found
                router.push('/testimonials');
            }
        }
    }, [id, testimonials, user, router]);

    const handleSubmit = (formData) => {
        // Use updateTestimonial instead of addTestimonial
        dispatch(updateTestimonial({
            id,
            ...formData
        }));
        router.push('/testimonials');
    };

    if (!testimonial) {
        return (
            <Layout title="Chargement... | Mouad Ben Jelloun">
                <div className={styles.container}>
                    <p>Chargement...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Modifier un témoignage | Mouad Ben Jelloun">
            <div className={styles.container}>
                <h1 className={styles.title}>Modifier votre témoignage</h1>
                <TestimonialForm
                    initialData={testimonial}
                    onSubmit={handleSubmit}
                    isEdit={true}
                />
            </div>
        </Layout>
    );
};

export default EditTestimonial;