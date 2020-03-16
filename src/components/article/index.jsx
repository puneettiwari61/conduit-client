import React, { Component } from 'react'
import Axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default class Article extends Component {

  constructor() {
    super()
    this.state = {
      article: null
    }
  }

  componentDidMount() {
    Axios.get(`https://cors-anywhere.herokuapp.com/https://conduit-campus.herokuapp.com/api/v1/articles/${this.props.match.params.slug}`)
      .then(res => this.setState({ article: res.data.article }))
      .catch(err => console.log(err))

  }


  render() {
    console.log(this.state.article)
    return (
      <>
        <Grid item xs={12}  >
          <Paper className='paper' >{this.state.article && this.state.article.title}</Paper>
        </Grid>
        <div>
          <h3>{this.state.article && this.state.article.description}</h3>
        </div>
        <div>
          <h4>{this.state.article && this.state.article.body}</h4>
        </div>
        <h1>Hello I m article</h1>
      </>
    )
  }
}
