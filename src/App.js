import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp/index'
import Header from './components/Common/index.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  return (
    <>
    <CssBaseline />
    <Header />
    <Route path='/' exact component={Home} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    </>
  );
}

export default App;
