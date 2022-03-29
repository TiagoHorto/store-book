import { FavoriteBorderOutlined, FavoriteOutlined, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons"
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import cover from '../../images/withoutCover.jpg'
import { useDispatch, useSelector } from "react-redux";
import { checkIfBookOnShoppingCart, checkIfBookOnWishList } from "../../redux/selectors";
import { addBookToWishList, removeBookFromWishList } from "../../redux/actions/wishList";
import { addBookToShoppingCart, removeBookFromShoppingCart } from "../../redux/actions/shoppingCart";
import S from './styles'

const Book = ({item}) => {
    const fnDispatch = useDispatch();
    let bIsBookOnWishList = useSelector((state) => checkIfBookOnWishList(state, item.id));
    let bIsBookOnShoppingCart = useSelector((state) => checkIfBookOnShoppingCart(state, item.id));
    const addToWishList = function () {
        fnDispatch(addBookToWishList(item));
    };
    const addToShoppingCart = function () {
        fnDispatch(addBookToShoppingCart(item));
    };

    const removeFromWishList = function () {
        fnDispatch(removeBookFromWishList(item.id));
    };
    const removeFromShoppingCart = function () {
        fnDispatch(removeBookFromShoppingCart(item.id));
    };
    
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
    let hasPrice = item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.amount

    return (
        <S.Container>
            {thumbnail !== undefined ? 
                <S.Image src={item.volumeInfo.imageLinks.smallThumbnail}/> 
                : 
                <S.Image src={cover}/>
            }
            <S.TitleBook>{item.volumeInfo.title}</S.TitleBook> 
            <S.Info>
                <S.Icon>
                    <Link to={`/bookDetail/${item.id}`} >
                        <SearchOutlined/>
                    </Link>
                </S.Icon>
                <Divider orientation="vertical" flexItem />
                {hasPrice !== undefined ? 
                    <S.ShopCart>
                    { bIsBookOnShoppingCart ?
                        
                        <S.Icon onClick={removeFromShoppingCart}>
                            <ShoppingCart/>
                        </S.Icon>
                        :
                        <S.Icon onClick={addToShoppingCart}>
                            <ShoppingCartOutlined/>
                        </S.Icon>
                    }
                    </S.ShopCart>
                    :
                    <></>
                }
                <Divider orientation="vertical" flexItem />
                    { bIsBookOnWishList ? 
                        <S.Icon onClick={removeFromWishList} > 
                            <FavoriteOutlined style={{color:"red"}}/>
                        </S.Icon>
                        :   
                        <S.Icon onClick={addToWishList} > 
                            <FavoriteBorderOutlined style={{color:"red"}}/>
                        </S.Icon>
                    }
            </S.Info>
        </S.Container>
    )
}

export default Book