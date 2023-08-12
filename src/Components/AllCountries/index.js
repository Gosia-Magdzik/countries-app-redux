import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCountries,
    selectCountries,
    selectStatus
} from "./countriesSlice";
import { Loader } from "../Loading";


export const AllCountries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(selectCountries);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    return (
        <>
        {status === "loading" ? (
            <Loader/>
        ) : status === "succes" ? (
            countries.map((country) => (
                <p>...</p>
            ))
        ) : null}
        </>
    );
};