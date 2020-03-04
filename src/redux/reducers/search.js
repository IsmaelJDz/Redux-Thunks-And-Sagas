const START_GET_POKEMONS = "START_GET_POKEMONS";
const SUCCESS_GET_POKEMONS = "SUCCESS_GET_POKEMONS";

const initialState = {
  pokemons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_GET_POKEMONS:
      return {
        ...state,
        isLoading: true
      };

    case SUCCESS_GET_POKEMONS:
      return {
        ...state,
        pokemons: action.results,
        isLoading: false
      };

    default:
      return { ...state };
  }
}
