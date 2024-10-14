import React from 'react';
import styled from 'styled-components';
import logo from '../assets/GeracaoImapacto.png';

const HeaderContainer = styled.header`
    background: linear-gradient(to right, #F25157 0%, #F38A61 100%);
    display: grid;
    width:100%;
    height: 100px;
    grid-template-columns: 70% 30%; /* 调整列比例，使 logo 和导航更加合理 */
    align-items: center; /* 垂直居中对齐 */
`;

const Nav = styled.nav`
    display: flex;
    align-items: center; /* 垂直居中对齐导航项 */
    justify-content: center; /* 将导航项右对齐 */
    
    img {
        width: 200px; /* 设置 Logo 的宽度 */
        height: auto;
        margin-left: 500px; /* Logo 和导航链接之间的间距 */
    }

    a {
        color: white;
        font-family: 'Frankfurter Medium Std';
        margin: 0 0px; /* 链接之间的间距 */
        text-decoration: none;
        font-size: 200%;
        font-weight: bold;
        margin-left: 180px; /* Logo 和导航链接之间的间距 */
        &:hover {
            text-decoration: underline; /* 添加悬停效果 */
        }



    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <img src={logo} alt="Geracao Impacto Logo"/>
                <a href="#"></a>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Ferramenta</a>
                <a href="#">Contato</a>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;