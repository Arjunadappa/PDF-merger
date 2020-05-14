import React from "react";

import "./book-library.styles.scss";
import Book from "../book/book.components";

const BookLibrary = (props) => (
  <div className="book-library">
    <h2>Uploaded Books</h2>
    {props.books.map((book) => (
      <Book key={book.id} book={book} action={props.action}></Book>
    ))}
  </div>
);

export default BookLibrary;
