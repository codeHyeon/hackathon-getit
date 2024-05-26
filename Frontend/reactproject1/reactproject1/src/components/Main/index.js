import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Record from "../../pages/Record";
import PostPage from "../../pages/PostPage";
import styled from "styled-components";
import UpdatePost from "../../pages/UpdatePost";
import Login from "../../pages/Login";
import Share from "../../pages/Share";
function Main() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Record />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/share" element = {<Share/>} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/update-post/:postId" element={<UpdatePost />} />
      </Routes>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
