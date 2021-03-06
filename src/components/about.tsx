import React from 'react'
import {Instagram} from '@styled-icons/fa-brands/Instagram'

import {Card, Flex, Image, Section} from '../styles/components/About'
import { ColorWhite, ColorYellow, Container } from '../styles/components/Shared'
import juliaRamos from '../assets/julia-ramos-maheoi.jpg'

const Banner: React.FC = () => {
    return (
        <Section>
            <Container>
                <h2><ColorYellow>Sobre mim</ColorYellow></h2>
                <Flex>
                    <Image>
                        <div>
                            <img
                                src={juliaRamos}
                                title="Julia Ramos, também conhecida como Maheoi"
                                alt="Foto de Julia Ramos, também conhecida como Maheoi"
                            />
                        </div>
                    </Image>
                    <Card>
                        <ColorWhite>
                            <h3>Julia Ramos</h3>
                            <p>Programadora durante o dia, professora à noite e nas horas vagas: oraculista e reikiana.</p>
                            <p>
                                Comecei os estudos de oráculos (tarot, baralho cigano e runas nórdicas) e iniciações em
                                reikis (usui nível 2, mestre em kundalini, mestre em Ma'Heo'O) em 2020. Senti uma conexão
                                profunda com o tarot e o reiki Ma'Heo’O e no final de 2020 comecei a oferecer meus serviços.
                            </p>
                            <p>
                                O nome Maheoi vem da minha iniciação no reiki Ma'Heo'O. Momento em que tive uma visão em que
                                adentrei numa floresta, que me levou a uma aldeia. Lá fui recebida por um xamã que me batizou
                                com esse nome.
                            </p>
                            <address>Você pode me encontrar no{' '}
                                <a href="https://www.instagram.com/juliamaheoi" title="Perfil no instagram da Maheoi">
                                    <Instagram title="Perfil do Instagram da Maheoi" width="24px"/> <u>juliamaheoi</u>
                                </a>
                                {' '}ou através do email{' '}
                                <a href="mailto:ola@maheoi.com" title="Email da Maheoi"><u>ola@maheoi.com</u></a>
                            </address>
                        </ColorWhite>
                    </Card>
                </Flex>
            </Container>
        </Section>
    )
}

export default Banner
