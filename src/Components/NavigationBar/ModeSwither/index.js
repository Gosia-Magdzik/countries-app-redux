import { Button, StyledSun } from "./styled";
import { ReactComponent as Sun } from "./sun.svg"
import { ReactComponent as moon } from "./night_sky.svg"
import { switchDarkMode } from "./ModeSlice";
import { useDispatch, useSelector } from "react-redux";


export const ModeSwitch = () => {
    const dispatch = useDispatch();

    return(
        <Button onClick={() => dispatch(switchDarkMode())}>
            <StyledSun/>
            Dark Mode
        </Button>
    );
};