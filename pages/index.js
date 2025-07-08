import { useState } from 'react';
import books from '../data/books.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

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
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            style={{
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            <h2 style={{ margin: '0 0 0.5rem 0' }}>{book.title}</h2>
            <p style={{ margin: 0 }}>
              <em>{book.author}</em> &middot; {book.year}
            </p>
          </div>
        ))}
        {filteredBooks.length === 0 && <p>No books found.</p>}
      </div>
    </div>
  );
}
