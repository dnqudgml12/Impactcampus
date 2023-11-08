import React from "react";

import { useState,useEffect } from "react";
import styled from "styled-components";

import { Link,Navigate } from "react-router-dom";



const Navbar= styled.div`
display:flex;
flex-direction: row;
width:375px;
height: 60px;
margin: 0 auto;
  overflow-x: hidden;

`
const HomeNavbar=()=>{

    return(
        <>
        <Navbar>

        </Navbar>
            
        </>
    )
}

export default HomeNavbar;