import React, { Component } from "react";
import { Grid, Button, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <>
        <div className="createAricle-div comment-div">
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Comment"
              multiline
              rows="4"
              variant="outlined"
              fullWidth
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              className="one-m zero-left-m"
              size="small"
              color="primary"
              onClick={e => this.props.handleClick(this.state.comment)}
            >
              Post Comment
            </Button>
          </Grid>
        </div>
        <div className="createAricle-div comment-div">
          <Grid item xs={12}>
            <Paper variant="outlined" className="padit">
              {this.props.comments &&
                this.props.comments.map((c, id) => {
                  return (
                    <>
                      <p key={id}>{c.body}</p>
                      {/* <p> {c.auhtor} </p> */}
                    </>
                  );
                })}
            </Paper>
          </Grid>
        </div>
      </>
    );
  }
}
