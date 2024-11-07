// // src/store.js
// import { createStore } from 'redux';
// import { combineReducers } from 'redux';

// const initialState = {
//   tasks: [],
// };

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TASK':
//       return { ...state, tasks: [...state.tasks, action.payload] };
//     // Add other actions here
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   taskState: taskReducer,
// });

// const store = createStore(rootReducer);

// export default store;
