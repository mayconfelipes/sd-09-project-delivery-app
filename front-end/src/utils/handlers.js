export const fieldChangeHandler = (stateSetter) => ({ target: { name, value } }) => {
  stateSetter((currentState) => ({ ...currentState, [name]: value }));
};
