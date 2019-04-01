import React from "react";
import { Add } from "./components/Add";
import { News } from "./components/News";
import "./App.css";

class App extends React.Component {
  state = {
    news: null,
    isLoading: false
  };

  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews;
    if (Array.isArray(state.news)) {
      nextFilteredNews = [...state.news];

      nextFilteredNews.forEach((item, index) => {
        if (item.content.toLowerCase().indexOf("pubg") !== -1) {
          item.content = "SPAM";
        }
      });

      return { filteredNews: nextFilteredNews };
    }
    return null;
  }

  handleAddNews = data => {
    //adding new news to begining
    const nextNews = [data, ...this.state.news];
    // update array of news
    this.setState({ news: nextNews });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3000/data/NewsData.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTimeout(() => {
          this.setState({ isLoading: false, news: data });
        }, 1000);
      });
  }

  render() {
    const { news, isLoading } = this.state;
    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h2>News</h2>
        {isLoading && <p>Loading...</p>}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    );
  }
}

export default App;
