import './App.scss';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {

  return (
   
    <div className="App">
       <Navbar />
       <Routes>
          <Route path="/"  element={ <Home />}/>
          <Route path="/about"  element={ <About />}/>
       </Routes>
     
    </div>
  );
}

export default App;
