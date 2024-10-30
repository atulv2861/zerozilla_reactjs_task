import React, { useEffect, useState } from 'react';
import Style from "../NotFound/NotFound.module.css";
import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate=useNavigate();

    const handleNavigate=(e)=>{
        e.preventDefault();
        navigate('/');
    }
    return (
        <div className={Style.Container}>
            <h1>404 </h1>
            <h2>Something went wrong...</h2>
            <button onClick={e=>handleNavigate(e)} type='button'>Go to home</button>
        </div>
    );
}

export default NotFound;
