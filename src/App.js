import React from "react";
import { Add } from "./components/Add";
import { News } from "./components/News";
import NewsData from "./data/myNewsData";
import "./App.css";

class App extends React.Component {
  state = {
    news: NewsData
  };

  handleAddNews = data => {
    //adding new news to begining
    const nextNews = [data, ...this.state.news];
    // update array of news
    this.setState({ news: nextNews });
  };

  render() {
    return (
      <React.Fragment>
        <h2>News</h2>
        <Add onAddNews={this.handleAddNews} />
        <News data={this.state.news} />
      </React.Fragment>
    );
  }
}

export default App;
