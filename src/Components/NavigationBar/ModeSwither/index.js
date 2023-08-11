import { Button, StyledSun } from "./styled";
import { ReactComponent as Sun } from "./sun.svg"
import { ReactComponent as moon } from "./night_sky.svg"


export const ModeSwitch = () => {
    return(
        <Button>
            <StyledSun width="50" height="50"/>
            Dark Mode
        </Button>
    );
};