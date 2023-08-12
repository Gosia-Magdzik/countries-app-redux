import { Tile,
        Img,
} from "./styled";

export const CountryTile = ( { flag } ) => {
    return (
        <Tile>
            < Img src={flag} />
        </Tile>
    );
};