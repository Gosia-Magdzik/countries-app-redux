import { useParams } from "react-router-dom";
import { Button, ButtonLink, Wrapper } from "./styled";
import { ReactComponent as LeftArrowLight } from './arrow_left_white.svg';
import { Loader } from "../Loading";

export const Country = () => {
    const { id } = useParams();

    return (
        <>
        <Button>
            <ButtonLink to="/">
                <LeftArrowLight/>&nbsp;&nbsp; Back
            </ButtonLink>
        </Button>
        <Wrapper>

        </Wrapper>



        </>
    );
};