import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;
    color: white; /* 文本颜色 */
    text-align: center; /* 文本居中 */
`;

const ConnectionList = styled.ul`
    list-style: none; /* 移除默认列表样式 */
    padding: 0; /* 移除内边距 */
    margin: 0; /* 移除外边距 */
`;

const ConnectionItem = styled.li`
    margin: 5px 0; /* 每个项目的上下间距 */
`;

const ConnectionBox = ({ connections }) => {
    return (
        <Container>
            <h4>Minhas Conexões</h4>
            <ConnectionList>
                {connections.map((connection, index) => (
                    <ConnectionItem key={index}>{connection}</ConnectionItem>
                ))}
            </ConnectionList>
        </Container>
    );
};

export default ConnectionBox;