import Axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Card from '../Home/cards'
export default class Tags extends Component {
  constructor() {
    super()
    this.state = {
      articles: null,
    }
  }
  componentDidMount() {
    Axios.get(`https://cors-anywhere.herokuapp.com/https://conduit-campus.herokuapp.com/api/v1/articles?tagList=${this.props.match.params.tagname}`)
      .then(res => {this.setState({ articles: res.data.searchResult })})
      .catch(err => console.log(err))
  }



  render() {
    return (
      <>
        <Grid item xs={12}  >
          <Paper className='paper' >{'#' + this.props.match.params.tagname}</Paper>
        </Grid>
        {this.state.articles && this.state.articles.map((a,id) => {
          return (
                  <Container maxWidth="sm" className="container">
                  {/* //   <div>
                  //   <Paper variant="elevation" className='padit' >
                  //   <Typography variant="h4" component="h1">
                  //      {a.title}
                  //    </Typography>
                  //     <h3>{a.description}</h3>
                  //     <p>{a.body}</p>
                  //     </Paper>
                  //   </div> */}
                  <Card  {...a} key={id} />
                   </Container>
                
          )
        })}
      </>
    )
  }
}




