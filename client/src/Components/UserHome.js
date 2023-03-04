import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
    const navigate = useNavigate();




    const handleClick = ()=>{
        console.log("Here\n");
        navigate('/response');

        //   getResponse();
    }
    
  return (
    <>
        <h1>
            UserHome
        </h1>

        <button onClick={handleClick}>GetResponse</button>


    </>
    
  )
}

export default UserHome