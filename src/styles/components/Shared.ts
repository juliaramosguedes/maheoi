import styled from "styled-components";

export const Section = styled.section`
    padding: 90px 36px 120px;

    @media(min-width: 1024px) {
        padding: 90px 48px 150px;
    }
`

export const Container = styled.div`
    max-width: 1076px;
    margin: 0 auto;
`

export const Flex = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 100%;

    @media(min-width: 768px) {
        flex-flow: row nowrap;
    }
`

export const Card = styled.div`
    max-width: 300px;

    @media(min-width: 1024px) {
        max-width: 450px;
    }
`

export const Button = styled.div`
    border: 1px solid #ffffff;
    background-color: transparent;
    padding: 12px 32px;
    color: #ffffff;
    margin: 24px 0 64px;
    font-size: 16px;
    text-align: center;
    max-width: 270px;
    transition: border 0.5s;
    transition: color 0.3s;

    & :hover {
        border: 1px solid #FFD500;
        color: #FFD500;
    }
`

export const ColorWhite = styled.span`
    color: #ffffff
`

export const ColorYellow = styled.span`
    color: #FFD500
`

export const ColorPurple = styled.span`
    color: #510087
`

export const ColorGray = styled.span`
    color: #6D6D6D
`

export const ParagraphNoMargin = styled.p`
    margin: 0;
`
