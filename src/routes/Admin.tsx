import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/admin/Sidebar';
import User from '../components/admin/User';

const Admin: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('회원정보');
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <>
            <Container>
                <SideBar
                    onItemSelect={setSelectedItem}
                    onSearch={(query: string) => setSearchQuery(query)}
                />
                <User selectedItem={selectedItem} searchQuery={searchQuery} />
            </Container>
        </>
    );
};

export default Admin;

const Container = styled.div`
    max-width: 1280px;
    padding: 0 40px;
    min-width: 768px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;
