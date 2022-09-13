import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Loading from '../components/Loading';

const CocktailDetails = () => {
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(false);
	const [ingredients, setIngredients] = useState([])
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);

		fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((response) => response.json())
			.then((data) => {
				if(data.drinks) {
					setDetails(data.drinks[0]);
					setIngredients(
						[
							data.drinks[0]['strIngredient1'],
							data.drinks[0]['strIngredient2'],
							data.drinks[0]['strIngredient3'],
							data.drinks[0]['strIngredient4'],
							data.drinks[0]['strIngredient5']
						]
					)
				}
				else {
					setDetails(null);
				}
				setLoading(false);
			})
			.catch((error) => {
				console.log(error)
				setLoading(false);
			})
	}, [id]);

	if(loading) return <Loading />
	if(details == null) return <h2 className="section-title">No Cocktail To Display</h2>

	return (
		<section className="section cocktail-section">
			<h2 className="section-title">{details.strDrink}</h2>
			<div className="drink">
				<img src={details.strDrinkThumb} />
				<div className="drink-info">
					<p>
						<span className="drink-data">name: </span>
						{details.strDrink}
					</p>
					<p>
						<span className="drink-data">info: </span>
						{details.strAlcoholic}
					</p>
					<p>
						<span className="drink-data">glass: </span>
						{details.strGlass}
					</p>
					<p>
						<span className="drink-data">Instructions: </span>
						{details.strInstructions}
					</p>
					<p>
						<span className="drink-data"> Key Ingredients: </span>
						{ingredients.map((ingredient,index) => {
							return (ingredient) ? <span key={index}>{ingredient}.</span> : null
						})}
					</p>
				</div>
			</div>
			<Link className="btn btn-primary home-detail-btn" to="/">Go Back Home</Link>
		</section>
	)
}

export default CocktailDetails;