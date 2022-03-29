import styled from "styled-components";

const S = {
    Container: styled.div`
        height: 80px;
        background-color: #151414;
        margin-bottom: 50px;
    `,
    Wrapper: styled.div`
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    Left: styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `,
    Center: styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Right: styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `,
    Logo: styled.h1`
        font-weight: bold;
        color: darkorange;
    `,
    MenuItem: styled.div`
        cursor: pointer;
        margin-left: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
    `,
    NameItem: styled.div`
        color: white;
    `
}

export default S