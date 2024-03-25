// import React,{ useState } from 'react'
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import AddFilm from '../AddFilm/AddFilm';
// import {Link} from "react-router-dom"
// import './NavCom.css'


// const NavCom = () => {
//   const [show,setShow]= useState (false)

//     const handleClose = () => setShow(false)
//     const handleShow = () => setShow(true)


   

//   return (
//     <div>
       
       
//        <div> 
//       <nav>
//         <ul>
//           <h1 style={{marginLeft:"20px"}}>BookList</h1>
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//          <AddFilm/>
//           </li>
         
//         </ul>
//       </nav>
//     </div>



  


//     </div> 
//   );
// }

// export default NavCom

import React from "react";
import AddMovie from "../AddMovie/AddMovie" 

import "./NavCom.css";

const NavCom = () => {
  return (
    <div>
      <nav>
        <ul>
          <h1 style={{ marginLeft: "20px" }}>Movie List</h1>
          <li>
            <a>Home</a>
          </li>
          <li>
            <AddMovie />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavCom;

