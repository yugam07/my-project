import React, { useState } from "react";

export default function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="add-section">
      <input
        type="text"
        placeholder="New book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
}
