

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

function UpdatePost() {
  const { postId } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts"));
  const postIndex = parseInt(postId);
  const post = posts[postIndex];
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [imageURL, setImageURL] = useState(post.imageURL); // Add state for imageURL
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Function to handle imageURL change
  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const goBack = () => {
    navigate(-1);
  };
  const updatePost = () => {
    // Update the post with new title, description, and imageURL
    const newPosts = posts.map((item, index) => {
      if (index === postIndex) {
        return { title: title, description: description, imageURL: imageURL };
      }
      return item;
    });
    localStorage.setItem("posts", JSON.stringify(newPosts));
    navigate("/");
  };

  return (
    <Wrapper>
      <TitleInput
        placeholder="여행지"
        value={title}
        onChange={handleTitleChange}
      />
      <DescriptionInput
        placeholder="메모"
        value={description}
        onChange={handleDescriptionChange}
      />
      {/* Input field for imageURL */}
      <Input
        placeholder="이미지 URL"
        value={imageURL}
        onChange={handleImageURLChange}
      />
      <ButtonsWrapper>
        <Button onClick={goBack}>취소</Button>
        <Button onClick={updatePost}>저장</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default UpdatePost;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0f7fa; /* 연한 하늘색 */
  padding: 20px;
`;

const TitleInput = styled.input`
  width: 50%;
  height: 40px;
  padding: 0 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
`;

const DescriptionInput = styled.textarea`
  width: 50%;
  height: 200px;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  padding: 0 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 16px;
`;

const ButtonsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
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
  background-color: #3498db; /* 파란색 */

  &:hover {
    background-color: #2980b9; /* 어두운 파란색 */
  }
`;
