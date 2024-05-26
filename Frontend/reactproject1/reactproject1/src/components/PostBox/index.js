
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PostBox({ postId, title, description, imageURL }) {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <Card onClick={goToPost}>
      <ImageWrapper>
        <Image src={imageURL || '://via.placeholder.com/https250x150'} alt="Travel Destination" />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
}

export default PostBox;

const Card = styled.div`
  width: 300px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  background-color: #f0f8ff;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
  background-color: #fff;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const Description = styled.div`
  font-size: 14px;
  color: #34495e;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

