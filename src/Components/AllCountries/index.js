import { useEffect, useState } from "react";
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
import { Pagination } from "../Pagination";

export const AllCountries = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);

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

    const lastCountry = currentPage * postPerPage;
    const firstCountry = lastCountry - postPerPage;
    const currentPosts = countries ? countries.slice(firstCountry, lastCountry) : [];

    return (
        <>
        <SearchBar/>
        <Wrapper>
            {
            status === "loading" ? (
                <Loader/>
            ) : status === "succes" ? (
                currentPosts.map((country) => (
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
        <Pagination 
            totalCountries={countries.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />
        </>
    ); 
};