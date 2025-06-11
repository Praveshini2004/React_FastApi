import { useState } from 'react'
import api from '../api'

export default function SearchBooks({ onResults }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const search = async (e) => {
    e.preventDefault()
    const params = {}
    if (title) params.title = title
    if (author) params.author = author
    const res = await api.get('/books/search-books', { params })
    onResults(res.data)
  }

  return (
    <form onSubmit={search}>
      <h3>Search Books</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}
