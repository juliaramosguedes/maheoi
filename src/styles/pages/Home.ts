import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > svg {
        width: 135px;
        height: 111px;

        @media(min-width: 1024px) {
            width: 180px;
            height: 148px;
        }
    }
`

export const Sling = styled.div`
    position: relative;

    svg {
        position: fixed;
        width: 135px;
        height: 102px;

        @media(min-width: 1024px) {
            width: 270px;
            height: 204px;
        }
    }
`
export const Text = styled.div`
    margin-top: 36px;
    text-align: center;
    line-height: 24px;
`
