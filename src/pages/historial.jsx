import { useContext, useState } from 'react';
import EventContext from '../context/EventContext';

export default function Historial() {
  const { events } = useContext(EventContext);
  const [search, setSearch] = useState('');

  const completados = events.filter(
    e => e.completed && e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Historial de eventos completados</h1>
      <input
        type="text"
        placeholder="Buscar completados..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {completados.map(event => (
          <li
            key={event.id}
            style={{
              backgroundColor: '#ccc',
              padding: '6px',
              marginBottom: '5px',
              borderRadius: '4px',
            }}
          >
            {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
