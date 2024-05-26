
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      navigate('/home');
    } else {
      alert('사용자 이름 또는 비밀번호가 잘못되었습니다.');
    }
  };

  const handleRegister = () => {
    const newUser = { username, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      alert('이미 존재하는 사용자 이름입니다.');
      return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/home');
  };

  return (
    <Wrapper>
      <LoginForm>
        <Title>로그인</Title>
        <Label>아이디</Label>
        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <Label>비밀번호</Label>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>로그인</Button>
        <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
      </LoginForm>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`

  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #e0f7fa; /* 연한 하늘색 */
  padding-top: 60px; /* Topbar 아래에 공간을 추가합니다. */
  font-family: 'Arial', sans-serif;
`;

const LoginForm = styled.div`
  width: 350px;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #007acc;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
  font-size: 14px;
  color: #333333;
  text-align: left;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f99;
  }
`;

const RegisterButton = styled(Button)`
  background-color: #00c853;

  &:hover {
    background-color: #009624;
  }
`;
