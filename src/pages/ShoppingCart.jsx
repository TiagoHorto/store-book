
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import ListOfItens from "../components/shoppingCart/listOfItens/ListOfItens";
import Summary from "../components/shoppingCart/summary/Summary";
import { getNumItemsShoppingCart } from "../redux/selectors";

const Container = styled.div`
    color: white;
`

const Wrapper = styled.div`
    padding: 20px;    
`
    
const Title = styled.div`
    font-weight: 300px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: darkorange;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`


const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`
const Button = styled.button`
    padding: 10px;
    font-weight: 600px;
    cursor: pointer;
`
const ShoppingCart = () => {
    const { t } = useTranslation()
    const numItemsShoppingCart = useSelector(getNumItemsShoppingCart)
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>
                {t("shoppingCart")}
                </Title>
                <Top>
                    <Link to={`/`}>
                        <Button>{t("continueShopping")}</Button>
                    </Link>
                    <TopText>You have {numItemsShoppingCart} {numItemsShoppingCart > 1 ? "itens" : "item"} in your cart</TopText>
                </Top>
                <Bottom>
                    <ListOfItens />
                    <Summary />
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default ShoppingCart