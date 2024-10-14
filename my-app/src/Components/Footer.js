import React from 'react';
import styled from 'styled-components';
import logo from '../assets/GeracaoImapacto.png';

const FooterContainer = styled.header`
    background: linear-gradient(to right, #F25157 0%, #F38A61 100%);
    display: grid;
        width:100%;
        height: 100px;
    align-items: center; /* 垂直居中对齐 */
`;

const FooterNav = styled.nav`
    display: flex;
    align-items: center; /* 垂直居中对齐导航项 */
    justify-content: center; /* 将导航项右对齐 */
    

    a {
        color: white;
        font-family: 'Frankfurter Medium Std';
        margin: 0 0px; /* 链接之间的间距 */
        text-decoration: none;
        font-size: 200%;
        font-weight: bold;
        
        &:hover {
            text-decoration: underline; /* 添加悬停效果 */
        }



    }
`;

const Header = () => {
    return (
        <FooterContainer>
            <FooterNav>
                <a href="#">© 2024 Geração Impacto - Todos os direitos reservados.</a>
            </FooterNav>
        </FooterContainer>
    );
};

export default Header;