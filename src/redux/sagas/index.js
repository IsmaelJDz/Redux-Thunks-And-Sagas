import { all } from "redux-saga/effects";
import pokemons from "./pokemon";

export default function* rootSaga() {
  yield all([pokemons()]);
}
