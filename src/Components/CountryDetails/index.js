import { useParams } from "react-router-dom";
import { 
    Button, 
    ButtonLink, 
    Wrapper, 
    Img,
    Data,
    Details, 
    Name, 
    Col,
    P,
    B, 
    BordersContainer,
    BorderLink } 
from "./styled";
import { ReactComponent as LeftArrowLight } from './arrow_left_white.svg';
import { ReactComponent as LeftArrowDark } from "./arrow_left_black.svg";
import { Loader } from "../Loading";
import { useData } from "./useData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../NavigationBar/ModeSwither/ModeSlice";

export const Country = () => {
    const { id } = useParams();
    const data = useData(id);
    const [isLoading, setIsLoading] = useState(true);
    const darkMode = useSelector(selectIsDarkMode);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
        <Button>
            <ButtonLink to="/">
                {darkMode ? <LeftArrowLight/> : <LeftArrowDark />}
                &nbsp;&nbsp; Back
            </ButtonLink>
        </Button>
        <Wrapper>
            { isLoading ? (
                <Loader/>
            ) : !data ? (
                <p>error</p>
            ) : (
                <>
                <Img src={data.flag}/>
                <Data>
                    <Name>{data.commonName}</Name>
                    <Details>
                        <Col>
                            <P><B>Native Name:</B>{data.officialName}</P>
                            <P><B>Population:</B>{new Intl.NumberFormat().format(data.population)}</P>
                            <P><B>Region:</B>{data.region}</P>
                            <P><B>Sub Region:</B>{data.subRegion}</P>
                            <P><B>Capital:</B>{data.capital}</P>
                        </Col>
                        <Col>
                            <P><B>Top Level Domain:</B>{data.tld}</P>
                            <P><B>Currencies:</B>{data.currencies}</P>
                            <P><B>Languages:</B>{data.languages}</P>
                        </Col>
                    </Details>
                    <Name>Border Countries:</Name>
                    <BordersContainer>
                        {data.borders === "No Data" ? (
                            <p>{data.borders}</p>
                        ) : (
                            data.borders.map((borderCountry) =>(
                                <BorderLink
                                    to={`/country/${borderCountry}`}
                                    key={borderCountry} 
                                >
                                    {borderCountry}
                                </BorderLink>
                            ))
                        )}
                    </BordersContainer>
                </Data>
                </>
            )}
        </Wrapper>
        </>
    );
};