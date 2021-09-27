import React from 'react';
import './index.css';

const Header = (props) => {
    const { page,
            labels } = props;

    return (
        <div className="AppHeader">
            <h1>{labels.pages[page].headerText}</h1>
        </div>
    )
}

export default Header;