import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faFolderOpen, faLaptopCode,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link, useParams, useLocation } from "react-router-dom"
import './Navbar.scss'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [stringAfterSlash, setStringAfterSlash] = useState('');

  useEffect(() => {
    const url = window.location.pathname;
    const parts = url.split('/');
    setStringAfterSlash(parts[parts.length - 1]);
  }, []);

  console.log("stringAfterSlash", stringAfterSlash)
     
     const displayNavbar = () => {
          console.log("hiii i'm navbar");
          setShowNav(true);
    }
  
    const hideNavbar = () => {
      console.log("i'm leaaving")
      setShowNav(false)
    }

    const activeLinkClass = `active-link-${stringAfterSlash}`;


  return (
    <div>
          <nav className={ `app__navbar${!showNav ? "" : "-all" }`}  onMouseOver={displayNavbar} onMouseLeave={hideNavbar}>
              <div className='app__navbar-colms'>
                 <div className='app__navbar-list'>
                      <div className='app__navbar-list-elm'>
                      <NavLink to="/"   className={({ isActive }) => 
                       (isActive ? `active-link-home` : "not-active-link")}>
                               <FontAwesomeIcon icon={faHouse}   />
                           
                                   <span style={{display: `${!showNav? 'none': ''}`}}>Home</span>
                               
                       </NavLink>
                              
                          </div>
                      <div className='app__navbar-list-elm'>
                      <NavLink to="/about"  className={({ isActive }) => 
                       (isActive ?`active-link-about` : "not-active-link")}>
                              <FontAwesomeIcon icon={faUser} />
                               
                                   <span style={{display: `${!showNav? 'none': ''}`}}>About</span>
                            
                       </NavLink>
                        
                      </div>
                      <div className='app__navbar-list-elm'>
                      <NavLink to="/projects"  className={({ isActive }) => 
                       (isActive ? "active-link-projects" : "not-active-link")}>
                             <FontAwesomeIcon icon={faFolderOpen} />
                             
                                   <span style={{display: `${!showNav? 'none': ''}`}}>Projects</span>
                             
                       </NavLink>
                    
                      </div>
                      <div className='app__navbar-list-elm'>
                      <NavLink to="/skills"  className={({ isActive }) => 
                       (isActive ? "active-link-skills" : "not-active-link")}>
                              <FontAwesomeIcon icon={faLaptopCode} />
                            
                                   <span style={{display: `${!showNav? 'none': ''}`}}>skills</span>
                              
                       </NavLink>
                     
                      </div>
                      <div className='app__navbar-list-elm'>
                      <NavLink to="/contact"  className={({ isActive }) => 
                       (isActive ? "active-link-contact" : "not-active-link")}>
                              <FontAwesomeIcon icon={faEnvelope} />
                               
                                   <span style={{display: `${!showNav? 'none': ''}`}}>Contact</span>
                               
                       </NavLink>
                       
                      </div>
                 </div>
                 
              </div>
         </nav>
    </div>
  )
}

export default Navbar