import styled from "styled-components";

const S = {
    SummaryContainer: styled.div`
        flex: 1;
        border: 0.5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 50vh;
    `,
    SummaryTitle: styled.h1`
        font-weight: 200px;
    `,
    SummaryItem: styled.div`
        margin: 30px 0;
        display: flex;
        justify-content: space-between;
        font-weight: ${(props) => props.type === "total" && "500px"};
        font-size: ${(props) => props.type === "total" && "24px"};
    `,
    SummaryItemText: styled.span`
    `,
    SummaryItemPrice: styled.span`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Button: styled.button`
        padding: 10px;
        font-weight: 600px;
        cursor: pointer;
    `
}

export default S