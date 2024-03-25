// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import NavCom from "./Components/Navbar/NavCom";
// import AddMovie from './Components/AddMovie/AddMovie';
// import { Routes,Route } from 'react-router-dom';
import { Route, Routes, Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from "./Redux/Store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <NavCom />
      <MovieList />
      </Provider >

      {/* <Routes>
        <Route path="/add" element={<AddFilm/>}/>
      </Routes> */}

      {/* <Routes> */}
      {/* <Route exact path="/" element={<FilmList/>} />
        <Route path="/add" component={<AddFilm/>} /> */}
      {/* <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={< FilmList/>} /> */}
      {/* <Route path="/add" element={<Navigate to="/add" />} /> */}
      {/* <Route path="/add" element={<AddFilm/>} />
      
    </Routes> */}
    </div>
  );
}

export default App;
