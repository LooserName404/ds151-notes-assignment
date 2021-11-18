import React, { createContext, useReducer } from 'react';
import notesReducer from '../reducers/NotesReducer';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, { notes: [] });

  const addNote = (note) => {
    dispatch({ type: 'CREATE', payload: note });
  };

  const updateNote = (note) => {
    dispatch({ type: 'UPDATE', payload: note });
  };

  const removeNote = (note) => {
    dispatch({ type: 'DELETE', payload: note });
  };

  return (
    <NotesContext.Provider value={{ state, addNote, updateNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
