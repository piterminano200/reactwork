import EventForm from '../components/EventForm';
import { useContext } from 'react';
import EventContext from '../context/EventContext';

export default function Home() {
  const { events, dispatch } = useContext(EventContext);

  return (
    <div>
      <h1>Crear eventos</h1>
      <EventForm />
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name}
            {!event.favorite ? (
              <button onClick={() => dispatch({ type: 'remove', id: event.id })}>
                Eliminar
              </button>
            ) : (
              <button disabled style={{ opacity: 0.5 }}>
                No se puede eliminar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
