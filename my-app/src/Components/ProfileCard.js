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
    width: 40%; /* 图片宽度为方块宽度的50% */
    height: auto; /* 保持图片的纵横比 */
    border-radius: 10px; /* 圆角 */
    margin-bottom: 10px; /* 图片和文字之间的间距 */
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