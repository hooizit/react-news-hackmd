import React from "react";
import PropTypes from "prop-types";
import { Article } from "./Article";

class News extends React.Component {
  renderNews = () => {
    // access to "this" methodName = () => {...}
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(el => {
        return <Article key={el.id} data={el} />;
      });
    } else {
      newsTemplate = <p>Unfortunately no news</p>;
    }

    return newsTemplate;
  };

  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong className={"news__count"}>
            Total news count: {data.length}
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
