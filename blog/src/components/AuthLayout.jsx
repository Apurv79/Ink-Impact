import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthLayout({ authentication, children }) {
    const authStatus = useSelector(state => state.auth.status);
    const location = useLocation();

    // ✅ Allow /signup to be accessible without redirection
    const isSignUpPage = location.pathname === "/signup";

    if (authentication && !authStatus) {
        return <Navigate to="/login" />;
    }

    if (!authentication && authStatus && !isSignUpPage) {
        return <Navigate to="/" />;
    }

    return children;
}
