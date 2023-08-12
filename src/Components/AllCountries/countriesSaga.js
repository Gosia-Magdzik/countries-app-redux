import { call, put, takeEvery, delay } from "redux-saga/effects";
import {
    fetchCountries,
    fetchCountriesFailed,
    fetchCountriesSucces,
} from "./countriesSlice";
import { getCountries } from "./getCountries";

function* fetchCountriesHandler() {
    try {
        yield delay(2000);
        const countries = yield call(getCountries);
        yield put(fetchCountriesSucces(countries));
    } catch {
        yield put(fetchCountriesFailed());
    }
}

export function* countriesSaga() {
    yield takeEvery(fetchCountries.type, fetchCountriesHandler);
}