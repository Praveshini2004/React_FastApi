import { useState, useEffect } from 'react'
import api from './api'
import PublisherForm from './components/PublisherForm'
import PublisherList from './components/PublisherList'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import SearchBooks from './components/SearchBooks'

function App() {
  const [publishers, setPublishers] = useState([])
  const [books, setBooks] = useState([])
  const [editBook, setEditBook] = useState(null)

  const loadPublishers = async () => {
    const res = await api.get('/publishers/')
    setPublishers(res.data)
  }

  const loadBooks = async () => {
    const res = await api.get('/books/')
    setBooks(res.data)
  }

  useEffect(() => {
    loadPublishers()
    loadBooks()
  }, [])

  const addPublisher = p => setPublishers(prev => [...prev, p])

  const createBook = async (payload) => {
    await api.post('/books/', payload)
    loadBooks()
  }

  const updateBook = async (payload) => {
    await api.put(`/books/${editBook.id}`, { price: payload.price, stock: payload.stock })
    setEditBook(null)
    loadBooks()
  }

  const deleteBook = async (id) => {
    await api.delete(`/books/${id}`)
    loadBooks()
  }

  const doSearch = (results) => setBooks(results)

  return (
    <div style={{ padding: '20px' }}>
      <PublisherForm onCreate={addPublisher} />
      <PublisherList publishers={publishers} />

      <hr />

      <SearchBooks onResults={doSearch} />
      <BookForm
        key={editBook?.id || 'new'}
        initial={editBook}
        onSubmit={editBook ? updateBook : createBook}
        publishers={publishers}
      />
      <BookList books={books} onEdit={setEditBook} onDelete={deleteBook} />
    </div>
  )
}

export default App
