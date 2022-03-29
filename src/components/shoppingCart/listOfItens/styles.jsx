import styled from "styled-components";

const S = {
    Info: styled.div`
        flex: 2;
        display: flex;
        flex-direction: column;
    `,
    Empty: styled.div`
        display: flex;
        justify-content: center;
        background-color: darkorange;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        color: black;
        margin-right: 20px;
        margin-bottom: 10px;
    `
}

export default S