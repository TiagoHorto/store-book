import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import WishList from "../components/wishList/WishList";

const Container = styled.div`
    color: white;
`

const WishListPage = () => {
    return (
        <Container>
            <Navbar />
            <WishList />
        </Container>
    )
}

export default WishListPage