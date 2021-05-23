import React from 'react';

import './styles/index.css';

import { Logo } from './atoms/logo';
import { Search } from './organisms/search';

export const MainPage = () => (
    <div className="container">
        <nav className="navbar">
            <div className="logo-block">
                <Logo />
            </div>
            <Search />
            <div className="logo-block" />
        </nav>
    </div>
);