import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/admin/Sidebar';
import Board from '../components/admin/Board';

const AdminBoard: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <>
            <Board selectedItem={selectedItem} searchQuery={searchQuery} />
        </>
    );
};

export default AdminBoard;
