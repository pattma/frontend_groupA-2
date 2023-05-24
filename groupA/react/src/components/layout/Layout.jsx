import React from 'react';
import Navbar from '../../components/nav/Navbar';

const Layout = function({ children, token }) {
    return (
        <div>
            <Navbar token={token} />
            {children}
        </div>
    );
};

export default Layout;