export const fieldChangeHandler = (stateSetter) => ({ target: { name, value } }) => {
  stateSetter((currentState) => ({ ...currentState, [name]: value }));
};

export const dummyExport = 'Delete me as soon as we have a new export! =P';
