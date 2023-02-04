import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import ChatRoom from "./page/ChatRoom";
import RoomList from "./page/RoomList";
import Home from "./Home";
import NotPage from "./page/NotPage";
import Gnb from "./components/Gnb/Gnb";

// 페이지 구조
// 1. 회원가입 페이지
// 2. 로그인 페이지
function App() {
  return (
    <div>
      <Gnb />
      <Routes>
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="chatroom" element={<ChatRoom />} />
        <Route path="roomlist" element={<RoomList />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotPage />} />
      </Routes>
    </div>
  );
}

export default App;
