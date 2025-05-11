import { useContext, useRef } from 'react';
import EventContext from '../context/EventContext';

export default function EventForm() {
  const { dispatch } = useContext(EventContext);
  const inputRef = useRef();

  const handleAdd = () => {
    const name = inputRef.current.value.trim();
    if (name !== '') {
      dispatch({ type: 'add', payload: { id: Date.now(), name } });
      inputRef.current.value = '';
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <input ref={inputRef} placeholder="Nombre del evento" />
      <button onClick={handleAdd}>Añadir evento</button>
    </div>
  );
}
