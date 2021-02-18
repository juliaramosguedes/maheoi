import styled from "styled-components";

import { Section as BaseSection } from './Shared';
import aboutBg from '../../assets/about-me.jpg';

export const Section = styled(BaseSection)`
    background: url(${aboutBg}) no-repeat scroll bottom center;
    background-size: cover;
`

export const Card = styled.div`
    max-width: 300px;

    @media(min-width: 1024px) {
        max-width: 700px;
    }
`

export const Image = styled.div`
    border: 1px solid #FFD500;
    padding: 20px;
    margin: 0 auto 36px;

     div {
         border: 1px solid #FFD500;
         width: 263px;
         height: 320px;
         overflow: hidden;
     }

    img {
        width: 263px;
        margin: -40px 0 0 0;
    }

    @media(min-width: 768px) {
        margin: 0 0 36px;

        div {
            width: 280px;
            height: 350px;
            overflow: hidden;
        }

        img {
            width: 280px;
            margin: -40px 0 0 0;
        }
    }
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
