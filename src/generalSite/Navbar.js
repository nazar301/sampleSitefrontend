import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './NavBar.css'
function Navbar() {

    return(
        <div className="Navbar">
            <div className='siteNav'>    
                <ul>
                    <Link to='/'>
                        <li className="landingPage, NavList">Home</li>
                    </Link>
                    <Link to='/Education'>
                        <li className="Education, NavList">Education</li>
                    </Link>
                    <Link to='/Events' >
                        <li className="Events, NavList">Events</li>
                    </Link>
                    <Link to='/Opertunities' >
                        <li className="opertunities, NavList">Opertunities</li>
                    </Link>
                    <Link to='/UpcommingOffers' >
                        <li className="Offers, NavList">Upcomming Offers</li>
                    </Link>
                </ul>
            </div>
            <div className='userNav'>    
                <ul>
                    {/* <Link to='/Admin'>
                        <li className="Admin, NavList, userList ">Admin</li>
                    </Link> */}
                    <Link to='/User'>
                        <li className="User, NavList, userList ">User</li>
                    </Link>
                    <Link to='/Signup' >
                        <li className="Signup, NavList , userList">Signup</li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Navbar