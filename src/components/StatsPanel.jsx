import { useContext, useMemo } from 'react';
import EventContext from '../context/EventContext';

export default function StatsPanel() {
  const { events } = useContext(EventContext);

  const total = useMemo(() => events.length, [events]);
  const nombreMasLargo = useMemo(() => {
    if (events.length === 0) return 'N/A';
    return events.reduce((a, b) => (a.name.length > b.name.length ? a : b)).name;
  }, [events]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Estadísticas:</h3>
      <p>Total de eventos: {total}</p>
      <p>Nombre más largo: {nombreMasLargo}</p>
    </div>
  );
}
