import React, { Component} from 'react';

import Down from "./down.svg";

import './styles/index.css';

import { SearchInput } from "../../atoms/search-input";

export const Search = () => (
    <div className="search-container">
        <SearchInput />
        <SearchBox />
        <SearchLimitationButton />
        <SearchLimitationSelect />
    </div>
)

const SearchLimitationButton = () => {
    const limitation = 'Author';
    if (limitation === 'Author') {
        return (
            <div className="search-limitation-button">
                <div>Author</div>
                <div><img src={Down} /></div>
            </div>
        )
    } else if (limitation === 'Title') {
        return (
            <div className="search-limitation-button">
                <div>Title</div>
                <div><img src={Down} /></div>
            </div>
        )        
    } else if (limitation === 'All') {
        return (
            <div className="search-limitation-button">
                <div>All</div>
                <div><img src={Down} /></div>
            </div>
        )        
    }
};

const SearchLimitationSelect = () => (
    <div className="search-limitation-select">
        <SearchLimitationSelectChoise value="All" />
        <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e5e5'}} />
        <SearchLimitationSelectChoise value="Title" />
        <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e5e5'}} />
    </div>
);

const SearchLimitationSelectChoise = ({value}) => (
    <div className="search-limitation-select-choice">
        { value }
    </div>
);

const SearchBox = () => {
    const isVisible = false;
    if (isVisible) {
        return (
            <div className="search-box">
                <SearchResult />
                <SearchResult />
                <SearchResult />
            </div>
        )
    } else {
        return (<div />)
    }
      
}

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
