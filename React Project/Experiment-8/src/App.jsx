import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import BookForm from "./BookForm";
import BookList from "./BookList";

export default function App() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [search, setSearch] = useState("");

  const addBook = (title, author) => {
    if (title && author) {
      setBooks([...books, { title, author }]);
    }
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Library Management</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <BookForm addBook={addBook} />
        <BookList books={filteredBooks} removeBook={removeBook} />
      </div>
    </div>
  );
}
