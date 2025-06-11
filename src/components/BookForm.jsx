import { useState, useEffect } from 'react'
import api from '../api'

export default function BookForm({ onSubmit, publishers, initial }) {
  const isEdit = Boolean(initial)
  const [title, setTitle] = useState(initial?.title || '')
  const [author, setAuthor] = useState(initial?.author || '')
  const [price, setPrice] = useState(initial?.price || '')
  const [stock, setStock] = useState(initial?.stock || '')
  const [pubId, setPubId] = useState(initial?.publisher_id || '')

  useEffect(() => {
    if (initial) setPubId(initial.publisher_id)
  }, [initial])

  const submit = e => {
    e.preventDefault()
    onSubmit({
      title, author,
      price: parseFloat(price),
      stock: parseInt(stock),
      publisher_id: parseInt(pubId)
    })
  }

  return (
    <form onSubmit={submit}>
      <h3>{isEdit ? 'Edit Book' : 'Add Book'}</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
      <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required />
      <input type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="Stock" required />
      <select value={pubId} onChange={e => setPubId(e.target.value)} required>
        <option value="">Select Publisher</option>
        {publishers.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
      </select>
      <button type="submit">{isEdit ? 'Update' : 'Create'}</button>
    </form>
  )
}
