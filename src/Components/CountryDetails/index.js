import { useParams } from "react-router-dom";
import { 
        Button, 
        ButtonLink, 
        Wrapper, 
        Img } 
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
                <p>{data.commonName}</p>
                </>
            )}
        </Wrapper>
        </>
    );
};