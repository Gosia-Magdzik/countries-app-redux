import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCountries,
    selectCountries,
    selectCountriesByFilter,
    selectStatus
} from "./countriesSlice";
import { Loader } from "../Loading";
import { CountryTile } from "./CountryTile";
import { Wrapper } from "./styled";
import { SearchBar } from "../SearchBar";
import { useLocation } from "react-router-dom";

export const AllCountries = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    const regionQuery = searchParams.get("region");

    const countries = useSelector((state) => 
        selectCountriesByFilter(state, searchQuery, regionQuery)
    );
    const status = useSelector(selectStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    return (
        <>
        <SearchBar/>
        <Wrapper>
            {
            status === "loading" ? (
                <Loader/>
            ) : status === "succes" ? (
                countries.map((country) => (
                    <CountryTile
                        key={country.name.common}
                        flag={country.flags.png}
                        name={country.name.official}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        cca3={country.cca3}
                    />
                ))
            ) : (
                <p>not found</p>
            )}
        </Wrapper>
        </>
    );
};