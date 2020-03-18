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
import Axios from 'axios';
import CreateArticle from './components/article/CreateArticle'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: localStorage.token ? true : false,
      isLogged: localStorage.isLogged,
      userData: null
    }
  }

  componentDidMount() {
    if (this.state.user == true) {
      Axios.get("https://cors-anywhere.herokuapp.com/https://conduit-campus.herokuapp.com/api/v1/user", { headers: { authorization: localStorage.token } })
        .then(res => {
          this.setState({userData:res.data.user})
        })
        .catch(err => console.log(err))
    }
  }


  isLoggedUpdate = (value) =>{
    this.setState({isLogged: value})
  }


  render() {
    console.log(this.state)
    return (
      <>
        <CssBaseline />
        <Header isLogged={this.state.isLogged} />
        <Route path='/' exact component={Home} />
        <Route path='/signin' render={(props) => <SignIn {...props} isLoggedUpdate={this.isLoggedUpdate} />} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateArticle} />
        <Route path='/article/:slug' render={(props) => <Article {...props} user={this.state.userData && this.state.userData} />}  />
        <Route path='/tag/:tagname' component={Tags} />
      </>
    );
  }
}

export default App;
