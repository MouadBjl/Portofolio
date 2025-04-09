import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    testimonials: [],
    error: null,
};

export const testimonialSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {
        addTestimonial: (state, action) => {
            state.testimonials.push({
                id: Date.now().toString(),
                ...action.payload,
                date: new Date().toISOString(),
            });
        },
        updateTestimonial: (state, action) => {
            const { id, ...updates } = action.payload;
            const testimonialIndex = state.testimonials.findIndex(t => t.id === id);

            if (testimonialIndex !== -1) {
                state.testimonials[testimonialIndex] = {
                    ...state.testimonials[testimonialIndex],
                    ...updates,
                };
            }
        },
        deleteTestimonial: (state, action) => {
            state.testimonials = state.testimonials.filter(
                testimonial => testimonial.id !== action.payload
            );
        },
    },
});

export const {
    addTestimonial,
    updateTestimonial,
    deleteTestimonial
} = testimonialSlice.actions;

export default testimonialSlice.reducer;
