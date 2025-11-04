export default function ListRenderer({ title, items }) {
  return (
    <div className="list-container">
      <h3>{title}</h3>
      <ul>
        {Object.entries(items).map(([name, qty]) => (
          <li key={name}>
            {name}: {qty}
          </li>
        ))}
      </ul>
    </div>
  );
}
