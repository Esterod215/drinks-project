import React from 'react';

import Loading from './Loading';
import Cocktail from './Cocktail';

import { useGlobalContext } from '../context';

const CocktailList = () => {
	const { cocktails, loading } = useGlobalContext();

	if(loading) return <Loading />

	if(cocktails.length == 0) return <h2 className="section-title">Sorry, no cocktails matched your criteria.</h2>

	return (
		<section className="section">
			<h2 className="section-title">
				Cocktails
			</h2>
			<div className="cocktails-center">
				{cocktails.map((cocktail) => {
					return <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>
				})}
			</div>
		</section>
	)
}

export default CocktailList;