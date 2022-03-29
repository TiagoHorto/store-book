import { Search } from "@material-ui/icons"
import Book from "../book/Book"
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { fetchBooks } from "../../redux/actions/book"
import { getBooksToDisplay } from "../../redux/selectors";
import S from "./styles";
import { useTranslation } from "react-i18next"


const ListBooks = () => {
    const { t } = useTranslation()
    const searchRef = useRef(null);
    const books = useSelector(getBooksToDisplay);
    const dispatch = useDispatch();

    function handlerSearch(){
        dispatch(fetchBooks(searchRef.current.value))
    }

    return (
        <S.Container>
            <S.SearchContainer>
                <S.Input placeholder={t("search")} ref={searchRef}/>
                <S.IconSearch onClick={handlerSearch}>
                    <Search style={{color:"gray"}}/>
                </S.IconSearch>
            </S.SearchContainer>
            {books.length > 0 ? 
                <S.BookContainer>
                    {books.map(item => (
                        <Book item={item} key={item.id}/>
                    ))}
                </S.BookContainer>
            : <S.Empty>{t("emptyBooks")}</S.Empty>}
        </S.Container>
    )
}

export default ListBooks