import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp/index'
import Header from './components/Common/index.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import Article from './components/article';
import Tags from './components/tags';



function App() {
  return (
    <>
    <CssBaseline />
    <Header />
    <Route path='/' exact component={Home} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    <Route path='/article/:slug' component={Article} />
    <Route path='/tag/:tagname' component={Tags} />

    </>
  );
}

export default App;
