import React from "react";
import PropTypes from "prop-types";

class Article extends React.Component {
  state = {
    visible: false // initial state
  };

  handleReadMoreClick = e => {
    e.preventDefault();
    this.setState({ visible: true });
  };
  render() {
    const { author, title, content } = this.props.data;
    const { visible } = this.state;
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{title}:</p>
        {/* if not visible, show link */
        !visible && (
          <a
            onClick={this.handleReadMoreClick}
            href="#readmore"
            className="news__readmore"
          >
            Read more
          </a>
        )}
        {visible && <p className="news__content">{content}:</p>}
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export { Article };
