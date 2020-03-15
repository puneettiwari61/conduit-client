import React, { Component } from 'react';
import axios from 'axios'
import Card from './cards'
// import Tags from './Tags'
import Chip from '@material-ui/core/Chip';
export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      articles: null,
      tags: null
    }
  }

  componentDidMount() {
   const url = "https://conduit.productionready.io/api" 
   const articles = () =>  axios.get("https://conduit.productionready.io/api/articles?limit=10&offset=0").then(res => res.data)
   const tags = () =>  axios.get("https://conduit.productionready.io/api/tags").then(res => res.data)

    Promise.all([articles(),tags()]).then(data => {
      // console.log(data[1].tags)
      this.setState({articles: data[0].articles, tags: data[1].tags})
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <>
      <div className="flex">
        <div className="global-feed">
                {this.state.articles && this.state.articles.map((a,id)  => {
                return <Card  {...a} key={id} /> })}
        </div>
        <div className="tags">
          <p className={"font20"}>Popular tags</p>
          {this.state.tags && this.state.tags.map((t,id) => <Chip key={id} label={t} className="padding" clickable/>)}
        </div>
        </div>
      </>
    )
  }
}


