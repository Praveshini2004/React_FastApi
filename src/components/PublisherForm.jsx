import { useState } from 'react'
import api from '../api'

export default function PublisherForm({ onCreate }) {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post('/publishers/', { name, country })
      setName(''); setCountry('')
      onCreate(res.data)
    } catch (e) {
      alert('Error creating publisher: ' + e.message)
    }
  }

  return (
    <form onSubmit={submit}>
      <h3>Create Publisher</h3>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={country} onChange={e => setCountry(e.target.value)} placeholder="Country" required />
      <button type="submit">Add Publisher</button>
    </form>
  )
}
