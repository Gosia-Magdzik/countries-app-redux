import { Button, StyledSun, StyledMoon } from "./styled";
import { selectIsDarkMode, switchDarkMode } from "./ModeSlice";
import { useDispatch, useSelector } from "react-redux";


export const ModeSwitch = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectIsDarkMode)

    return(
        <Button onClick={() => dispatch(switchDarkMode())}>
            {darkMode ? <StyledSun /> : <StyledMoon />}
            {darkMode ? <p>Light Mode</p> : <p>Dark Mode</p> }
        </Button>
    );
};