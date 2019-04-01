import React from "react";
import PropTypes from "prop-types";
import { Article } from "./Article";

class News extends React.Component {
  state = {
    filteredNews: this.props.data
  };

  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews = [...props.data];

    nextFilteredNews.forEach((item, index) => {
      if (item.content.toLowerCase().indexOf("pubg") !== -1) {
        item.content = "SPAM";
      }
    });

    return { filteredNews: nextFilteredNews };
  }

  renderNews = () => {
    const { filteredNews } = this.state; // use state
    let newsTemplate = null;

    if (filteredNews.length) {
      newsTemplate = filteredNews.map(el => {
        return <Article key={el.id} data={el} />;
      });
    } else {
      newsTemplate = <p>Unfortunately, no news</p>;
    }

    return newsTemplate;
  };

  render() {
    const { filteredNews } = this.state;

    return (
      <div className="news">
        {this.renderNews()}
        {filteredNews.length ? (
          <strong className={"news__count"}>
            Total news: {filteredNews.length}
          </strong>
        ) : null}
      </div>
    );
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired
};

export { News };
