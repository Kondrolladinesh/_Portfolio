import React from 'react'
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height : 3rem;
    max-width : 100%;
    background-color: #D3D3D3;
    margin-top:0.3rem;
`;
const NavBar = () => {
  return (
    <div>
        <Header>
            <h1>Profolio</h1>
        </Header>
    </div>
  )
}

export default NavBar
