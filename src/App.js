import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './components/login';
import Forgot from './components/forgot ';
import Recaptcha from './components/recaptcha';
import Footer from "./components/footer";
import Count from './components/count'
import Tekcast from './components/tekcast'
let App = () =>{
return(
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/forgot" element={ <Forgot/> } />
        <Route path="/recaptcha" element={ <Recaptcha/> } />
      </Routes>
    </Router>


    {/* <Count/> */}
    {/* <Tekcast/> */}

<Footer/>

  </div>






)

}

export default App;



