import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import ProjectsPage from './components/pages/ProjectsPage';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={ProjectsPage} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
