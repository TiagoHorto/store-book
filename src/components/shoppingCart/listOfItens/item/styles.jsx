import styled from "styled-components";

const S = {
    Book: styled.div`
        display: flex;
        justify-content: space-between;
        background-color: darkorange;
        border-radius: 5px;
        margin-right: 20px;
        margin-bottom: 10px;
    `,  
    BookDetails: styled.div`
        flex: 2;
        display: flex;
        padding: 10px;
    `,  
    Image: styled.img`
        width: 100px;
        border-radius: 5px;
    `,   
    Details: styled.div`
        padding: 0 20px;
        display: flex;
        flex-direction: column;
    `,   
    BookTag: styled.span`
        margin-bottom: 10px;
        color: #202020;
    `,   
    PriceDetails: styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #202020;
    `,   
    BookAmountContainer: styled.div`
        display: flex;
        align-items: center;
    `,  
    BookAmount: styled.div`
        font-size: 24px;
        margin: 5px;
    `,  
    Price: styled.div`
        font-size: 30px;
        font-weight: bold;
    `,  
    CircleButton: styled.button`
        padding: 2px;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
    `,
    RemoveItem: styled.div`
        cursor: pointer;
        display: flex;
    `
}

export default S