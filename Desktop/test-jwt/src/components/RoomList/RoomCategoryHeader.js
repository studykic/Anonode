import React from "react";
import styled from "styled-components";

const RoomCategoryHeader = () => {
  // 더미데이터로 카테고리 정렬하기
  let roomCategory = {
    roomCategoryList: [
      { name: "공부방", count: 11, categoryName: "study" },
      { name: "취미방", count: 12, categoryName: "hobby" },
      { name: "게임방", count: 13, categoryName: "game" },
      { name: "취업방", count: 14, categoryName: "job" },
      { name: "기타방", count: 15, categoryName: "etc" },
    ],
  };

  const RoomCategoryHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 80vw;
    height: 30vh;
    padding-top: 5%;
    background-color: #242731;
  `;

  return (
    <RoomCategoryHeader>
      {roomCategory.roomCategoryList.map((item) => (
        <div className="categoryBtn">
          <span>{item.name}</span>
          <span>{item.count}</span>
        </div>
      ))}
    </RoomCategoryHeader>
  );
};

export default RoomCategoryHeader;

// 숙제
//1.특정 초마다 한번씩 카운트를 서버로부터 가져와서 이 컴포넌트만 리렌더링 시키기
//2. categoryBtn을 클릭하여 방목록을 분류하여 가져오기 ( 이때 방목록은 15개씩만 페이징 하여 가져오기)
//3.
