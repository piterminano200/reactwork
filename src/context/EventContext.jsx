import { createContext, useReducer } from 'react';

const EventContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.payload, completed: false, favorite: false }];
    case 'remove':
      return state.filter(e => e.id !== action.id);
    case 'complete':
      return state.map(e =>
        e.id === action.id ? { ...e, completed: true } : e
      );
    case 'favorite':
      return state.map(e =>
        e.id === action.id ? { ...e, favorite: !e.favorite } : e
      );
    default:
      return state;
  }
};


export const EventProvider = ({ children }) => {
  const [events, dispatch] = useReducer(reducer, []);
  return (
    <EventContext.Provider value={{ events, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
