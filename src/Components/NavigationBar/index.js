import { StyledLink, Header } from "./styled"
import { ModeSwitch } from "./ModeSwither";

export const Nav = () => {
    return(
        <Header>
            <StyledLink to="/">
                Where in the world?
            </StyledLink>
            <ModeSwitch/>
        </Header>
    );
};
