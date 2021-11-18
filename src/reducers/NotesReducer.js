const notesReducer = (state, action) => {
  const notes = [...state.notes];
  let note = action.payload;

  const index = notes.findIndex((n) => n.id === note.id);

  switch (action.type) {
    case 'CREATE':
      const id =
        notes.map((n) => n.id).reduce((prev, curr) => Math.max(prev, curr)) + 1;

      note = { ...action.payload, id };

      return { ...state, notes: [...notes, note] };
    case 'UPDATE':
      notes[index] = note;

      return { ...state, notes };
    case 'DELETE':
      notes.splice(index, 1);

      return { ...state, notes };
  }

  return { ...state };
};

export default notesReducer;
