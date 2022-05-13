import { Navigate, Outlet } from 'react-router-dom';
import {useAuthContext } from '../../contexts/AuthContext'


const PrivateRaoutes = () => {
    const {isAuthenticated} = useAuthContext()
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRaoutes