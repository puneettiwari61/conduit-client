import React, { Component } from "react";
import axios from "axios";
import Card from "./cards";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Skeleton from "@material-ui/lab/Skeleton";

// import Tags from './Tags'
import Chip from "@material-ui/core/Chip";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      tags: null,
      loader: false
    };
  }

  componentDidMount() {
    this.setState({ loader: true });
    const url = "https://conduit.productionready.io/api";
    const articles = () =>
      axios
        .get("https://conduit-campus.herokuapp.com/api/v1/articles")
        .then(res => res.data);
    const tags = () =>
      axios
        .get("https://conduit-campus.herokuapp.com/api/v1/tags")
        .then(res => res.data);

    Promise.all([articles(), tags()])
      .then(data => {
        this.setState({
          articles: data[0].searchResult,
          tags: data[1].tags,
          loader: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Grid item xs={12}>
          <Paper className="paper">Conduit</Paper>
        </Grid>
        <div className="flex">
          <div className="global-feed">
            {this.state.articles &&
              this.state.articles.map((a, id) => {
                return <Card {...a} key={id} />;
              })}
          </div>
          <div className="tags">
            {this.state.loader ? (
              <>
                <Skeleton className={"skeleton"} />
                <Skeleton className={"skeleton"} />
                <Skeleton animation="wave" className={"skeleton"} />
                <Skeleton className={"skeleton"} />
                <Skeleton className={"skeleton"} />
                <Skeleton animation="wave" className={"skeleton"} />
                <Skeleton className={"skeleton"} />
                <Skeleton className={"skeleton"} />
                <Skeleton animation="wave" className={"skeleton"} />
              </>
            ) : (
              <p className={"font20"}>Popular tags</p>
            )}
            {this.state.tags &&
              this.state.tags.map((t, id) => (
                <Link className="tag-link" href={`/tag/${t}`} key={id}>
                  {" "}
                  <Chip label={t} className="padding" clickable />{" "}
                </Link>
              ))}
          </div>
        </div>
      </>
    );
  }
}
