import React , { useState } from 'react';
import './Home.scss';

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  const displayNavbar = () => {
        console.log("hiii i'm navbar");
        setShowNav(true);
  }

  const hideNavbar = () => {
    console.log("i'm leaaving")
    setShowNav(false)
  }
  return (
    <div className='app__home'>
        
         <div className='app__centerText-container'>
             <h1 className='app__centerText-elmt'>
                 Hello, I'm <span>SAHARI Hadjer</span>
                  <br />
                  based
                  <br />
                  in Algiers
             </h1> 
         </div>
         <nav className={ `app__navbar${!showNav ? "" : "-all" }`}  onMouseOver={displayNavbar} onMouseLeave={hideNavbar}>
              <div className='app__navbar-list'>
                 <div className='app__navbar-list-elm'>Home</div>
                 <div className='app__navbar-list-elm'>About</div>
                 <div className='app__navbar-list-elm'>Projects</div>
                 <div className='app__navbar-list-elm'>Skills</div>
                 <div className='app__navbar-list-elm'>Contact</div>
              </div>
         </nav>
    </div>
  )
}

export default Home