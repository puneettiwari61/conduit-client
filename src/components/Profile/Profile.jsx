import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar, Button } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import InsertEmoticonTwoToneIcon from "@material-ui/icons/InsertEmoticonTwoTone";
import Tabs from "./Tabs";
import Axios from "axios";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: null
    };
  }

  componentDidMount() {
    Axios.get(
      `http://localhost:3002/api/v1/profiles/${this.props.match.params.author}`,
      { headers: { authorization: localStorage.conduit } }
    )
      .then(res => {
        console.log(res.data, "profile");
        this.setState({ profile: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Grid item xs={12}>
          <Paper className="paper">
            <InsertEmoticonTwoToneIcon className="profile-avatar" />
            <p className="profile-name">{this.props.match.params.author}</p>
            <Button variant="contained" size="small">
              Follow {this.props.match.params.author}
            </Button>
          </Paper>
        </Grid>
        <Tabs user={this.state.profile && this.state.profile} />
      </>
    );
  }
}
