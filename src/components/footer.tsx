import React from 'react'
import {Heart} from '@styled-icons/fa-solid/Heart'
import {Coffee} from '@styled-icons/fa-solid/Coffee'

import { Section } from '../styles/components/Footer'
import { ColorWhite } from '../styles/components/Shared'

const Banner: React.FC = () => {
    return (
        <Section>
            <ColorWhite>
                <p>Desenvolvido com{' '}
                    <Heart  title="Coração" width="16px" /> & <Coffee title="Café" width="18px" />
                    {' '}por <a
                        href="https://www.linkedin.com/in/julia-ramos-guedes"
                        title="Perfil no Linkedin da Julia Ramos, também conhecida como Maheoi"
                    ><u>Julia Ramos</u></a>
                </p>
                <p>&copy; Copyright 2021 - Todos os direitos reservados</p>
            </ColorWhite>
        </Section>
    )
}

export default Banner
