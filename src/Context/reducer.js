export default function MovieReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { name: action.name, actor: action.actor }];
    case 'REMOVE':
      return state.filter(({ name }) => name !== action.name);
    default:
      return state;
  }
}
