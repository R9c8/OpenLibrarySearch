import React from 'react';

import './styles/index.css';

import { SearchInput } from "../../atoms/search-input";

export const Search = () => (
    <div className="search-container">
        <SearchInput />
        <SearchBox />
    </div>
)

const SearchBox = () => (
    <div className="search-box">
        <SearchResult />
        <SearchResult />
        <SearchResult />
    </div>
)

const SearchResult = () => (
    <div>
        <div className="search-result">
            <div className="cover-container">
                <img src="/9255566-M.jpg" className="cover-img" />
            </div>
            <div className="book-info">
                <div className="book-name">The Lord of the Rings</div>
                <div className="book-author">J.R.R. Tolkien</div>
            </div>
        </div>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e5e5'}} />
    </div>
);
