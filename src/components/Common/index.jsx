import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import HomeIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import {withRouter} from "react-router-dom"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
    letterSpacing: 2
  },
  button: {
    fontSize: 25,
    cursor: "pointer",
    padding: 15
  },
  bar: {
 backgroundColor: "#6a1b9a",
  },
  tool: {
    width:"70%",
    margin: "0 auto"
     },
  paper: {
    backgroundColor: "#4a148c",
    textAlign: "center",
    lineHeight: 5,
    fontSize: 50, 
    borderRadius: "0 !important",
    color: "white",
    marginTop: 10 
  },
  grid: {
    borderRadius: "0 !important"
  },
  linkButton: {
    fontSize: 25
  }
}));
// #4db6ac
function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" className={classes.bar}>
        <Toolbar className={classes.tool}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon fontSize="large"  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
               <Link href="/" color="inherit">Conduit</Link>
          </Typography>
          {
            props.isLogged ? (
              <>
              <Button href="/create"
          className={classes.linkButton}
                  startIcon={<AddIcon size="small" />}
          color="inherit" >New Article</Button>
          <Link color="inherit" className={classes.button}>Logout</Link>
          </>
            ) : (
              <>
              <Link href="/signup" color="inherit" className={classes.button}>Signup</Link>
              <Link href="/signin"  color="inherit" className={classes.button}>Login</Link>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withRouter(ButtonAppBar)