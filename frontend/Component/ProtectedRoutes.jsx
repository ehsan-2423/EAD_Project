import {useContext} from 'react'
import {Outlet , Navigate} from 'react-router-dom'
import {LoginContext} from './LoginContext';

function ProtectedRoutes() {
    const { isLoggedIn } = useContext(LoginContext);

    return isLoggedIn? <Outlet/> : <Navigate to="/"/>
  
}

export default ProtectedRoutes