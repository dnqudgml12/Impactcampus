import React from "react";
import { useState, useEffect,useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import search from "../../Assets/searchICON.png"


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

const Navbar = styled.div`
width:375px;
display: flex;
height: 100px;
background-color:#FFF;
flex-direction: row;
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

const Mentomore= styled.div`
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
const Chatboxtitle= styled.div`
display:  flex;
flex-direction: row;
height:50px;
`

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
const Mentoimg=styled.img`
width: 60.942px;
height: 60.942px;
border-radius: 60.942px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
flex-shrink: 0;
`

const Line= styled.div`
margin-left:7px;
width: 361px;
height: 1px;

background-color: #DAD0C0;
`
const Boarddiv=styled.div`
margin-top: 5px;
height:39px;
display: flex;
flex-direction: row;
width:375px;
`

const Textdiv=styled.div`
padding-left: 17px;
width: 250px;
height: 24px;
color: var(--black, #242424);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 22px; /* 137.5% */
letter-spacing: -0.408px;
`

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


const Policybox= styled.div`
width:375px;
height:100%;
display: flex;
flex-direction: column;
background-color: #EFECE7;
`
const GridContainer = styled.div`
margin-left: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr; //2개씩 넣고 각 넓이는 1fr이다
  /* grid-gap: 5px;//서로 20px의 차이가 있도록 */
  row-gap: 10px;
  column-gap: 3px;
  grid-auto-rows: 1fr;
`;
const Policyinbox= styled.div`
display: flex;
flex-direction: column;
width: 174px;
height: 173px;
background-color: #FFFFFF;
border-radius: 20px;
`
const PolicyTitle = styled.div`
margin-left: 14.95px;
margin-top:27.59px;
width: 68.634px;
height: 13.796px;
color: #000;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 11.44px; /* 81.714% */
letter-spacing: -0.212px;
`
const Policycontent =styled.div`
margin-left: 14.95px;
margin-top: 21.84px;

white-space: normal;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
width:70%;
color: #000;
font-family: Pretendard;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 11.44px; /* 104% */
letter-spacing: -0.212px;
`

const Morebutton= styled.div`
cursor: pointer;
margin-top: 32.84px;
width:40px;
height: 10px;
opacity: 0.8;
color: #5F5F5F;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 11.44px;
letter-spacing: -0.212px;
opacity: 0.8;
`
const Policykeywordbox = styled.div`
  width: 35px;
  height: 13px;
  margin-top: 40.83px;
  padding: 10px;
  border-radius: 33px;
  border:1px solid #FE451D;
  color: ${({ selectedpolicykeyword }) =>
    selectedpolicykeyword ? "white" : "#FE451D"};
  background-color: ${({ selectedpolicykeyword }) =>
    selectedpolicykeyword ? "#FE451D" : null};
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 11.44px; /* 114.4% */

  /* 호버 효과 추가 */
  cursor: pointer;
  &:hover {
    background-color: #fe451d;
    color: white;
  }
`;

const ReadMoreButton = styled.button`
  margin-top: 10px;
  color: #FE451D;
  cursor: pointer;
`;

const Homeweb = () => {
    const navigate = useNavigate();

    const Mentoinform= [
        {
            id:1,
            img:'/',
            name:"두유티",
            introduce:"# 요리 전문가"

        },
        {
            id:2,
            img:'/',
            name:"함티",
            introduce:"# 자취 8년차"

        },
        {
            id:3,
            img:'/',
            name:"레모나",
            introduce:"# 서연고 합격"

        },
        {
            id:4,
            img:'/',
            name:"붐카",
            introduce:"# 요리 전문가"

        },
        {
            id:5,
            img:'/',
            name:"함티",
            introduce:"# 자취 8년차"

        },
        {
            id:6,
            img:'/',
            name:"두유티",
            introduce:"# 요리 전문가"

        },
        {
            id:7,
            img:'/',
            name:"함티",
            introduce:"# 요리 전문가"

        },
        {
            id:8,
            img:'/',
            name:"도티",
            introduce:"# 유투브 전문가"

        },

    ]
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
    const [selectedKeyword, setSelectedKeyword] = useState(board[0]);
    const Boardinform=[

        {id:1,
        text:"글 제목1 입니다 글 제목1 입니다." },
        
        {id:2,
            text:"글 제목2 입니다 글 제목2 입니다."},
            
        {id:3,
            text:"글 제목3 입니다 글 제목3 입니다."},
            
        {id:4,
            text:"글 제목4 입니다 글 제목4 입니다."},

    ];

    const Policyinform= [{
        id:1,
        policyname: "정책 이름1",
        policycontent:"정책 설명입니다 정책 설명입니다\n 정책설명입니다 정책설명임둥둥둥정책 설명입니다 정책 설명입니다.",
        policykeyword:[{
            name:"교육",
        
            keyword:
                "# 교육",

        },
    {
        name:"주거",
        keyword:"# 주거",

    }],
    },
    {
        id:2,
        policyname: "정책 이름2",
        policycontent:"정책 설명입니다 정책 설명입니다\n 정책설명입니다 정책설명임둥둥둥정책 설명입니다 정책 설명입니다.",
        policykeyword:[{
            name:"교육",
        
            keyword:
                "# 교육",

        },
    {
        name:"주거",
        keyword:"# 주거",

    }],

    },
    {
        id:3,
        policyname: "정책 이름3",
        policycontent:"정책 설명입니다 정책 설명입니다\n 정책설명입니다 정책설명임둥둥둥정책 설명입니다 정책 설명입니다.",
        policykeyword:[{
            name:"교육",
        
            keyword:
                "# 교육",

        },
    {
        name:"주거",
        keyword:"# 주거",

    }],

    },
    {
        id:4,
        policyname: "정책 이름4",
        policycontent:"정책 설명입니다 정책 설명입니다\n 정책설명입니다 정책설명임둥둥둥정책 설명입니다 정책 설명입니다.",
        policykeyword:[{
            name:"교육",
        
            keyword:
                "# 교육",

        },
    {
        name:"주거",
        keyword:"# 주거",

    }],
        

    },
    {
        id:5,
        policyname: "정책 이름5",
        policycontent:"정책 설명입니다 정책 설명입니다\n 정책설명입니다 정책설명임둥둥둥정책 설명입니다 정책 설명입니다.",
        policykeyword:[{
            name:"교육",
        
            keyword:
                "# 교육",

        },
    {
        name:"주거",
        keyword:"# 주거",

    }],

    },{
        id:6,
        policyname: "정책 이름6",
        policycontent:"정책 설명입니다 정책 설명입니다\n 정책설명입니다 정책설명임둥둥둥정책 설명입니다 정책 설명입니다.",
        policykeyword:[{
            name:"교육",
        
            keyword:
                "# 주거",

        },
    {
        name:"주거",
        keyword:"# 교육",

    }],
    }
]




const [selectedPolicyKeywordIndex, setSelectedPolicyKeywordIndex] = useState(null);
const [hoveredPolicyKeywordIndex, setHoveredPolicyKeywordIndex] = useState(null);

    const handleClick = () => {
        sliderRef.current.slickNext();
      };
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
        // 다른 상태들은 그대로 두고 정책과 키워드에 대한 상태 배열 추가
  const [selectedPolicyIndex, setSelectedPolicyIndex] = useState(null);
      function SlideMentoItem({ mento }) {
        return (
          <div

            style={{
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
            
          </div>
        );
      }
    return (
        <Div>
            <Background>
                <Navbar>
                </Navbar>
                <Mentobox>
                    <Mentoboxtop>
                        <Mentoment>
                            당신을 위해 준비된 멘토들
                        </Mentoment>
                        <Mentomore>
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
    {Mentoinform.map((mento, index) => (
      <div key={index}>
        <SlideMentoItem
          mento={mento}

        />
      </div>
    ))}
</Slider>

                   

                </Mentobox>
                <Boardbox>
                    <Boardboxtitle>
                        <Boardtitle>질문게시판</Boardtitle>
                        <Boardwriting>+</Boardwriting>
                        <Boardsearching src={search}/>

                    </Boardboxtitle>
                    <Boardkeyword>

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
    {board.map((keyword, index) => (
      <div key={index}>
        <SlideItem
          keyword={keyword}
          selectedKeyword={selectedKeyword}

          // selectedEmotion={selectedEmotion}
        />
      </div>
    ))}
</Slider>
                    </Boardkeyword>
                    <Line/>
                  
                        {Boardinform.map((inform,index)=>(
                            <div key={index}
                            style={{display:"flex",
                            //background:"red",
                        flexDirection:"column"
                        }}
                            >
                        <Boarddiv>
                            <Textdiv>{inform.text}</Textdiv>
                            <Timediv>1분전</Timediv>
                            <Likediv src={'/'}/>
                            <Chatdiv src={'/'}/>


                        </Boarddiv>
                        <BoardLine/>
                        </div>

                    ))}




                   
                </Boardbox>
                <Policybox>
                    <GridContainer>
                    {Policyinform.map((policy, policyIndex) => (
              <div key={policy.id}>
                <Policyinbox>
                  <PolicyTitle>{policy.policyname}</PolicyTitle>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Policycontent>{policy.policycontent}</Policycontent>
                    <Morebutton
                      onClick={() => {
                        navigate("/chat");
                      }}
                    >
                      더 보기
                    </Morebutton>
                  </div>
                  <div
                    style={{
                      marginLeft: "14.95px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    {policy.policykeyword.map((keyword, keywordIndex) => (
                      <div key={keyword.name}>
                        <Policykeywordbox

                        // 상위 맵에서 관리되는 index값 조절 필요
                        //selectedPolicyIndex === policyIndex &&
                        // 위에서 policyIndex설정 등등
                          selectedpolicykeyword={
                            selectedPolicyIndex === policyIndex &&
                            selectedPolicyKeywordIndex === keywordIndex
                          }
                          hoverpolicykeyword={
                            hoveredPolicyKeywordIndex === keywordIndex
                          }
                          onClick={() => {
                            setSelectedPolicyIndex(policyIndex);
                            setSelectedPolicyKeywordIndex(keywordIndex);
                            setHoveredPolicyKeywordIndex(null);
                          }}
                          onMouseEnter={() =>
                            setHoveredPolicyKeywordIndex(keywordIndex)
                          }
                          onMouseLeave={() => setHoveredPolicyKeywordIndex(null)}
                        >
                          {keyword.keyword}
                        </Policykeywordbox>
                      </div>
                    ))}
                  </div>
                </Policyinbox>
              </div>
            ))}

                    </GridContainer>

                </Policybox>

                


            </Background>

        </Div>
    );
};

export default Homeweb;
