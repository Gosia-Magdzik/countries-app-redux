import { useParams } from "react-router-dom";
import { Button, ButtonLink, Wrapper } from "./styled";
import { ReactComponent as LeftArrowLight } from './arrow_left_white.svg';
import { Loader } from "../Loading";
import { useData } from "./useData";

export const Country = () => {
    const { id } = useParams();
    const data = useData(id);

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