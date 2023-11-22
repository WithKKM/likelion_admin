import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/admin/Sidebar';
import Notice from '../components/admin/Notice';

const Admin: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('공지사항');
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <>
            <Container>
                <SideBar
                    onItemSelect={setSelectedItem}
                    onSearch={(query: string) => setSearchQuery(query)}
                />
                <Notice selectedItem={selectedItem} searchQuery={searchQuery} />
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
