import { Euro, FavoriteBorderOutlined, FavoriteOutlined, ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBook, removeSelectedBook } from "../../redux/actions/book";
import cover from '../../images/withoutCover.jpg'
import { addBookToWishList, removeBookFromWishList } from "../../redux/actions/wishList";
import { checkIfBookOnShoppingCart, checkIfBookOnWishList, checkIfPriceOnBook } from "../../redux/selectors";
import S from "./styles";
import { useTranslation } from "react-i18next";
import { addBookToShoppingCart, removeBookFromShoppingCart } from "../../redux/actions/shoppingCart";

const BookDetail = () => {
    const { t } = useTranslation()
    const book = useSelector((state) => state.book)
    const hasPrice = useSelector(checkIfPriceOnBook)
    const { bookId } = useParams()
    let bIsBookOnShoppingCart = useSelector((state) => checkIfBookOnShoppingCart(state, bookId ));
    const dispatch = useDispatch()

    useEffect(() => {
        if(bookId && bookId !== "") dispatch(fetchBook(bookId))
            return () => {
                dispatch(removeSelectedBook())
            }
    }, [dispatch, bookId])

    let bIsBookOnWishList = useSelector((state) => checkIfBookOnWishList(state, bookId));

    const addToWishList = function () {
        dispatch(addBookToWishList(book));
    };

    const removeFromWishList = function () {
        dispatch(removeBookFromWishList(bookId));
    };

    const addToShoppingCart = function () {
        dispatch(addBookToShoppingCart(book));
    };

    const removeFromShoppingCart = function () {
        dispatch(removeBookFromShoppingCart(bookId));
    };

    return (
        <S.Container>
            {Object.keys(book).length === 0 ? (
                <div>...{t("loading")}</div>
            ) : (
            <S.Wrapper>
                <S.ImgContainer>
                    {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail !== undefined ? <S.Image src={book.volumeInfo.imageLinks.smallThumbnail}/> : <S.Image src={cover}/>} 
                </S.ImgContainer>
                <S.InfoContainer>
                    <S.BookTitle>{book.volumeInfo.title}</S.BookTitle>
                    {book.volumeInfo.subtitle !== undefined ? <S.BookSubtitle>({book.volumeInfo.subtitle})</S.BookSubtitle> : "" }
                    <S.Author><b>{t("authors")}: </b>{book.volumeInfo.authors.map(function(item, index) {
                        return <span key={`${index}`}>{ (index ? ', ' : '') + item }</span>;
                        })}
                    </S.Author>
                    {hasPrice ? 
                        <S.Price>
                            <b>{t("price")}: </b> 
                            <S.Coin>
                                <Euro fontSize="small" />
                            </S.Coin> 
                            {book.saleInfo.listPrice.amount} 
                        </S.Price>
                    : ""}
                    <S.WrapperButton>
                        {hasPrice ? 
                            <S.Icon>
                            { bIsBookOnShoppingCart ?
                                    <ShoppingCart onClick={removeFromShoppingCart}/>
                                :
                                    <ShoppingCartOutlined onClick={addToShoppingCart}/>
                            }
                            </S.Icon>
                            :
                            <></>
                        }
                        {bIsBookOnWishList ? 
                        <S.Icon onClick={removeFromWishList} >
                            <FavoriteOutlined style={{color:"red"}}/>
                        </S.Icon>
                        :
                        <S.Icon onClick={addToWishList} >
                            <FavoriteBorderOutlined style={{color:"red"}}/>
                        </S.Icon>}
                    </S.WrapperButton>
                    <S.Description>
                        {book.volumeInfo.description}
                    </S.Description>
                </S.InfoContainer>
            </S.Wrapper>
            )}
        </S.Container>
    )
}

export default BookDetail