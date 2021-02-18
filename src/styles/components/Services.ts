import styled from "styled-components";
import { lighten } from 'polished';
import servicesBg from '../../assets/services.png';

export const Section = styled.section`
    padding: 90px 36px 26px;
    background: url(${servicesBg}) no-repeat scroll top center;
    background-size: cover;

    & > * {
        max-width: 1076px;
    }

    h2 {
        color: #FFD500;

    }

    @media(min-width: 1024px) {
        padding: 90px 48px;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    @media(min-width: 1024px) {
        flex-flow: row nowrap;
    }
`

export const Card = styled.div`
    max-width: 480px;

    h3, p {
      color: #ffffff;
    }

    button {
        border: 0;
        background-color: #4FEA74;
        padding: 12px 32px;
        color: #000000;
        margin: 24px 0 64px;
        font-size: 16px;
        transition: background-color 0.5s;

        & :hover {
            background-color: ${lighten(0.1, '#4FEA74')}
        }
    }
`
