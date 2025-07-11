import React from 'react';

export default function Home({ books = [] }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Scripta Mundi</h1>
      <p>Your gateway to the world of rare and meaningful books.</p>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1rem',
        }}
      />

      {filteredBooks.length > 0 ? (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id} style={{ marginBottom: '1rem' }}>
              <strong>{book.title}</strong> by {book.author} ({book.year})
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
