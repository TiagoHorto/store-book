import styled from "styled-components";

const S = {
    Container: styled.div`
    `,
    Wrapper: styled.div`
        padding: 50px;
        display: flex;
    `,
    ImgContainer: styled.div`
        flex: 1;
    `,
    Image: styled.img`
        width: 100%;
    `,
    InfoContainer: styled.div`
        flex: 3;
        padding: 0 50px;
    `,
    BookTitle: styled.h1`
        font-weight: 200px;
        margin-bottom: 0;
        margin-top: 0;
    `,
    BookSubtitle: styled.h4`
        margin: 0 0 30px;
    `,
    Author: styled.h3`
        font-weight: lighter;
        margin-top: 5px;
    `,
    Price: styled.span`
        font-weight: 100px;
        display: flex;
    `,
    Description: styled.span`
    `,
    WrapperButton: styled.div`
        display: flex;
        align-items: center;
        justify-content: left;
        height: 40px;
        margin-top: 30px;
    `,
    Icon: styled.div`
        cursor: pointer;
        margin-left: 5px;
        height: 100%;
        width: 40px;
        border: none;
        border-radius: 2px;
        background-color: darkorange;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;

        &:hover{
            background-color: #E44A12;
        }
    `,
    Coin: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
    `
}

export default S