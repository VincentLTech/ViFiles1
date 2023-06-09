// import React, { useState } from 'react'
// import Cookies from 'js-cookie';
// import axios from 'axios';

// const Nav = props => {
//     const logout = () => {
//     axios.post('http://localhost:8000/api/logout', {} , {withCredentials:true})
//         .then((res) => {
//             console.log(res);
//             window.localStorage.removeItem('uuid')
//             window.location.href = "/"
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }
//     return (
//         <nav>
//             <ul class="nav">
//                 <h1 style={{font:'Monospace'}} className="">Vifile</h1>
//                 <li class="nav-item">
//                     <a class="nav-link active" href="/">
//                     Home
//                     </a>
//                 </li>
//                 <li class="nav-item">   
//                     {(Cookies.get('userId'))? 
//                         <a class="nav-link active" href='/projects'>
//                             Projects
//                         </a>
//                         :
//                         null
//                     }
//                 </li>
//                 <li class="nav-item">
//                     {(Cookies.get('userId')==="64231fc4a62c05efb9ab7739")? 
//                         <a class="nav-link active" href='/control'>
//                             Control
//                         </a>
//                         : 
//                         null
//                     }
//                 </li>
//                 <li class="nav-item">
//                     {(Cookies.get('userId'))? 
//                         <a class="nav-link active" onClick={logout}href='/login'>
//                             Logout
//                         </a>
//                         :
//                         <a class="nav-link active" href='/login'>
//                             Login
//                         </a>
//                     }
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Nav