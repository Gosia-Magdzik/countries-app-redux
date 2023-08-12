import { useParams } from "react-router-dom";
import { Button, ButtonLink, Wrapper } from "./styled";
import { ReactComponent as LeftArrowLight } from './arrow_left_white.svg';
import { Loader } from "../Loading";
import { useData } from "./useData";
import { useEffect, useState } from "react";

export const Country = () => {
    const { id } = useParams();
    const data = useData(id);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setisLoading(false);
        }, 1000000);
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
                <p>coś</p>
            )}
        </Wrapper>
        </>
    );
};