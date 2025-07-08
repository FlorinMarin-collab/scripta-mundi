// redeploy trigger test
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

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
          </li>
        ))}
        {filteredBooks.length === 0 && <li>No books found.</li>}
      </ul>
    </div>
  );
}
<ul>
  {filteredBooks.map((book) => (
    <li key={book.id} style={{ marginBottom: '1rem' }}>
      <strong>{book.title}</strong> by {book.author} ({book.year})
    </li>
  ))}
</ul>
