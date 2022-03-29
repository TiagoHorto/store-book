import S from './styles';
import { Add, Euro, Remove, RemoveShoppingCart } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { decrementItemsInShoppingCart, incrementItemsInShoppingCart, removeBookFromShoppingCart } from "../../../../redux/actions/shoppingCart";
import cover from '../../../../images/withoutCover.jpg'
import { useTranslation } from 'react-i18next';


const Item = ({item}) => {
    const { t } = useTranslation()
    const fnDispatch = useDispatch();
    const removeFromShoppingCart = function () {
        fnDispatch(removeBookFromShoppingCart(item.id));
    };

    const incrementInShoppingCart = function () {
        fnDispatch(incrementItemsInShoppingCart(item.id));
    };

    const decrementInShoppingCart = function () {
        fnDispatch(decrementItemsInShoppingCart(item.id));
    };

    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail

    return (
            <S.Book>
                <S.BookDetails>
                    {thumbnail !== undefined ? <S.Image src={item.volumeInfo.imageLinks.smallThumbnail}/> : <S.Image src={cover}/>}
                    <S.Details>
                        <S.BookTag><b>{t("title")}:</b> {item.volumeInfo.title}</S.BookTag>
                        <S.BookTag><b>{t("authors")}: </b>
                            {item.volumeInfo.authors.map(function(item, index) {
                                return <span key={`${index}`}>{ (index ? ', ' : '') + item }</span>;
                                })
                            }
                        </S.BookTag>
                    </S.Details>
                </S.BookDetails>
                <S.PriceDetails>
                    <S.Price><Euro fontSize="small" /> {(item.saleInfo.listPrice.amount * item.numItems).toFixed(2)}</S.Price>
                        
                    <S.BookAmountContainer>
                        <S.CircleButton onClick={decrementInShoppingCart}>
                            <Remove/>
                        </S.CircleButton>
                        <S.BookAmount>{item.numItems}</S.BookAmount>
                        <S.CircleButton onClick={incrementInShoppingCart}>
                            <Add/>
                        </S.CircleButton>
                    </S.BookAmountContainer>
                    <S.RemoveItem >
                        <RemoveShoppingCart onClick={removeFromShoppingCart}/>
                    </S.RemoveItem>
                </S.PriceDetails>
            </S.Book>
            
    )
}

export default Item