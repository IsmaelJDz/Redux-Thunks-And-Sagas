import { put, call, takeLatest } from "redux-saga/effects";
import { apiCall } from "../api";
const START_GET_POKEMONS = "START_GET_POKEMONS";
const SUCCESS_GET_POKEMONS = "SUCCESS_GET_POKEMONS";

// put pone, coloca las acciones, dispararlas parecido a dispatch a los reducers
// call la llamada a la api
//takeLatest colocar una funcion generadora y estar escuchando, cuando se disparan las acctions

function* getPokemons({ payload }) {
  try {
    //primer parametro de call es la llamada a la api, los demas son parametros opcionales que haces a la api, tipo, url
    const dataApi = yield call(
      apiCall,
      "get",
      "https://pokeapi.co/api/v2/pokemon"
    );
    console.log(dataApi.results);
    //put nombre de la accion que va a disparar SUCCESS_GET_POKEMON "Pit es lo mismo que hacer dispatch"
    yield put({
      type: SUCCESS_GET_POKEMONS,
      dataApi
    });
  } catch (error) {
    console.log("Error");
  }
}

//watcher
export default function* pokemons() {
  yield takeLatest(START_GET_POKEMONS, getPokemons);
}
