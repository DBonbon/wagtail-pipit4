/* global module */

import React from 'react';
import SearchIcon from './SearchIcon';
import data from './SearchIcon.data';

const SearchIconStory = {
    title: 'Components/SearchIcon',
    component: SearchIcon,
};
export default SearchIconStory;

export const SearchIconWithData = () => <SearchIcon {...data} />;
export const SearchIconWithoutData = () => <SearchIcon />;
