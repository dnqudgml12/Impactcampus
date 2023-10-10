import React from "react";

import { useState,useEffect } from "react";
import styled from "styled-components";

import { Link,Navigate } from "react-router-dom";



const Home= styled.div`

background-color: blue;
display: flex;
flex-direction: column;
width: 100%;
height: 2000px;
color: white;

`

const Homeweb=()=>{

    return(
        <Home>
            Home
        
        </Home>
    )
}



export default Homeweb;