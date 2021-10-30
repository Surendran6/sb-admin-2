import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PermanentDrawerLeft from './components/Sidebar';
import  NavBar  from './components/newNavbar';
import AdminDashboard from './components/Admin';

function App() {
  return (
    <div className="main-container">
     <div className="side-menu"><PermanentDrawerLeft/> </div>      
     <div className="left-side"><NavBar/>
     <div className="prograssbar"><AdminDashboard/></div></div>
          
     </div>           
      );
}
  
export default App;
  


