import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import coracao from '../assets/coracao.png';
import message from '../assets/message.png';
import send from '../assets/send.png';
import avatar from '../assets/Felix.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
    top: 100px;
`;

const Card = styled.div`
    background-color: #fff;
    margin-top: 10px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 900px;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Name = styled.p`
    font-size: 20px;
    color: #333;
`;

const Text = styled.p`
    color: #333;
    font-size: 18px;
    line-height: 1.5;
`;

const Image = styled.img`
    max-width: 100%;
    border-radius: 8px;
    margin-top: 10px;
`;

const IconContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    gap: 10px;
`;

const Icon = styled.img`
    width: 30px;
    height: auto;
`;

const AddButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #45a049;
    }
`;

const DeleteButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;

    &:hover {
        background-color: darkred;
    }
`;

const PostContainer = ({ onPostCountChange }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
        onPostCountChange(storedPosts.length);
    }, [onPostCountChange]);

    const handleAddPost = () => {
        const text = prompt("compartilhe algo:");
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                if (text) {
                    setPosts((prevPosts) => {
                        const newPosts = [...prevPosts, { text, image: event.target.result }];
                        localStorage.setItem('posts', JSON.stringify(newPosts));
                        onPostCountChange(newPosts.length);
                        return newPosts;
                    });
                }
            };
            reader.readAsDataURL(file);
        };
        fileInput.click();
    };

    const handleDeletePost = (index) => {
        setPosts((prevPosts) => {
            const newPosts = prevPosts.filter((_, i) => i !== index);
            localStorage.setItem('posts', JSON.stringify(newPosts));
            onPostCountChange(newPosts.length);
            return newPosts;
        });
    };

    return (
        <Container>
            {posts.map((post, index) => (
                <Card key={index}>
                    <Header>
                        <Avatar src={avatar} alt="Felix" />
                        <Name>Felix Alexandre</Name>
                    </Header>
                    {post.image && <Image src={post.image} alt="Uploaded" />}
                    <Text>{post.text}</Text>
                    <IconContainer>
                        <Icon src={coracao} alt="Heart" />
                        <Icon src={message} alt="Message" />
                        <Icon src={send} alt="Send" />
                    </IconContainer>
                    <DeleteButton onClick={() => handleDeletePost(index)}>Delete</DeleteButton>
                </Card>
            ))}
            <AddButton onClick={handleAddPost}>adicionar</AddButton>
        </Container>
    );
};

export default PostContainer;
