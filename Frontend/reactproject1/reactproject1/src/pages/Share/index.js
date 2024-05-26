

import React, { useState } from 'react';
import styled from 'styled-components';
import MapComponent from '../../components/MapComponent';

function Share() {
  const [location, setLocation] = useState('');
  const [memo, setMemo] = useState('');
  const [image, setImage] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    setImage(uploadedImage);
  };

  const handleShare = async () => {
    try {
      const formData = new FormData();
      formData.append('location', location);
      formData.append('memo', memo);
      formData.append('image', image);

      // 서버에 전송
      const response = await fetch('URL_TO_YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Share success!');
      
      } else {
        console.error('Failed to share.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <Wrapper>
       <Title>여행 공유하기</Title>
      <MapWrapper>
        <MapComponent />
      </MapWrapper>

      <Form>
        <Label>위치:</Label>
        <Input type="text" value={location} onChange={handleLocationChange} />
        <Label>메모</Label>
        <Textarea value={memo} onChange={handleMemoChange} />
        <Label>사진추가:</Label>
        {/* Ensure the accept attribute is set properly */}
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <ImagePreview>
            <img src={URL.createObjectURL(image)} alt="Uploaded" />
          </ImagePreview>
        )}
        <ShareButton onClick={handleShare}>Share</ShareButton>
      </Form>
    </Wrapper>
  );
}

export default Share;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e0f7fa; /* 연한 하늘색 */
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #007acc; /* 파란색 */
`;
const MapWrapper = styled.div`
  width: 80%;
  height: 400px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 80%;
  max-width: 600px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  margin-bottom: 10px;
`;

const ImagePreview = styled.div`
  margin-bottom: 10px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ShareButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3; /* 진한 파란색 */
  }
`;
