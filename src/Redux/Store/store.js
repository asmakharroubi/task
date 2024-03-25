
import { createStore } from "redux";
import rootReducer from "../Reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store; 



// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// export default function  configureAppStore () {
//   return configureStore({
//     reducer: rootReducer
    
    
//   });
// }
// export default store;
