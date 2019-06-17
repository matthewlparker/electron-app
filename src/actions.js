export function addTodo(text) {
  return { type: 'ADD_TODO', text };
}

export function toggleTodo(index) {
  return { type: 'TOGGLE_TODO', index };
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
