// FollowBox.js
import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard'; 
import ConnectionBox from './ConnectionBox'; 
import felixalexandre from '../assets/FelixAlexandre.png';
import configuracao from '../assets/configuracao.png';

const Box = styled.div`
    position: fixed;
    top: ${(props) => props.y}px;
    right: 20px;
    width: 400px;
    height: 400px;
    background-color: #F38760;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: top 0.5s ease;
    z-index: 2;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SmallBox = styled.div`
    position: fixed;
    top: ${(props) => props.y + 400}px; 
    right: 20px; 
    width: 400px;
    height: 150px; 
    background-color: #16A8AB;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: top 0.5s ease;
    z-index: 1;
    display: ${(props) => (props.visible ? 'flex' : 'none')}; 
    flex-direction: column; 
    align-items: center; 
    justify-content: flex-start; 
    padding: 10px;
    box-sizing: border-box; 
`;

const ConfigImage = styled.img`
    position: absolute; 
    bottom: 10px; 
    right: 10px; 
    width: 40px; 
    height: auto; 
`;

class FollowBox extends React.Component {
    state = { y: 0, hovered: false };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const navBar = document.querySelector('nav');
        const navBarHeight = navBar ? navBar.offsetHeight : 0;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const maxY = windowHeight - 650;

        let newY;
        if (scrollY < navBarHeight) {
            newY = 110;
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
        const { y, hovered } = this.state;
        
        const profileUrl = "https://example.com/profile"; 
        const connectionsUrl = "https://example.com/connections"; 

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
                    <ConnectionBox 
                        profileUrl={profileUrl} 
                        connectionsUrl={connectionsUrl} 
                    />
                    <ConfigImage src={configuracao} alt="Configuração" />
                </SmallBox>
            </>
        );
    }
}

export default FollowBox;
