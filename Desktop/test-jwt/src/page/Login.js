import { Form } from "antd";
import React from "react";

const Login = () => {
  return (
    <form>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
    </form>
  );
};

export default Login;
