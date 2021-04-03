import styled from "styled-components";

import { Section as BaseSection } from './Shared';
import smokeBg from '../../assets/smoke.jpg';

export const Section = styled(BaseSection)`
    background: url(${smokeBg}) no-repeat scroll top center;
    background-size: cover;
`

export const Ul = styled.ul`
  margin-left: 24px;
`

export const Li = styled.li`
    margin-bottom: 8px;
`
