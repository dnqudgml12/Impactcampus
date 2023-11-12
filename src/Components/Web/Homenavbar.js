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
const Banner = styled.div`
color: #000;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 11.44px; /* 81.714% */
letter-spacing: -0.212px;
`
const HomeNavbar=()=>{

    return(
        <>
        <Navbar>
          <Logo src={logo}/>
          <Banner>게시판</Banner>
          <Banner>1대1채팅</Banner>
        </Navbar>
            
        </>
    )
}

export default HomeNavbar;