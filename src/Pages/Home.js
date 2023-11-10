import React from "react";
import styled from "styled-components";
import Homemento from "../Components/Web/Home/Homemento";
import HomeQuestionboard from "../Components/Web/Home/HomeQuestionboard";
import HomeshinchungPolicy from "../Components/Web/Home/HomeshinchungPolicy";
import Homepolicyboard from "../Components/Web/Home/HomePolicyBoard";



const Div = styled.div`
  display: flex;
  margin: 0 auto; 
  //padding:0.5rem calc((100vw - 1000px)/2) ;
`;

const Background= styled.div`
display:flex;
flex-direction: column;
justify-content: start;
width:375px;
height: 1245px;
margin: 0 auto;
overflow-x: hidden;
background-color: #fff;
`


const Home=()=>{


    return(
        <>
        <Div>
            <Background>
                <Homemento/>
                <HomeQuestionboard/>
                <Homepolicyboard/>
                <HomeshinchungPolicy/>
                
            </Background>
        </Div>
    
        
        </>
    )
}

export default Home;