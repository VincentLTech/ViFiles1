import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import Form from './Form';
import axios from 'axios';
//63fe71a6454153b6745f3bc0
//{ list, setList, projects, setProjects, old}
/////////////////////////////////////npm i js-cookie run this in client
const Control = props => {
    const [list,setList]= useState([])
    //for the time being, this will stay commented
    useEffect(()=>{
        axios.get('https://api.github.com/users/GalacticKnight/repos')
        .then(res =>setList(res.data))
        .catch(res => console.log(res))
    },[])
    return (
        <>
        {/* 63fe71a6454153b6745f3bc0 */}
            <div>
                {(Cookies.get('userId')==="64231fc4a62c05efb9ab7739")? 
                <Form submit="true"/>
                :
                null
                }
            </div>
            <div>
                {list.map((item,idx)=>(
                    <Form submit="true" old={item}/>
                ))
                }
            </div>
        </>
    )
}

export default Control;