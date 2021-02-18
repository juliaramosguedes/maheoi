import styled from "styled-components";
import { lighten } from 'polished';

export const Section = styled.section`
    padding: 90px 36px 26px;

    & > * {
        max-width: 1076px;
    }

    @media(min-width: 1024px) {
        padding: 90px 48px;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    @media(min-width: 768px) {
        flex-flow: row nowrap;
    }
`

export const Card = styled.div`
    max-width: 300px;

    @media(min-width: 1024px) {
        max-width: 480px;
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
    transition: background-color 0.5s;

    & :hover {
        background-color: ${lighten(0.2, '#FFD500')}
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
