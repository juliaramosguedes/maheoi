import styled from "styled-components";
import bannerBg from '../../assets/banner.png';

export const Section = styled.section`
    padding: 180px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(${bannerBg}) no-repeat local top center;
    background-size: cover;

    & > * {
        max-width: 1076px;
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

        @media(min-width: 1024px) {
            font-size: 41px;
        }
    }
`
