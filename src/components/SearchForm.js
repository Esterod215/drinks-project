import React from 'react';

import { useGlobalContext } from '../context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	return (
		<h1>Search</h1>
	)
}

export default SearchForm;