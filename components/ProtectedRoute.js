import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        // Check if we're on client-side
        if (typeof window !== 'undefined') {
            // List of public pages that don't require authentication
            const publicPages = ['/login', '/register', '/', '/about', '/projects'];

            // Check if the route is a public page or a project detail page
            const isPublicPage = publicPages.includes(router.pathname) ||
                router.pathname.startsWith('/projects/');

            // If not authenticated and trying to access a protected page
            if (!isAuthenticated && !isPublicPage) {
                router.push('/login');
            }
        }
    }, [isAuthenticated, router]);

    // If authenticated or on public pages, render children
    if (isAuthenticated ||
        router.pathname === '/login' ||
        router.pathname === '/register' ||
        router.pathname === '/' ||
        router.pathname === '/about' ||
        router.pathname === '/projects' ||
        router.pathname.startsWith('/projects/')) {
        return children;
    }

    // Return null during redirect
    return null;
};

export default ProtectedRoute;