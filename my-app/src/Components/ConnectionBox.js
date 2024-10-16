// ConnectionBox.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;
    color: white;
    text-align: center;
    display: flex; /* 使用 Flexbox 布局 */
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中 */
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: black;
    cursor: pointer;
    /* Visualizar seu perfil */
    font-family: 'Frankfurter Medium Std';
    font-style: normal;
    font-weight: 1500;
    font-size: 24px;
    line-height: 22px;


    &:hover {
        text-decoration: underline;
    }
`;

const ConnectionBox = ({ profileUrl, connectionsUrl }) => {
    const handleProfileClick = () => {
        window.open(profileUrl, '_blank');
    };

    const handleConnectionsClick = () => {
        window.open(connectionsUrl, '_blank');
    };

    return (
        <Container>
            <Button onClick={handleProfileClick}>Visualizar seu perfil</Button>
            <Button onClick={handleConnectionsClick}>Minhas Conexões</Button>
        </Container>
    );
};

export default ConnectionBox;