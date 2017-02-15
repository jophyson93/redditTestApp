import * as types from './types'

export function fetchRecipes() {
	console.log("its calling")
	return (dispatch, getState) => {
		const params = [
			'print=pretty',
	 		].join('&'); 
 			fetch(`https://hacker-news.firebaseio.com/v0/item/13527482.json?${params}`, {
			  headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json',
			      'dataType': 'json',
			  }
		}).then((response) => response.json())
      .then((responseData) => {
		dispatch(setSearchedRecipes(responseData))        
      })
      .catch((error) => {
        console.error(error);
      });
	}
}

// action creators
export function setSearchedRecipes(recipes) {
	return {
		type: types.SET_SEARCHED_RECIPES,
		recipes
	}
}

export function addRecipe() {
	return {
		type: types.ADD_RECIPE
	}
}

// INITIAL STATE
const initialState = {
	recipes: 'Jophy'
}


// reducers
export default
function recipesReducer(state = initialState, action) {
	switch(action.type) {
		case types.SET_SEARCHED_RECIPES:
			return {
				recipes: action.recipes
			}
		case types.ADD_RECIPE:
			return {}
		default: 
			return state;
	}
}
