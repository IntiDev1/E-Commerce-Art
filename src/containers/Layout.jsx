import React from 'react';
import Header from '@components/Header';

const Layout = ({ Children }) => {
    return (
        <div className="Layout">
            <Header />
            {Children}
        </div>
    );
}

export default Layout;