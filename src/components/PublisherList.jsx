export default function PublisherList({ publishers }) {
  return (
    <div>
      <h3>Publishers</h3>
      <ul>
        {publishers.map(p => (
          <li key={p.id}>{p.name} ({p.country})</li>
        ))}
      </ul>
    </div>
  )
}
