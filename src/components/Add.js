import React from "react";
import PropTypes from "prop-types";

class Add extends React.Component {
  state = {
    author: "",
    title: "",
    content: "",
    agree: false
  };

  onBtnClickHandler = e => {
    e.preventDefault();
    const { author, title, content } = this.state;
    this.props.onAddNews({
      id: +new Date(),
      author,
      title,
      content
    });
  };

  handleChangeInputs = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  handleCheckboxChange = e => {
    this.setState({ agree: e.currentTarget.checked });
  };
  render() {
    const { author, title, content, agree } = this.state;

    return (
      <form className="add">
        <input
          id="author"
          type="text"
          onChange={this.handleChangeInputs}
          className="add__author"
          placeholder="Your Name"
          value={author}
        />
        <textarea
          id="title"
          onChange={this.handleChangeInputs}
          className="add__text"
          placeholder="Enter Title"
          value={title}
        />
        <textarea
          id="content"
          onChange={this.handleChangeInputs}
          className="add__text"
          placeholder="Enter Content"
          value={content}
        />
        <label className="add__checkrule">
          <input type="checkbox" onChange={this.handleCheckboxChange} />I Agree
          With Rulezzz
        </label>
        <button
          className="add__btn"
          onClick={this.onBtnClickHandler}
          disabled={!agree || !author.trim() || !content.trim()}
        >
          Show Alert
        </button>
      </form>
    );
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired
};

export { Add };
