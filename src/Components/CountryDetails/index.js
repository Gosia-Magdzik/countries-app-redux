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
    Paragraph } 
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
                    <Paragraph><b>Currencies:</b>&nbsp;{Object.values(data.currencies).map(currency => currency.name).join(', ')}</Paragraph>
                    <Paragraph><b>Languages:</b>&nbsp;{Object.values(data.languages).join(', ')}</Paragraph>
                  </Col>
              </Details>
                </Data>
                </>
            )}
        </Wrapper>
        </>
    );
};