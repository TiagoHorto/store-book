import styled from "styled-components";

const S = {
    Container: styled.div`
        padding: 0 75px;
    `,
    SearchContainer: styled.div`
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 500px;
        margin-bottom: 20px;
    `,
    Input: styled.input`
        border: none;
        width: 100%;
        font-size: 25px;
        outline: none;
        background-color: transparent;
        border-bottom: 2px solid white;
        color: white;
    `,
    BookContainer: styled.div`
        display: flex;
        flex-wrap: wrap;
    `,
    IconSearch: styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `,
    Empty: styled.div`
        margin-top: 200px;
        display: flex;
        justify-content: center;
        background-color: darkorange;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
    `
}

export default S