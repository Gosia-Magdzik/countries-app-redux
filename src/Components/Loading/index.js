import { useSelector } from "react-redux"
import { Hourglass, LoaderWrapper } from "./styled"
import { selectIsDarkMode } from "../NavigationBar/ModeSwither/ModeSlice"

export const Loader = () => {
    const darkMode = useSelector(selectIsDarkMode);

    return (
        <LoaderWrapper>
            <Hourglass darkMode={darkMode}/>
        </LoaderWrapper>
    )
}