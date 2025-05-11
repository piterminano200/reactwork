import { useContext, useMemo } from 'react';
import EventContext from '../context/EventContext';

export default function About() {
  const { events } = useContext(EventContext);

  const total = events.length;
  const completados = events.filter(e => e.completed).length;
  const favoritos = events.filter(e => e.favorite).length;

  const nombreMasLargo = useMemo(() => {
    if (events.length === 0) return null;
    return events.reduce((a, b) => (a.name.length > b.name.length ? a : b));
  }, [events]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Información sobre EventMaster</h2>
      <p>
        EventMaster es una aplicación de gestión de eventos desarrollada con React.
        Permite añadir, buscar, completar y marcar como favoritos tus eventos.
        También puedes ver un historial de los eventos realizados.
      </p>

      <ul>
        <li>🧩 Componentes reutilizables</li>
        <li>🔍 Búsqueda en tiempo real</li>
        <li>⭐ Marcado de favoritos</li>
        <li>✔ Historial de completados</li>
        <li>⚡ Carga diferida de vistas con React.lazy</li>
      </ul>

      <h3>📊 Estadísticas actuales</h3>
      <ul>
        <li>Total de eventos: {total}</li>
        <li>Eventos completados: {completados}</li>
        <li>Eventos favoritos: {favoritos}</li>
        {nombreMasLargo && (
          <li>
            Evento con el nombre más largo: <strong>{nombreMasLargo.name}</strong> ({nombreMasLargo.name.length} letras)
          </li>
        )}
      </ul>
    </div>
  );
}
