import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserList from './UserList';

const User: React.FC = () => {
    return (
        <Wrapper>
            <div className="TitleUniversity">
                <Title>회원 정보</Title>
                <UniversityName>홍익대학교</UniversityName>
            </div>

            <div style={{ display: 'flex' }}>
                <UserList />
            </div>
        </Wrapper>
    );
};
export default User;

const Wrapper = styled.div`
    width: 74.5%;
    height: 90vh;

    .TitleUniversity {
        display: flex;
        align-items: baseline;
    }
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
`;

const UniversityName = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #ff7710; // 디자인에 맞게 색상 조정

    border-radius: 42px;
    padding: 6px 12px 6px 12px;
    margin: 12px;
    background: #fff2e8;
`;

const SubTitle = styled.div`
    color: var(--Grey-700, #868c94);
    font-size: 18px;
    font-weight: 500;
`;

const Divider = styled.div`
    height: 3px;
    background-color: var(--Grey-900, #212224);
    width: 100%;
    margin-top: 26px;
    margin-bottom: 4px;
`;

const Button = styled.div`
    padding: 8px 20px 8px 14px;
    border-radius: 6px;
    background-color: #ff7710;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;

    font-size: 16px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
`;
