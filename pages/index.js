
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Scripta Mundi</h1>
      <p>Your gateway to the world of rare and meaningful books.</p>
      
      <input
        type="text"
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem', marginBottom: '1rem', width: '100%' }}
      />

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
