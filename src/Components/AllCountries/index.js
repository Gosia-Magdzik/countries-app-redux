import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCountries,
    selectCountries,
    selectStatus
} from "./countriesSlice";
import { Loader } from "../Loading";
import { CountryTile } from "./CountryTile";
import { Wrapper } from "./styled";


export const AllCountries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(selectCountries);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    return (
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
    );
};