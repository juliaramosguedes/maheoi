import styled from "styled-components";

import bannerBg from '../../assets/banner.jpg';

export const Header = styled.header`
    padding: 90px 36px 120px;

    background: url(${bannerBg}) no-repeat local top center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(min-width: 1024px) {
        padding: 90px 48px 150px;
    }

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
        text-align: center;

        @media(min-width: 1024px) {
            font-size: 41px;
        }
    }
`
