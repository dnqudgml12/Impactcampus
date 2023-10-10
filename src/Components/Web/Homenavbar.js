import React from "react";

import { useState,useEffect } from "react";
import styled from "styled-components";

import { Link,Navigate } from "react-router-dom";



const Navbar= styled.div`
width: 100%;
height: 50px;
background-color: red;
color: #fff;
`
const HomeNavbar=()=>{

    return(
        <>
        <Navbar>
        Navbar
        </Navbar>
            
        </>
    )
}

export default HomeNavbar;