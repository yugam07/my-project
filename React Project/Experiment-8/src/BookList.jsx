import React from "react";

export default function BookList({ books, removeBook }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div className="book-item" key={index}>
          <p>
            <b>{book.title}</b> by {book.author}
          </p>
          <button onClick={() => removeBook(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
