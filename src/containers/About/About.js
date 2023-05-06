import { useState, useEffect } from 'react'
import './About.scss'

const About = () => {
  
  const [animatedClass, setAnimatedClass] = useState(' animation');
  function resolveAfter60Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 9000);
    });
  }
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter60Seconds();
    setAnimatedClass('');
    console.log(result);
    // expected output: "resolved"
  }
  useEffect(() => {
    console.log('class is before',animatedClass)
    //asyncCall();
    console.log('class is',animatedClass)
  })
  return (
    <div>
        <div className={`about-animated`} >
              
                  <h2>About me</h2>
            
        </div>
    </div>
  )
}

export default About