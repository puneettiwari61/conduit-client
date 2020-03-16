import Axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import React, { Component } from 'react'

export default class Tags extends Component {
  render() {
    return (
      <>
        <Grid item xs={12}  >
          <Paper className='paper' >{this.props.match.params.tagname}</Paper>
        </Grid>
        <h1>I m tags</h1>
      </>
    )
  }
}




