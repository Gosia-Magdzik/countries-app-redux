const apiLink = "https://restcountries.com/v3.1/all";

export const getCountries = async () => {
    const response = await fetch(apiLink);

    if (!response.ok) {
        throw new Error();
    }

    return response.json();
}