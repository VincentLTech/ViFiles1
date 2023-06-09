// import './App.css';
// // import React, {useState} from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './components/entry/Home';
// import Nav from './components/shared/Nav';
// import LoginForm from './components/users/Login';
// import RegisterForm from './components/users/Register';
// import Projects from './components/project/Projects';
// import Control from './components/project/Control';
// // import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//         <Nav/>
//         <main>
//         <BrowserRouter>
//           <Routes>
            
//             <Route exact path='/' element={<Home/>}/>
//             <Route exact path='/projects' element={<Projects/>}/>
//             <Route exact path='/control' element={<Control/>}/>
//             <Route exact path='/login' element={<LoginForm/>}/>
//             <Route exact path='/register' element={<RegisterForm/>}/>
//           </Routes>
//         </BrowserRouter>
//         </main>
//     </div>
//   )
// }

// export default App;

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import UserPage from './pages/UserPage';
import FormPage from './pages/FormPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/github' element={<ProjectPage/>}/>
        <Route path='/UserPage' element={<UserPage/>}/>
        <Route path='/FormPage' element={<FormPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;