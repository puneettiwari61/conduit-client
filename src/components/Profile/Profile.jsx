import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Button } from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import InsertEmoticonTwoToneIcon from '@material-ui/icons/InsertEmoticonTwoTone';

export default class Profile extends Component {
  render() {
    return (
      <>
        <Grid item xs={12}>
          <Paper className="paper">
              <InsertEmoticonTwoToneIcon className='profile-avatar' />
              <p className="profile-name">Author</p>
              <Button variant="contained" size="small">Follow author</Button>
          </Paper>
        </Grid>
      </>
    );
  }
}
