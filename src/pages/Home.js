import React from 'react';

import CocktailList from '../components/CocktailList';
import Search from '../components/SearchForm';

const Home = () => {
	return (
		<main>
			<Search />
			<CocktailList />
		</main>
	)
}

export default Home;