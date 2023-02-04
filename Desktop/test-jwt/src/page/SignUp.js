import { Form } from "antd";
import React from "react";
import styled from "styled-components";

const SignUp = () => {
  const Form = styled.form`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 5vh;
    width: 50vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    background-color: #242731;
    padding-left: 2%;
  `;

  return (
    <Form>
      <div>
        <label for="ID">아이디 : </label>
        <input type="text" placeholder="아이디" id="ID" />
      </div>

      <div>
        <label for="Password">비밀번호 : </label>
        <input type="password" placeholder="비밀번호" id="Password" />
      </div>
      <div>
        <label for="PasswordCheck">비밀번호 확인 : </label>
        <input type="password" placeholder="비밀번호 재 확인" id="PasswordCheck" />
      </div>
      <div>
        <label for="Name">성명 : </label>
        <input type="text" placeholder="성명" id="Name" />
      </div>
      <div>
        <label for="Mail">이메일 : </label>
        <input type="text" placeholder="Anonode@00000.com" id="Mail" />
      </div>
      <div>
        <label for="PhoneNumber">전화번호 : </label>
        <input type="text" placeholder="010-0000-0000" id="PhoneNumber" />
      </div>
      <div>
        <label for="DateOfBirth">주민번호 7자리 : </label>
        <input type="text" placeholder="991219-1******" id="DateOfBirth" maxlength="7" />
      </div>
      <div>
        <input type="checkbox" id="TermsAndConditions" />
        <label for="TermsAndConditions">
          개인정보 수집 및 이용에 동의해주세요 <br />
          수집 항목 : 이름, 휴대전화 번호, 주민등록번호 앞 7자리
        </label>
      </div>
    </Form>
  );
};

export default SignUp;
