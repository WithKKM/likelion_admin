import React from 'react';
import User from './User';

interface UserProps {
    contentTitle: string;
}

function Admin() {
    return (
        <>
            <User />
        </>
    );
}

export default Admin;
