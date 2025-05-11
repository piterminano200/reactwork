import ReactDOM from 'react-dom';
import { useContext } from 'react';
import EventContext from '../context/EventContext';

export default function EventList({ filteredEvents }) {
  const { dispatch } = useContext(EventContext);

  return ReactDOM.createPortal(
    <ul>
      {filteredEvents.map(event => (
        <li key={event.id}>
          {event.name}
          {!event.favorite && (
            <button onClick={() => dispatch({ type: 'remove', id: event.id })}>
              Eliminar
            </button>
          )}
          {event.favorite && (
            <button disabled style={{ opacity: 0.5 }}>
              No se puede eliminar
            </button>
          )}
        </li>
      ))}
    </ul>,
    document.getElementById('modal-root')
  );
}
