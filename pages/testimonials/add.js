import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import TestimonialForm from '../../components/TestimonialForm';
import { addTestimonial } from '../../redux/slices/testimonialSlice';
import styles from '../../styles/TestimonialForm.module.css';

const AddTestimonial = () => {
    const { user } = useSelector((state) => state.auth);
    const initialData = {
        name: user?.name || '',
        email: user?.email || '',
        message: '',
    };

    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (formData) => {
        dispatch(addTestimonial(formData));
        router.push('/testimonials');
    };

    return (
        <Layout title="Ajouter un témoignage | Mouad Ben Jelloun">
            <div className={styles.container}>
                <h1 className={styles.title}>Ajouter un témoignage</h1>
                <TestimonialForm
                    initialData={initialData}
                    onSubmit={handleSubmit}
                    isEdit={false}
                />
            </div>
        </Layout>
    );
};

export default AddTestimonial;