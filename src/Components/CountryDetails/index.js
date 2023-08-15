import { useParams, Link } from "react-router-dom";
import { 
    Button, 
    ButtonLink, 
    Wrapper, 
    Img,
    Data,
    Details, 
    Name, 
    Col, 
    Paragraph,
    BordersContainer } 
from "./styled";
import { ReactComponent as LeftArrowLight } from './arrow_left_white.svg';
import { Loader } from "../Loading";
import { useData } from "./useData";
import { useEffect, useState } from "react";

export const Country = () => {
    const { id } = useParams();
    const data = useData(id);
    const [isLoading, setIsLoading] = useState(true);

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
                <LeftArrowLight/>&nbsp;&nbsp; Back
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
                            <Paragraph><b>Native Name:</b>&nbsp;{data.officialName}</Paragraph>
                            <Paragraph><b>Population:</b>&nbsp;{new Intl.NumberFormat().format(data.population)}</Paragraph>
                            <Paragraph><b>Region:</b>&nbsp;{data.region}</Paragraph>
                            <Paragraph><b>Sub Region:</b>&nbsp;{data.subRegion}</Paragraph>
                            <Paragraph><b>Capital:</b>&nbsp;{data.capital}</Paragraph>
                        </Col>
                        <Col>
                            <Paragraph><b>Top Level Domain:</b>&nbsp;{data.tld}</Paragraph>
                            <Paragraph><b>Currencies:</b>&nbsp;{data.currencies}</Paragraph>
                            <Paragraph><b>Languages:</b>&nbsp;{data.languages}</Paragraph>
                        </Col>
                    </Details>
                    <BordersContainer>
                        <b>Border Countries:</b>&nbsp;
                        {data.borders === "No Data" ? (
                            <p>{data.borders}</p>
                        ) : (
                            data.borders.map((borderCountry) =>(
                                <Link
                                    to={`/country/${borderCountry}`}
                                    key={borderCountry} 
                                >
                                    {borderCountry}
                                </Link>
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