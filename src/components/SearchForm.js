import React, { useEffect, useRef } from 'react';

import { useGlobalContext } from '../context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchValue = useRef('');

	useEffect(() => {
		searchValue.current.focus();
	})

	const searchCocktail = () => {
		setSearchTerm(searchValue.current.value);
	}

	const submitSearch = (event) => {
		event.preventDefault();
	}

	return (
		<section className="section search">
			<form className="search-form" onSubmit={submitSearch}>
				<div className="form-control">
					<label htmlFor="name">Search Cocktails</label>
					<input
						id="name"
						type="text"
						ref={searchValue}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	)
}

export default SearchForm;