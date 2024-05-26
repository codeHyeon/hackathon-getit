

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostPage() {
  const { postId } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts"));
  const postIndex = parseInt(postId);
  const post = posts[postIndex];

  const navigate = useNavigate();

  const goToUpdatePost = () => {
    navigate(`/update-post/${postId}`);
  };

  const deletePost = () => {
    const newPosts = posts.filter((_, index) => index !== postIndex);
    console.log(newPosts);
    localStorage.setItem("posts", JSON.stringify(newPosts));
    navigate(-1);
  };

  return (
    <Wrapper>
      <Content>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <ButtonsWrapper>
          <Button onClick={goToUpdatePost} update>
            수정
          </Button>
          <Button onClick={deletePost} delete>
            삭제
          </Button>
        </ButtonsWrapper>
      </Content>
    </Wrapper>
  );
}

export default PostPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f7fa; /* 연한 하늘색 */
  padding: 20px;
`;

const Content = styled.div`
  width: 60%;
  background-color: #f0f8ff; /* 연한 하늘색 배경 */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #2c3e50; /* 어두운 글자색 */
`;

const Description = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
  color: #34495e; /* 중간톤 글자색 */
  line-height: 1.6;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-radius: 5px; /* 사각형으로 변경 */
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.update ? "#3498db" : "#e74c3c")}; /* 파란색과 빨간색 */

  &:hover {
    background-color: ${(props) => (props.update ? "#2980b9" : "#c0392b")}; /* 어두운 파란색과 어두운 빨간색 */
  }
`;




