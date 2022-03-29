import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getBooksAddedToWishList } from "../../redux/selectors";
import Book from "../book/Book";
import S from "./styles";


const WishList = () => {
    const { t } = useTranslation()
    let addedBooks = useSelector(getBooksAddedToWishList);
    return (
        <S.Container>
            <S.Title>
                {t("wishListTitle")}
            </S.Title>
            {addedBooks.length > 0 ? 
                <S.BookContainer>
                    {addedBooks.map(book => <Book key={book.id} item={book} />)} 
                </S.BookContainer> 
            : <S.Empty>{t("emptyBooks")}</S.Empty>}
        </S.Container>
    )
    
}

export default WishList