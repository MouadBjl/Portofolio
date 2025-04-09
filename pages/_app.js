import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import ProtectedRoute from '../components/ProtectedRoute';
import '../styles/global.css';

function MyApp({ Component, pageProps, router }) {
    // Pages that don't require authentication
    const publicPages = ['/login', '/register', '/', '/about', '/projects', '/projects/[id]'];
    const isPublicPage = publicPages.includes(router.pathname) || router.pathname.startsWith('/projects/');

    // Handle root path redirection
    React.useEffect(() => {
        const { isAuthenticated } = store.getState().auth;

        // If user is not authenticated and trying to access root path, no need to redirect
        // since the home page is now public
    }, [router]);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {isPublicPage ? (
                    <Component {...pageProps} />
                ) : (
                    <ProtectedRoute>
                        <Component {...pageProps} />
                    </ProtectedRoute>
                )}
            </PersistGate>
        </Provider>
    );
}

export default MyApp;