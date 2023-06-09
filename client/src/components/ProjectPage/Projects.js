// import React, { useState,useEffect } from 'react'
// import Cookies from 'js-cookie';
// import Form from './Form';
// import axios from 'axios';
// //{ list, setList, projects, setProjects, old}
// /////////////////////////////////////npm i js-cookie run this in client
// const Projects = props => {
//     const [list,setList]= useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/projects')
//         .then(res =>setList(res.data))
//         .catch(res => console.log(res))
//     },[])

//     const handleDelete = item => {
//         // e.preventDefault()
//         axios.delete(`http://localhost:8000/api/project/${item._id}`)
//             .then( res => {
//                 console.log("success")
//                 setList(list.filter(me=>(me._id !== item._id)))//this just update your state so that you dont have to refresh and it loads in realtime.

//         } )
//             .catch( res => console.log(res.data.errors))
//     }

//     const addingLikes = item =>{
//         var temp= (Cookies.get('userId')) ? Cookies.get('userId'): "000000"
//         console.log(temp)
//         axios.put(`http://localhost:8000/api/project/${item._id}/${temp}`)

//         .then( res => {
//             var dataNew=list.map(x=>  (x._id === item._id) ?{...x,likes: [...x.likes,temp]}: x );
//             //it maps the the list, 
//             //we checks to see if x._id === item._id matches the id in x.
//             //if it does it will: return the full object. It will return the id of the person that is logged in.
//             //if not it will return the object 

//             setList(dataNew)
//             console.log(res.data.updatedProject)
//             // setList(list.filter(me=>(me._id !== id._id)))//this just update your state so that you dont have to refresh and it loads in realtime.

//         } )
//         .catch(res => console.log(res))
//     }

//     return (
//         <>
//             <div>

//                 {(Cookies.get('userId')==="64231fc4a62c05efb9ab7739")? 
                
//                 <div>
//                     <div>
//                         <h2 class=".text-dark" className='siteHeadings'>Python</h2>
//                         {list.filter(e=>e.language.toLowerCase()==="python").map((item,idx)=>(
//                             <div>
//                                 <Form old={item}/>
//                                 <button onClick={()=>handleDelete(item)}>Delete</button>
                                
//                             </div>
//                         ))}
//                     </div>
//                     <div>
//                         <h2 class=".text-dark" className='siteHeadings'>JavaScript</h2>
//                         {list.filter(e=>e.language.toLowerCase()==="javascript").map((item,idx)=>(
//                             <div>
//                                 <Form old={item}/>
//                                 <button onClick={()=>handleDelete(item)}>Delete</button>
//                             </div>
//                         ))}
//                     </div>
//                     <div>
//                         <h2 class=".text-dark" className='siteHeadings'>Java</h2>
//                         {list.filter(e=>e.language.toLowerCase()==="java").map((item,idx)=>(
//                             <div>
//                                 <Form old={item}/>
//                                 <button onClick={()=>handleDelete(item)}>Delete</button>
//                             </div>
//                         ))}
//                     </div>
//                     <div>
//                         <h2 class=".text-dark" className='siteHeadings'>Other</h2>
//                         {list.filter(e=>!["python","java","javascript"].includes(e.language.toLowerCase())).map((item,idx)=>(
//                             <div>
//                                 <Form old={item}/>
//                                 <button onClick={()=>handleDelete(item)}>Delete</button>

//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             :
//                 <div>
//                     <div>
//                         <h2>Python</h2>
//                         {list.filter(e=>e.language.toLowerCase()==="python").map((item,idx)=>(
//                             <div>
//                                 {item.name}
//                                 {/* {item.likes.map((x) => (<p>{x}</p>))} */}
//                                 {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button> */}
//                                 <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button>
//                                 <button className='fancy-btn'>
//                                     <a href={item.gitUrl} target="_blank" rel="noreferrer">
//                                         GitHub
//                                     </a>
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                     <div>
//                         <h2>JavaScript</h2>
//                         {list.filter(e=>e.language.toLowerCase()==="javascript").map((item,idx)=>(
//                             <div>
//                                 {item.name}
//                                 {/* {item.likes.map((x) => (<p>{x}</p>))} */}
//                                 {/* {item.likes} */}
//                                 <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button>
//                                 <button className='fancy-btn'>
//                                     <a href={item.gitUrl} target="_blank" rel="noreferrer">
//                                         GitHub
//                                     </a>
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                     <div>
//                         <h2>Java</h2>
//                         {list.filter(e=>e.language.toLowerCase()==="java").map((item,idx)=>(
//                             <div>
//                                 {item.name}
//                                 {/* {item.likes} */}
//                                 {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button> */}
//                                 <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button>
//                                 <button className='fancy-btn'>
//                                     <a href={item.gitUrl} target="_blank" rel="noreferrer">
//                                         GitHub
//                                     </a>
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                     <div>
//                         <h2>Other</h2>
//                         {list.filter(e=>!["python","java","javascript"].includes(e.language.toLowerCase())).map((item,idx)=>(
//                             <div>
//                                 {item.name}
//                                 {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button> */}
//                                 <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button>
//                                 <button className='fancy-btn'>
//                                     <a href={item.gitUrl} target="_blank" rel="noreferrer">
//                                         GitHub
//                                     </a>
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             }
//             </div>
//         </>
//     )
// }

// export default Projects

{/* {list.map((item,idx)=>(
                    <div key ={idx}>
                        {item.name}
                        {item.name}
                    </div>
                ))} */}