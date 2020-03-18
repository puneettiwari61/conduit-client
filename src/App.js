import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp/index";
import Header from "./components/Common/index.jsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Article from "./components/article";
import Tags from "./components/tags";
import Axios from "axios";
import CreateArticle from "./components/article/CreateArticle";
import { Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { LinearProgress } from '@material-ui/core';

function AuthRoutes(authProps) {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateArticle} />
        <Route
          path="/article/:slug"
          render={props => (
            <Article
              {...props}
              user={authProps.data.userData && authProps.data.userData}
              isLogged={authProps.isLogged}
            />
          )}
        />
        <Route path="/tag/:tagname" component={Tags} />
        <Route path="/profile/:author" component={Profile} />
        <Route path="*">
          <h1>Error Page not found</h1>{" "}
        </Route>
      </Switch>
    </>
  );
}

function PulicRoutes(publicProps) {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/signin"
          render={props => (
            <SignIn {...props} isLoggedUpdate={publicProps.isLoggedUpdate} />
          )}
        />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/article/:slug"
          render={props => (
            <Article {...props} isLogged={publicProps.isLogged} />
          )}
        />
        <Route path="/tag/:tagname" component={Tags} />
        <Route path="/profile/:author" component={Profile} />
        <Route path="*">
          <h1>Error Page not found</h1>{" "}
        </Route>
      </Switch>
    </>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
      userData: null,
      loader: false
    };
  }

  componentDidMount() {
    this.setState({loader:true})
    if (localStorage["conduit"]) {
      Axios.get("https://conduit-campus.herokuapp.com/api/v1/user", {
        headers: { authorization: localStorage.conduit }
      })
        .then(res => {
          this.setState({ isLogged: true, userData: res.data.user });
        })
        .catch(err => {
          this.setState({ isLogged: false });
          console.log(err);
        });
    }
    this.setState({loader:false})
  }

  isLoggedUpdate = value => {
    this.setState({ isLogged: value });
  };

  logoutFunc = () => {
    localStorage.clear();
    this.setState({ isLogged: false });
  };

  render() {
    console.log(this.state)
    return (
      <>
        <CssBaseline />
        {this.state.loader==false ? '':  <LinearProgress /> }

        <Header isLogged={this.state.isLogged} logoutFunc={this.logoutFunc} />
        {this.state.isLogged ? (
          <AuthRoutes
            data={this.state.userData}
            isLogged={this.state.isLogged}
          />
        ) : (
          <PulicRoutes
            isLoggedUpdate={this.isLoggedUpdate}
            isLogged={this.state.isLogged}
          />
        )}
      </>
    );
  }
}

export default App;
