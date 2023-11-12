import React from "react";

import { useState,useEffect } from "react";
import styled from "styled-components";
import logo from "../../Assets/serv.png"
import { Link,Navigate } from "react-router-dom";



const Navbar= styled.nav`
display:flex;
flex-direction: row;
width:375px;
height: 60px;
margin: 0 auto;
  overflow-x: hidden;
  background-color: aqua;
  align-items:center;
`
const Logo = styled.img`
margin-left: 16px;
height: 25%;
width: 25%;
`
const HomeNavbar=()=>{

    return(
        <>
        <Navbar>
          <Logo src={logo}/>
          <div>게시판</div>
          <div>1대1채팅</div>
        </Navbar>
            
        </>
    )
}

export default HomeNavbar;