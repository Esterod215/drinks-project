import React, { useState, useCallback, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('')
	const [cocktails, setCocktails] = useState([]);

	const fetchCocktails = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json()

			if(data.drinks != null) {
				setCocktails(data.drinks)
			}
			else {
				setCocktails([]);
			}

			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchCocktails();
	}, [searchTerm, fetchCocktails])

  return <AppContext.Provider value={{
		loading,
		cocktails,
		setSearchTerm
	}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }