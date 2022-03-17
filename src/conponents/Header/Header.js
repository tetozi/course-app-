import './Header.css'
import { Link } from 'react-router-dom'
import {useAuthContext} from '../../contexts/AuthContext'

const Header = () => {
    const { user } = useAuthContext();

    let guestNavigation = (
        <div id="guest" className='guest'>
            <li className="headerLink"><Link to="/login" />Login</li>
            <li className="headerLink"  ><Link to="/Register" />Register</li>
        </div>
    );

    let userNavigation = (
        <div id="user" className='user'>
            <span className='user-text'> <Link to="/user" /> {user.username}</span>
         
            <li  className="headerLink"><Link to="/create" />Create</li>
            <li  className="headerLink"><Link to="/logout" />Logout</li>
        </div>
    );
    return (
        <header className="header">
		<h1 className="logo"><Link to="/" />Flexbox</h1>
      <ul className="main-nav">
      {user.username
                        ? userNavigation
                        : guestNavigation
                    }
      </ul>
	</header> 
    )
}

export default Header