import React from "react";
import "./book.styles.scss";
import axios from "axios";

const book = (props) => {
  const handleDelete = () => {
    axios.get(`http://localhost:8000/delete/${props.book.id}/`).then((res) => {
      props.action();
    });
  };
  return (
    <div className="book">
      <img src={`http://localhost:8000${props.book.cover}`} alt="book" />
      <div className="book-details">
        <div className="book-info">
          <span className="text">{`Title:${props.book.title}`}</span>
          <span className="text">{`Author:${props.book.author}`}</span>
          <span className="text">{`Extracted Pages:${props.book.page}`}</span>
        </div>
        <div className="book-view">
          <a
            className="download"
            href={`http://localhost:8000${props.book.pdf}`}
            target="_blank"
          >
            View Pdf
          </a>
          <button onClick={handleDelete} className="delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default book;
