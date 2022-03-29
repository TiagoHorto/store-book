import { AccountCircleOutlined, ShoppingCartOutlined, StarsOutlined } from "@material-ui/icons";
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getNumItemsShoppingCart, getNumItemsWishList } from "../../redux/selectors";
import S from "./styles"



const Navbar = () => {

    const { t } = useTranslation()
    const numBooksWishList = useSelector(getNumItemsWishList)
    const numItemsShoppingCart = useSelector(getNumItemsShoppingCart)
    return (
        <S.Container>
            
            <S.Wrapper>
                <S.Left>
                    <Link to={`/`} style={{ textDecoration: 'none' }}>
                        <S.Logo>{t("logo")}</S.Logo>
                    </Link>
                </S.Left>
                <S.Right>
                    <S.MenuItem>
                        <Badge>
                            <AccountCircleOutlined style={{color:"darkorange"}}/>
                        </Badge>
                        <S.NameItem>{t("account")}</S.NameItem>
                    </S.MenuItem>
                    <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                        <S.MenuItem>
                            <Badge badgeContent={numItemsShoppingCart} color="primary">
                                <ShoppingCartOutlined style={{color:"darkorange"}}/>
                            </Badge>
                            <S.NameItem>{t("cart")}</S.NameItem>
                        </S.MenuItem>
                    </Link>
                    <Link to={`/wishList`} style={{ textDecoration: 'none' }}>
                        <S.MenuItem>
                            <Badge badgeContent={numBooksWishList} color="primary">
                                <StarsOutlined style={{color:"darkorange"}}/>
                            </Badge>
                            <S.NameItem>{t("wishList")}</S.NameItem>
                        </S.MenuItem>
                    </Link>
                </S.Right>
                
            </S.Wrapper>
        </S.Container>
    )
}

export default Navbar