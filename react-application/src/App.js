import React from 'react';
import './App.css';
import LoginForm from './LoginForm.js';
import WelcomeNote from './WelcomeNote';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scorecard from './Scorecard';
import ScorecardPage from './ScorecardPage';
import AudetCard from './AudetCard.js'

function App() {
  return (
    <div className="App">
     <div className="container">
       {/* <WelcomeNote /> 
      <LoginForm />  */}
      {/* <h1>HelllooooooTest</h1> */}
     </div>

<Router>
<Routes>

<Route path ='/home' element= {<Home/>}/>
<Route path='/' element={<LoginForm/>}/>
<Route path='/welcomenote' element={<WelcomeNote/>}/>
<Route path='/scorecard' element={<Scorecard/>}/>
<Route path='/ScorecardPage' element={<ScorecardPage/>}/>
<Route path='/AudetCard' element={<AudetCard/>}/>

</Routes>
</Router> 
    </div>
  );
}

export default App;
