import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MentoinformContext } from "../../Contextapi/Context";

const Boarddetail = () => {
  const { Boardinform } = useContext(MentoinformContext);
  const { id } = useParams();
  const location = useLocation();
  const { selectedKeyword } = location.state || {};

  // 선택한 키워드에 해당하는 글 내용 가져오기
  const selectedContent = Boardinform.find(
    (inform) => inform.keyword === selectedKeyword
  )?.content || [];
  console.log(selectedContent);

  // 선택한 글 내용 중에서 해당하는 글 찾기
  const selectedPost = selectedContent.find((item) => item.id === parseInt(id));


  
  console.log(selectedPost);
  return (
    <>
      <div>
        {id}
        <h2>선택한 키워드: {selectedKeyword}</h2>
      </div>
      <div>
        <h3>글 내용:</h3>
        <p>{selectedPost ? selectedPost.text : "글이 없습니다."}</p>
      </div>
    </>
  );
};

export default Boarddetail;
