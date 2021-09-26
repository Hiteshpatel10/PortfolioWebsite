import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contacts'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>  
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/skills" exact>
          <Skills/>
        </Route>
        <Route path="/projecrs" exact>
          <Projects/>
        </Route>
        <Route path="/#section1" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
