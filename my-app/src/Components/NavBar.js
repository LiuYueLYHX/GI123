// NavBar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import felixalexandre from '../assets/FelixAlexandre.png';
import FollowBox from './FollowBox';
import PostContainer from './PostContainer';

const NavContainer = styled.header`
    display: grid;
    grid-template-columns: 70% 30%;
    background: linear-gradient(to right, #EEEBDE, #D3C8A8);
    width: 100%;
    height: ${({ height }) => height}px; /* 根据传入的高度调整 */
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const NavBarNav = styled.nav`
    display: grid;
    height: 60px;
    grid-template-columns: 50px 1fr;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    padding: 10px;
    margin: 20px 0 20px 40px; /* 上下20px，左40px，右0 */
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
`;

const InputField = styled.input`
    width: 1000;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 8px;
    font-size: 14px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #4A90E2;
        outline: none;
    }
`;

const Image = styled.img`
    width: 40px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const NavBar = () => {
    const [postCount, setPostCount] = useState(0); // 跟踪帖子数量

    const handlePostCountChange = (count) => {
        setPostCount(count); // 更新帖子数量
    };

    const navBarHeight = 1000 + postCount * 600; // 计算高度（基础高度加上每个帖子的高度）

    return (
        <NavContainer height={navBarHeight}> {/* 动态设置 NavBar 的高度 */}
            <NavBarNav>
                <Image src={felixalexandre} alt="Felix Alexandre" />
                <InputField type="text" id="post" name="post" placeholder="Faça uma publicação" />
            </NavBarNav>
            <FollowBox /> {/* 使用 FollowBox 组件 */}
            <PostContainer onPostCountChange={handlePostCountChange} /> {/* 使用 PostContainer 组件 */}
        </NavContainer>
    );
};

export default NavBar;