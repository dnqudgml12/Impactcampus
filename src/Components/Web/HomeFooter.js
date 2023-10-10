import React from "react";

import { useState,useEffect } from "react";
import styled from "styled-components";

import { Link,Navigate } from "react-router-dom";




const Footer= styled.div`
width: 100%;
height: 50px;
background-color: red;
color: #fff;
`
const HomeFooter=()=>{

    return(
        <>
        <Footer>
            Footer

        </Footer>
            
        </>
    )
}

export default HomeFooter;