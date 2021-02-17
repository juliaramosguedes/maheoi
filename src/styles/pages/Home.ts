import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .in-construction {
        position: fixed;
    }
`

export const Sling = styled.div`
    position: relative;

    svg {
        position: fixed;
        width: 180px;
        height: 136px;

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
