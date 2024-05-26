

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MapComponent from '../../components/MapComponent';
import { FaSearch } from 'react-icons/fa';

function Record() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState(''); // 이미지 URL 상태 추가
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const goBack = () => {
    navigate(-1);
  };

  // const createRecord = () => {
  //   const posts = JSON.parse(localStorage.getItem('posts')) || [];
  //   const newPosts = [...posts, { title: title, description: description, imageURL: imageURL }]; // imageURL 추가
  //   localStorage.setItem('posts', JSON.stringify(newPosts));

  //   navigate('/home');
  // };
  const createRecord = () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = { title, description, imageURL }; // imageURL도 저장
    const newPosts = [...posts, newPost];
    localStorage.setItem('posts', JSON.stringify(newPosts));
  
    navigate('/home');
  };
  

  return (
    <Wrapper>
      <MapWrapper>
        <MapComponent />
      </MapWrapper>
      <MemoWrapper>
        <SearchInputWrapper>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput
            placeholder="위치 검색"
            value={title}
            onChange={handleTitleChange}
          />
        </SearchInputWrapper>
        <DescriptionInput
          placeholder="메모를 입력하세요..."
          value={description}
          onChange={handleDescriptionChange}
        />
        {/* 이미지 URL 입력 필드 */}
        <Input
          placeholder="이미지 URL을 입력하세요..."
          value={imageURL}
          onChange={handleImageURLChange}
        />
        <StyledButtonsWrapper>
          <StyledButton onClick={goBack}>취소</StyledButton>
          <StyledButton onClick={createRecord}>저장</StyledButton>
        </StyledButtonsWrapper>
      </MemoWrapper>
    </Wrapper>
  );
}

export default Record;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0f7fa;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 20px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

const SearchIcon = styled.span`
  font-size: 20px;
  color: #555;
  margin-right: 10px;
`;

const MemoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const DescriptionInput = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
 
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #2196f3;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0d47a1;
  }
`;
