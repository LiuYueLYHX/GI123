// FollowBox.js
import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard'; 
import ConnectionBox from './ConnectionBox'; // 引入新的组件
import felixalexandre from '../assets/FelixAlexandre.png';

const Box = styled.div`
    position: fixed; /* 固定定位 */
    top: ${(props) => props.y}px; /* Y轴位置 */
    right: 20px; /* 固定在右边 */
    width: 400px; /* 方块宽度 */
    height: 400px; /* 方块高度 */
    background-color: #F38760; /* 方块颜色 */
    border-radius: 10px; /* 圆角 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */
    transition: top 0.5s ease; /* 平滑过渡效果 */
    z-index: 2; /* 设置较高的z-index，使其在上面 */
    cursor: pointer; /* 鼠标样式 */
    display: flex; /* 使用flex布局 */
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中 */
    justify-content: center; /* 垂直居中 */
`;

const SmallBox = styled.div`
    position: fixed; /* 固定定位 */
    top: ${(props) => props.y + 400}px; /* 紧贴在大方块下方 */
    right: 20px; /* 固定在右边 */
    width: 400px; /* 小方块宽度 */
    height: 100px; /* 小方块高度 */
    background-color: #E94E77; /* 小方块颜色 */
    border-radius: 10px; /* 圆角 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */
    transition: top 0.5s ease; /* 平滑过渡效果 */
    z-index: 1; /* 设置较低的z-index，使其在下面 */
    display: ${(props) => (props.visible ? 'block' : 'none')}; /* 根据状态控制显示 */
`;

class FollowBox extends React.Component {
    state = { y: 0, hovered: false, connections: ['Alice', 'Bob', 'Charlie'] }; // 添加连接状态

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // 初始调用以设置正确的位置
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const navBar = document.querySelector('nav');
        const navBarHeight = navBar ? navBar.offsetHeight : 0;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const maxY = windowHeight - 500; // 小方块的高度

        let newY;

        if (scrollY < navBarHeight) {
            newY = 110; // 在导航栏上方时，保持在顶部
        } else {
            newY = Math.min(scrollY + (windowHeight - navBarHeight) / 2, maxY);
        }

        this.setState({ y: newY });
    };

    handleMouseEnter = () => {
        this.setState({ hovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ hovered: false });
    };

    render() {
        const { y, hovered, connections } = this.state; // 获取连接状态
        return (
            <>
                <Box 
                    y={y} 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave} 
                >
                    <ProfileCard 
                        imageSrc={felixalexandre} 
                        name="Pedro Oliveira" 
                        description="Estudante da Fundação Comércio Álvares Penteado" 
                    />
                </Box>
                <SmallBox 
                    y={y} 
                    visible={hovered} 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave} 
                >
                    <ConnectionBox connections={connections} /> {/* 使用新组件 */}
                </SmallBox>
            </>
        );
    }
}

export default FollowBox;
