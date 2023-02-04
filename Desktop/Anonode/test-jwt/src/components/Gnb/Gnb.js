import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useModal from "../../hooks/useModal";

const Gnb = () => {
  const Navigator = styled.div`
    width: 100vw;
    height: 8vh;

    /* background-color: #242731; */

    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const LeftNav = styled.div`
    width: 7%;
    height: 100%;
    border: 1px solid #aaa9cd;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Search = styled.input`
    width: 30%;
    height: 75%;

    background-color: #242731;
    color: white;
    border: 1px solid #aaa9cd;
    border-radius: 10px;
    padding-left: 10px;

    &:hover {
      border: 1px solid #6c5dd3;
      transition: 0.5s;
    }
  `;
  const RightNav = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #aaa9cd;
  `;

  const ModalMenu = styled.div`
    display: ${(porps) => porps.display || "none"};
    border: 5px solid #aaa9cd;
    width: 50px;
  `;
  const ModalMenu2 = styled.div`
    display: ${(porps) => porps.display || "none"};
    border: 5px solid #aaa9cd;
    width: 50px;
  `;

  const [modal, setModalHook] = useModal("block");
  const [modal2, setModalHook2] = useModal("block");
  const [modal3, setModalHook3] = useModal("block");

  return (
    <div>
      <Navigator>
        <LeftNav>
          <Link to="/">Home</Link>
        </LeftNav>
        <Search type="search"></Search>
        <RightNav>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
          <Link to="/roomlist">roomlist</Link>
          <Link to="/chatroom">chatroom</Link>
          <ModalMenu display={modal}>친구목록</ModalMenu>
          <ModalMenu2 display={modal2}>내정보</ModalMenu2>
          <ModalMenu2 display={modal3}>알림(종)</ModalMenu2>
          <div>설정</div>
        </RightNav>
      </Navigator>
      {/* <button onClick={() => setModalHook()}>button</button>
      <button onClick={() => setModalHook2()}>button</button> */}
    </div>
  );
};

// 숙제
//로그인시에만 내정보, 알림, 친구목록이 보이게 하기

export default Gnb;
