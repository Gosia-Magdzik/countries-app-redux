import { Wrapper, Button } from "./styled";

export const Pagination = ({totalCountries, postPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    
    for(let i = 1; 
        i <= Math.ceil(totalCountries/postPerPage);
        i++
        ) {
            pages.push(i)
        }

    return(
        <Wrapper>
        {
            pages.map((page, index) => {
                return (
                <Button 
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page == currentPage ? "active" : ""}
                >
                    {page}
                </Button>
                );
            })
        }
        </Wrapper>
    );
};