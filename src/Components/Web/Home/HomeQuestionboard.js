import React from "react";
import { useState, useEffect,useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import search from "../../../Assets/searchICON.png";
import { useContext } from "react";
import { MentoinformContext } from "../../Contextapi/Context";

const Boardbox= styled.div`
display:  flex;
flex-direction: column;
height:281px;
background: var(--card-beige, #EFECE7);
margin-top: 10px;
`
const Boardboxtitle= styled.div`
display: flex;
flex-direction: row;
margin-top: 13px;

`
const Boardsearching= styled.img`
width:17px;
height:18px;
stroke-width: 2px;
stroke: #454545;
opacity: 0.6;
`
const Boardwriting= styled.div`
padding-left: 110px;
width: 24px;
height: 20px;
flex-shrink: 0;
`
const Boardtitle= styled.div`
padding-left: 16px;
width: 200px;
height: 24px;
color: #000;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 22px; /* 122.222% */
letter-spacing: -0.408px;
`
const Boardkeyword = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  overflow-x: hidden;
  gap: 5px; // 슬릭 시작 부분에 5px 간격 추가
`;


const Line= styled.div`
margin-left:7px;
width: 361px;
height: 1px;

background-color: #DAD0C0;
`
const Boarddiv=styled(Link)`
text-decoration: none;
margin-top: 5px;
height:39px;
display: flex;
flex-direction: row;
width:375px;
`

const Textdiv = styled.div`
  padding-left: 17px;
  width: 250px;
  height: 24px;
  color: var(--black, #242424);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  overflow: hidden;           // 오버플로우된 텍스트를 숨깁니다.
  text-overflow: ellipsis;    // 오버플로우된 텍스트를 '...'로 표시합니다.
  white-space: nowrap;        // 텍스트를 한 줄로 표시합니다.
`;
// 250px초과시 ....

const Timediv=styled.div`
padding-top: 4px;
width:46px;
height:15px;
color: #A1A1A1;
text-align: center;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 11.44px; /* 114.4% */
`

const Likediv=styled.img`
padding-top: 4px;
background-color: red;
width: 13px;
height: 11px;
flex-shrink: 0;
`

const Chatdiv=styled.img`
padding-top: 4px;
background-color: red;
margin-left: 7px;
width: 11px;
height: 11.017px;
flex-shrink: 0;
`

const BoardLine= styled.div`
margin-left:7px;
width: 361px;
height: 0.5px;
flex-shrink: 0;
stroke-width: 0.5px;
background-color: #DAD0C0;

margin-top: -10px;
`

const HomeQuestionboard = ()=>{
    const {Boardinform} = useContext(MentoinformContext);
    const board=[
        "#소통",
        "청년 자립",
        "함께 해요",
        "사랑",
        "평화",
        "함께 추천"

    ];

    const sliderRef = useRef();
    const [hoveredKeyword, setHoveredKeyword] = useState(null);


  

    function SlideItem({ keyword,selectedKeyword }) {
        return (
          <button
          onClick={() => setSelectedKeyword(keyword)}
          onMouseEnter={() => setHoveredKeyword(keyword)}
          onMouseLeave={() => setHoveredKeyword(null)}
            style={{
              display: "inline-flex",
              cursor: "pointer",
              paddingLeft: "15px",
              paddingBottom: "10px",
              paddingTop: "10px",
              paddingRight: "15px",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5px",  // 키워드 간의 간격을 5px로 조정
              width: "86px",
              marginBottom: "15px",
              borderRadius: "24px",
              border: "1.5px solid #FFA18C",
              fontSize: "11px",
              color: hoveredKeyword === keyword ?
              "white":
              selectedKeyword === keyword?
              "white":"#FE451D",

              backgroundColor: hoveredKeyword === keyword ?
              "#FE451D":
              selectedKeyword === keyword?
              "#FE451D":null 


            }}
          >
            {keyword}
          </button>
        );
      }
    const handleClick = () => {
        sliderRef.current.slickNext();
      };

    const [selectedKeyword, setSelectedKeyword] = useState(Boardinform[0].keyword);

    useEffect((

        )=>{
            setSelectedKeyword(Boardinform[0].keyword)
        },[])

    // 선택된 keyword에 해당하는 content 배열을 찾기
    const selectedContent = Boardinform.find(inform => inform.keyword === selectedKeyword)?.content || []
      console.log(selectedKeyword);
    return(
        <>
                        <Boardbox>
                    <Boardboxtitle>
                        <Boardtitle>질문게시판</Boardtitle>
                        <Boardwriting>+</Boardwriting>
                        <Boardsearching src={search}/>

                    </Boardboxtitle>
                    <Boardkeyword>

                    <Slider
    style={{
      width: "100%",
      //paddingLeft: '20px' // 슬라이더 시작 부분에 여백 추가
    }}
    slidesToShow={4}
    slidesToScroll={2}
    arrows={false}
    //centerMode={true} // 중앙 정렬

    onClick={handleClick}
    swipe={true}
    swipeToSlide={true}
    infinite={false}
  >
            {Boardinform.map((inform, index) => (
                            <div key={index}>
                                <SlideItem
                                    keyword={inform.keyword}
                                    selectedKeyword={selectedKeyword}
                                    onClick={() => setSelectedKeyword(inform.keyword)}
                                />
                            </div>
                        ))}
</Slider>
                    </Boardkeyword>
                    <Line/>
                  
                    {selectedContent.map((item, index) => (
                    <div key={index}>
                        <Boarddiv to ={`board/${item.id}`}

                        state={{
                            selectedKeyword: selectedKeyword
                         } }
                    
                 >
                            <Textdiv>{item.text}</Textdiv>
                            <Timediv>1분전</Timediv>
                            <Likediv src={'/'}/>
                            <Chatdiv src={'/'}/>
                        </Boarddiv>
                        <BoardLine/>
                    </div>
                ))}





                   
                </Boardbox>
        
        </>
    )

}

export default HomeQuestionboard;