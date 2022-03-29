
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import BookDetail from "../components/bookDetail/BookDetail";

const Container = styled.div`
    color: white;
`

const BookDetailPage = () => {
    return (
        <Container>
            <Navbar />
            <BookDetail />
        </Container>
    )
}

export default BookDetailPage