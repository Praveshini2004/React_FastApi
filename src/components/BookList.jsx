
export default function BookList({ books, onEdit, onDelete }) {
  return (
    <div>
      <h3>Books</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Author</th>
            <th>Price</th><th>Stock</th><th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.price}</td>
              <td>{b.stock}</td>
              <td>{b.publisher.name}</td>
              <td>
                <button onClick={() => onEdit(b)}>Edit</button>
                <button onClick={() => onDelete(b.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
