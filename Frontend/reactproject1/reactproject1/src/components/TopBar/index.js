
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MapComponent from '../MapComponent'; 
import { FaPlane } from 'react-icons/fa'; 

function TopBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    navigate("/home");
  };

  const goToRecord = () => {
    navigate("/");
  };

  const goToShare = () => {
    navigate("/share");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <TopSection>
       
        <blogIcon onClick={goToLogin}>
          <FaPlane />
        </blogIcon>
        <BlogName>TravelStar</BlogName>
        <MenuContainer>
          <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
          <Menu menuOpen={menuOpen}>
            <MenuItem onClick={goToHome}>Home</MenuItem>
            <MenuItem onClick={goToRecord}>기록</MenuItem>
            <MenuItem onClick={goToShare}>공유</MenuItem>
          </Menu>
        </MenuContainer>
      </TopSection>
      <MapSection>
        <MapComponent /> {/* Add MapComponent here */}
      </MapSection>
    </Wrapper>
  );
}

export default TopBar;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0f7fa; /* 연한 하늘색 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: #007acc; /* 파란색 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const blogIcon = styled.span`
  font-size: 40px; 
  color: #2196f3; 
  margin-right: 10px;
  margin-left: 20px;
`;

const BlogName = styled.h1`
  font-size: 50px; /* 폰트 사이즈 수정 */
  color: #2196f3; /* 파란색 */
  font-family: 'Pacifico', cursive; /* 예쁜 폰트로 변경 */
`;

const MenuContainer = styled.div`
  position: relative;
`;

const MenuIcon = styled.div`
  font-size: 35px;
  color: white;
  cursor: pointer;
  margin-right: 28px;
  margin-bottom: 12px;
`;

const Menu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #007acc; /* 파란색 */
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: ${({ menuOpen }) => (menuOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const MenuItem = styled.div`
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;

const MapSection = styled.div`
  width: 100%;
  height: 400px; /* Adjust height as needed */
`;
