import styled from "styled-components";

const S = {
    Container: styled.div`
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: darkorange;
        border-radius: 5px;
        flex-direction: column;
        padding: 5px;
    `,
    Image: styled.img`
        height: 250px;
        width: 175px;
        margin-bottom: 10px;
        border-radius: 5px;
    `,
    Info: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: lightgray;
        width: 100%;
        border-radius: 5px;
    `,
    Icon: styled.div`
        flex:1;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        cursor: pointer;
        color: black;
        text-decoration: none;
    `,
    TitleBook: styled.text`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 160px;
        height: 60px;
        font-weight: bold;
        font-size: 14px;
        color: black;
    `,
    ShopCart: styled.div`
    `
}

export default S