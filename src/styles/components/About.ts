import styled from "styled-components";

import { Section as BaseSection } from './Shared';
import aboutBg from '../../assets/about-me.png';

export const Section = styled(BaseSection)`
    background: url(${aboutBg}) no-repeat scroll top center;
    background-size: cover;
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
    justify-content: space-around;

    @media(min-width: 768px) {
        flex-flow: row nowrap;
    }
`
