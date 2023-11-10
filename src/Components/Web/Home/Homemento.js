import React from "react";
import { useState, useEffect,useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext } from "react";
import { MentoinformContext } from "../../Contextapi/Context";
const Mentoname=styled.div`
margin: 9.5px;
color: var(--black, #242424);
font-family: Pretendard;
font-size: 11.688px;
font-style: normal;
font-weight: 600;
line-height: 8.239px; /* 70.493% */
letter-spacing: -0.153px;
`
const Mentobox = styled.div`
width:375px;
display: flex;
margin-top: 12px;
background: var(--card-beige, #EFECE7);

height: 300px;
flex-direction: column;
`
const Mentoboxtop= styled.div`
display: flex;
flex-direction: row;
width:100%;
height:100px;
`
const Mentoment=styled.div`
background-color: red;
padding-left: 16px;
width: 190px;
height: 24px;
flex-shrink: 0;
color: var(--black, #242424);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 137.5% */
letter-spacing: -0.408px;
`

const Mentomore= styled(Link)`
height:20px;
background-color: red;
margin-left: 100px;
color: #BFBDB9;
text-align: right;
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 600; 
`
const Mentointroduce=styled.div`
color: var(--black, #242424);
text-align: center;
font-family: Pretendard;
font-size: 11.688px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 15.194px */
letter-spacing: -0.153px;
opacity: 0.4;
`
const Mentoimg=styled.img`
width: 60.942px;
height: 60.942px;
border-radius: 60.942px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
flex-shrink: 0;
`

const Homemento= ()=>{
    const { mentoinform } = useContext(MentoinformContext);
    const sliderRef = useRef();

    //이러면 배열을 갹체로 만들어 버림 const Mentoinform={mentoinform};
    
    function SlideMentoItem({ mento }) {
        return (
            <Link to={`mento/${mento.id}`} // 경로 앞에 슬래시(`/`)를 추가


            style={{
                border:"none",

                textDecoration:"none",
                background:"Red",
              display: "flex",
              flexDirection:"column",
              cursor: "pointer",
              paddingLeft: "15px",
              paddingBottom: "10px",
              paddingTop: "10px",
              paddingRight: "15px",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5px",  // 키워드 간의 간격을 5px로 조정
              width: "86px",
              height:"96.51px",

              marginBottom: "15px",


            }}
          >
            <Mentoimg src={mento.img}/>
            <Mentoname>
                {mento.name}
            </Mentoname>
            <Mentointroduce>
                {mento.introduce}
            </Mentointroduce>
            
          </Link>
        );
        }
        const handleClick = () => {
            sliderRef.current.slickNext();
          };


    return(
        <>


        <Mentobox>
        <Mentoboxtop>
            <Mentoment>
                당신을 위해 준비된 멘토들
            </Mentoment>
            <Mentomore to='/mento'>
                더보기
            </Mentomore>
            </Mentoboxtop>

            <Slider
style={{
width: "420px",
//paddingLeft: '20px' // 슬라이더 시작 부분에 여백 추가
}}
slidesToShow={4.2}
slidesToScroll={2}
arrows={false}
//centerMode={true} // 중앙 정렬

onClick={handleClick}
swipe={true}
swipeToSlide={true}
infinite={false}
>
{mentoinform.map((mento, index) => (
<div key={index}>
<SlideMentoItem
mento={mento}

/>
</div>
))}
</Slider>

       

    </Mentobox>
    
    </>
    )



}


export default Homemento;