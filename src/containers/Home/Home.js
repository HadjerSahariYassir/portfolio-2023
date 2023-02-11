import React , { useState } from 'react';
import './Home.scss';

  const Home = () => {

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
         
    </div>
  )
}

export default Home