import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
`;

const Image = styled.img`
    width: 40%; 
    height: auto; 
    border-radius: 10px; 
    margin-bottom: 10px; 
`;

const Name = styled.p`
font-family: 'Frankfurter Medium Std';
font-style: normal;
font-weight: 1000;
font-size: 36px;
line-height: 33px;
color: #000000;

`;

const Description = styled.p`
font-family: 'Frankfurter Medium Std';
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 25px;

color: #000000;

`;

const ProfileCard = ({ imageSrc, name, description }) => (
    <Card>
        <Image src={imageSrc} alt={name} />
        <Name>{name}</Name>
        <Description>{description}</Description>
    </Card>
);

export default ProfileCard;