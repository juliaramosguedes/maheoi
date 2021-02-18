import styled from "styled-components";

import bannerBg from '../../assets/banner.png';
import { Section as BaseSection } from './Shared';

export const Section = styled(BaseSection)`
    background: url(${bannerBg}) no-repeat local top center;
    background-size: cover;
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

    h2 {
        font-size: 31px;

        @media(min-width: 1024px) {
            font-size: 41px;
        }
    }
`
