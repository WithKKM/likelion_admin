<<<<<<< HEAD
import { useState } from 'react';
import Board from '../components/admin/Board';

const AdminBoard = () => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    return <Board selectedItem={selectedItem} searchQuery={searchQuery} />;
};

export default AdminBoard;
=======
import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/admin/Sidebar';
import Notice from '../components/admin/board/Notice';

const AdminBoard: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('전체게시글');
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

export default AdminBoard;

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
>>>>>>> parent of 4392543 (모집알림 구현)
