import React, { createContext, useState } from 'react';

// Context 생성
const MentoinformContext = createContext();

const MentoinformProvider = ({ children }) => {
  const [mentoinform, setMentoinform] = useState([
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

]);

const [Boardinform, setBoardinform] =useState(
    [

        {keyword:"#소통",

      content: [  {id:1,
            text:"글 #소통1 입니다 글 제목1 입니다." },
            
            {id:2,
                text:"글#소통2 입니다 글 제목2 입니다."},
                
            {id:3,
                text:"글#소통3 입니다 글 제목3 입니다."},
                
            {id:4,
                text:"글 #소통4 입니다 글 제목4 입니다."},
            ]
    },

    {keyword:"청년 자립",

    content: [  {id:1,
          text:"글 청년 자립 입니다 글 제목1 입니다." },
          
          {id:2,
              text:"글 청년 자립 입니다 글 제목2 입니다."},
              
          {id:3,
              text:"글 청년 자립 입니다 글 제목3 입니다."},
              
          {id:4,
              text:"글 청년 자립 입니다 글 제목4 입니다."},
          ]
  },
  {keyword:"함께 해요",

  content: [  {id:1,
        text:"글 함께 해요 입니다 글 제목1 입니다." },
        
        {id:2,
            text:"글 함께 해요 입니다 글 제목2 입니다."},
            
        {id:3,
            text:"글 함께 해요 입니다 글 제목3 입니다."},
            
        {id:4,
            text:"글 함께 해요 입니다 글 제목4 입니다."},
        ]
},
{keyword:"사랑",

content: [  {id:1,
      text:"글 사랑 입니다 글 제목1 입니다." },
      
      {id:2,
          text:"글 사랑 입니다 글 제목2 입니다."},
          
      {id:3,
          text:"글 사랑 입니다 글 제목3 입니다."},
          
      {id:4,
          text:"글 사랑 입니다 글 제목4 입니다."},
      ]
},
{keyword:"평화",

content: [  {id:1,
      text:"글 평화 입니다 글 제목1 입니다." },
      
      {id:2,
          text:"글 평화 입니다 글 제목2 입니다."},
          
      {id:3,
          text:"글 평화 입니다 글 제목3 입니다."},
          
      {id:4,
          text:"글 평화 입니다 글 제목4 입니다."},
      ]
},
{keyword:"함께 추천",

content: [  {id:1,
      text:"글 함께 추천 입니다 글 제목1 입니다." },
      
      {id:2,
          text:"글 함께 추천 입니다 글 제목2 입니다."},
          
      {id:3,
          text:"글 함께 추천 입니다 글 제목3 입니다."},
          
      {id:4,
          text:"글 함께 추천 입니다 글 제목4 입니다."},
      ]
}





    ])



  const [anotherState, setAnotherState] = useState(/* 초기 상태 */);

  // Context에 전달할 값
  const contextValue = {
    mentoinform,
    setMentoinform,
    anotherState,
    setAnotherState,
    Boardinform,
    setBoardinform
  };

  return (
    <MentoinformContext.Provider value={contextValue}>
      {children}
    </MentoinformContext.Provider>
  );
};

export { MentoinformContext, MentoinformProvider };
