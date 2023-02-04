import React from "react";
import styled from "styled-components";
import RoomCategoryHeader from "../components/RoomList/RoomCategoryHeader";

const RoomList = () => {
  // 더미데이터로 카테고리 정렬하기
  // let roomCategory = {
  //   roomCategoryList: [
  //     { name: "공부방", count: 11 },
  //     { name: "취미방", count: 12 },
  //     { name: "게임방", count: 13 },
  //     { name: "취업방", count: 14 },
  //     { name: "기타방", count: 15 },
  //   ],
  // };

  // const RoomCategoryHeader = styled.div`
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: flex-start;
  //   width: 80vw;
  //   height: 30vh;
  //   padding-top: 5%;
  //   background-color: #242731; ;
  // `;

  const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Form>
      {/* <RoomCategoryHeader>
        {roomCategory.roomCategoryList.map((item) => (
          <div>
            <span>{item.name}</span>
            <span>{item.count}</span>
          </div>
        ))}
      </RoomCategoryHeader> */}
      <RoomCategoryHeader />
    </Form>
  );
};

export default RoomList;
