import books from '../data/books.json';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Scripta Mundi</h1>
      <p>Your gateway to the world of rare and meaningful books.</p>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
