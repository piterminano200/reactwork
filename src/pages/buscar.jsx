import { useState, useContext } from 'react';
import EventContext from '../context/EventContext';

export default function Buscar() {
  const { events, dispatch } = useContext(EventContext);
  const [search, setSearch] = useState('');

  const filtrados = events.filter(event =>
    (event.favorite || event.name.toLowerCase().includes(search.toLowerCase())) &&
    !event.completed
  );

  return (
    <div>
      <h1>Buscar eventos</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtrados.map(event => (
          <li key={event.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {event.name}
            <button
              onClick={() => dispatch({ type: 'favorite', id: event.id })}
              style={{
                backgroundColor: event.favorite ? 'lightgreen' : 'white',
                color: 'gold',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ★
            </button>
            <button onClick={() => dispatch({ type: 'complete', id: event.id })}>
              ✔
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
