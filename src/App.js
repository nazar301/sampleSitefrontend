import './App.css';
import Navbar from './generalSite/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './generalSite/Landingpage';
import EducationSite from './generalSite/Education';
import Events from './generalSite/Events';
import Opertunities from './generalSite/Opertunities';
import Offers from './generalSite/UpcommingOffers';
import Admin from './admin/Admin';
import User from './users/User';

import Signup from './users/Signup'


function App() {

  return (
    <div className="Container">
      <div className=' NavBar'><Navbar/></div>
 
        <Routes>
          <Route path='/' element={<LandingPage/>}>Home</Route>
          <Route path='/Education' element={<EducationSite/>}>Education</Route>
          <Route path='/Events' element={<Events/>}>Events</Route>
          <Route path='/Opertunities' element={<Opertunities/>}>Opertunities</Route>
          <Route path='/UpcommingOffers' element={<Offers/>}>Upcomming Offers</Route>

          {/* <Route path='/Admin' element={<Admin/>}>Hidden Route --needs validation</Route> */}
          
          <Route path='/User' element={<User/>}>User</Route>
          <Route path='/Signup' element={<Signup/>}>Signup</Route>  
          </Routes>



    </div>
  );
}

export default App;
