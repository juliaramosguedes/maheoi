import styled from "styled-components";
import { lighten } from 'polished';
import {Section as BaseSection, Card as BaseCard} from "./Shared";

export const Section = styled(BaseSection)`
    .react-multi-carousel-dot-list {
        justify-content: flex-end;
    }
`

export const Dot = styled.div`
    border: 0;
    background: ${lighten(0.2, '#6D6D6D')};
    height: 5px;
    width: 24px;
    margin: 8px;

    &.active {
        background-color: ${lighten(0.2, '#510087')};
    }
`

export const Card = styled(BaseCard)`
    border: 1px solid #510087;
    padding: 24px;

    h3, p, span {
        text-transform: uppercase;
    }
`

export const Box = styled.div`
    padding: 0 0 48px;
`
