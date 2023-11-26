import { useState } from 'react';
import Board from '../components/admin/Board';

const AdminBoard = () => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    return <Board selectedItem={selectedItem} searchQuery={searchQuery} />;
};

export default AdminBoard;
