import React from 'react';

import './styles/index.css';

import { Logo } from './atoms/logo';
import { SearchInput } from './atoms/search-input';

export const MainPage = () => (
    <div className="container">
        <nav className="navbar">
            <div className="logo-block">
                <Logo />
            </div>
            <SearchInput />
            <div className="logo-block" />
        </nav>
    </div>
);