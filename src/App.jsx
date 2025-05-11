import { Suspense, Profiler, lazy } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import ErrorBoundary from './components/ErrorBoundary';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRef } from 'react';

import './styles/transitions.css'; 

const Home = lazy(() => import('./pages/home'));
const Buscar = lazy(() => import('./pages/buscar'));
const Historial = lazy(() => import('./pages/historial'));
const About = lazy(() => import('./pages/about'));

function onRenderCallback(id, phase, actualDuration) {
  console.log(`[Profiler] ${id} (${phase}) - ${actualDuration}ms`);
}

export default function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <EventProvider>
      <ErrorBoundary>
        <Profiler id="EventApp" onRender={onRenderCallback}>
          <nav>
            <Link to="/">Inicio</Link> | <Link to="/about">Información</Link>| <Link to="/buscar">Buscar</Link> | <Link to="/historial">Historial</Link>
          </nav>

          <SwitchTransition>
  <CSSTransition
    key={location.pathname}
    timeout={300}
    classNames="fade"
    nodeRef={nodeRef} 
    unmountOnExit
  >
    <div ref={nodeRef}>
      <Suspense fallback={<p>Cargando vista...</p>}>
        <Routes location={location}>
        
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/about" element={<About />} />
      
        </Routes>
      </Suspense>
    </div>
  </CSSTransition>
</SwitchTransition>
        </Profiler>
      </ErrorBoundary>
    </EventProvider>
  );
}
