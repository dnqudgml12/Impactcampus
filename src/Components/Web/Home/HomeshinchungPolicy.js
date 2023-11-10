import React from "react";
import { useState, useEffect,useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import search from "../../../Assets/searchICON.png"




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
const HomeshinchungPolicy = () =>{

    const navigate = useNavigate();

   

  
    const [hoveredKeyword, setHoveredKeyword] = useState(null);


    const [selectedPolicyKeywordIndex, setSelectedPolicyKeywordIndex] = useState(null);
    const [hoveredPolicyKeywordIndex, setHoveredPolicyKeywordIndex] = useState(null);
    
    
            // 다른 상태들은 그대로 두고 정책과 키워드에 대한 상태 배열 추가
      const [selectedPolicyIndex, setSelectedPolicyIndex] = useState(null);


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




   
    return(<>
    

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
    </>)
}


export default HomeshinchungPolicy;