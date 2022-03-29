import styled from "styled-components";

const S = {
    Container: styled.div`
        padding: 0 75px;
    `,
    BookContainer: styled.div`
        display: flex;
        flex-wrap: wrap;
    `,
    Title: styled.div`
        font-weight: 300px;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: darkorange;
    `,
    Empty: styled.div`
        margin-top: 200px;
        display: flex;
        justify-content: center;
        background-color: darkorange;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        color: black;
    `
}

export default S