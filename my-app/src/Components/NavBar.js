// NavBar.js
import React from 'react';
import styled from 'styled-components';
import felixalexandre from '../assets/FelixAlexandre.png'; // 确保此路径正确
import FollowBox from './FollowBox'; // 引入 FollowBox 组件

// Styled components
const NavContainer = styled.header`
    display: grid;
    grid-template-columns: 70% 30%;
    background: linear-gradient(to right, #EEEBDE, #D3C8A8); /* 渐变背景 */
    width: 100%;
    height: 1000vh; /* 允许页面滚动的高度 */
    position: relative; /* 启用子元素的定位 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 阴影效果 */
`;

const NavBarNav = styled.nav`
    display: grid;
    height:40px;
    grid-template-columns: 50px 1fr; /* 图片和输入布局 */
    width: 1100px;
    max-width: 1200px;
    align-items: center; /* 垂直居中对齐 */
    padding: 10px; /* 增加内边距 */
    margin: 20px auto; /* 水平居中，顶部和底部的边距更小 */
    margin-left: 60px; /* 向右移动 NavBarNav */
    font-size: 16px; /* 字体稍小 */
    border-radius: 10px; 
    border: 1px solid #ffffff;  
    background-color: rgba(255, 255, 255, 0.9); /* 半透明背景 */
    backdrop-filter: blur(10px); /* 背景模糊效果 */
`;

const InputField = styled.input`
    width: 1000px; /* 输入框占大部分宽度 */
    border: 1px solid #ccc; /* 边框颜色 */
    border-radius: 10px; /* 边框圆角 */
    padding: 8px; /* 内边距 */
    font-size: 14px; /* 字体大小 */
    transition: border-color 0.3s; /* 平滑过渡效果 */

    &:focus {
        border-color: #4A90E2; /* 聚焦时的边框颜色 */
        outline: none; /* 去掉默认的聚焦轮廓 */
    }
`;

const Image = styled.img`
    width: 40px; /* 图片固定大小，稍小 */
    height: auto; /* 保持纵横比 */
    border-radius: 50%; /* 圆形图片 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 图片阴影 */
`;

class NavBar extends React.Component {
    render() {
        return (
            <NavContainer>
                <NavBarNav>
                    <Image src={felixalexandre} alt="Felix Alexandre" />
                    <InputField type="text" id="post" name="post" placeholder="Faça uma publicação" />
                </NavBarNav>
                <FollowBox /> {/* 使用 FollowBox 组件 */}
            </NavContainer>
        );
    }
}

export default NavBar;