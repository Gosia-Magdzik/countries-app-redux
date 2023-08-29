import error from "./error.svg";
import { ErrorWrapper, Text, Img } from "./styled";

export const Error = () => {
    return(
        <ErrorWrapper>
            <Img src={error}/>
            <Text>
            Ups! something went wrong.. <br/> 
            Check out internet connection and try to refresh the page
            </Text>
        </ErrorWrapper>
    );
}