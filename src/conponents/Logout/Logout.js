import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        authService.logout(user.token)
            .then(() => {
                logout();
                navigate('/');
            })
    }, [])

    return null;
};

export default Logout;