import React, { Component } from 'react'
import Axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar';
import Link from "@material-ui/core/Link"
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button"
import FavoriteIcon from '@material-ui/icons/Favorite';


export default class Article extends Component {

  constructor() {
    super()
    this.state = {
      article: '',
      favorite: "Favorite Article",
      user:  null
    }
  }

  componentDidMount() {
        Axios.get(`https://cors-anywhere.herokuapp.com/https://conduit-campus.herokuapp.com/api/v1/articles/${this.props.match.params.slug}`)
      .then(res => {
        this.setState({ article: res.data.article })})
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    // this.state.user && this.state.user.favorites.includes(this.state.article._id) ? this.setState({favorite: 'Unfavorite Aricle'}) : this.setState({favorite: "Favorite Article"})
  }
  

  getDate = (d) => {
    const date = new Date(`${d}`)
    return date.toLocaleDateString()
  }

  handleFavorite = () => {
    Axios.post(`https://cors-anywhere.herokuapp.com/https://conduit-campus.herokuapp.com/api/v1/articles/${this.props.match.params.slug}/favorite`,{},{ headers: { authorization: localStorage.token } })
    .then(res => {
      this.props.user && this.props.user.favorites.includes(this.state.article && this.state.article._id) ? this.setState({favorite: 'Unfavorite Aricle'}) : this.setState({favorite: "Favorite Article"})
    })
    .catch(err => console.log(err))
  }

  getFavourite = () => {
    return 
  }

  render() {
    return (
      <>
        <Grid item xs={12}  >
          <Paper className='paper' >{this.state.article && this.state.article.title}
          <div className='flex2 author-details'>
            <div className="flex2">
            <Avatar className="avatar" />
            <div className='flex2 column'>
            <p className='author'> <Link className="link">{this.state.article && this.state.article.author.username}</Link></p>
          <span className="date">{this.state.article && this.getDate(this.state.article.createdAt)}</span>
            </div>
          <Button
        variant="contained"
        color="default"
        startIcon={<AddIcon size="small" />}
        size="small"
        className="icon-button"
      >Follow Author </Button>
                <Button
                onClick={this.handleFavorite}
        variant="contained"
        color="default"
        startIcon={<FavoriteIcon size="small" />}
        size="small"
        className="icon-button"
    >{this.state.favorite} </Button>
            </div>
          </div>
          </Paper>
        </Grid>
        <Container maxWidth="sm" className="container">
          <div>
          <Paper variant="elevation" className='padit' >
            <h1>{this.state.article && this.state.article.description}</h1>
            <p>{this.state.article && this.state.article.body}</p>
            </Paper>
          </div>
        </Container>
      </>
    )
  }
}
