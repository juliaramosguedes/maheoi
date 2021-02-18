import React from 'react'

import {Flex, Image, Section} from '../styles/components/About'
import { Card, ColorWhite, ColorYellow } from '../styles/components/Shared'
import juliaRamos from '../assets/julia-ramos.jpg'

const Banner: React.FC = () => {
    return (
        <Section>
            <h2><ColorYellow>Sobre mim</ColorYellow></h2>
            <Flex>
                <Image>
                    <div>
                        <img src={juliaRamos} alt="Julia Ramos, também conhecida como Maheoi"/>
                    </div>
                </Image>
                <Card>
                    <ColorWhite>
                        <h3>Julia Ramos</h3>
                        <p>Programadora durante o dia, professora à noite e nas horas vagas: oraculista e reikiana.</p>
                        <p>
                            Comecei os estudos de oráculos (tarot, baralho cigano e runas nórdicas) e iniciações em
                            reikis (usui nível 2, mestre em kundalini, mestre em Ma'Heo’O) em 2020. Senti uma conexão
                            profunda com o tarot e o reiki Ma'Heo’O e no final de 2020 comecei a oferecer meus serviços.
                        </p>
                        <p>
                            O nome Maheoi vem da minha iniciação no reiki Ma'Heo’O. Momento em que tive uma visão em que
                            adentrei numa floresta, que me levou a uma aldeia. Lá fui recebida por um xamã que me batizou
                            com esse nome.
                        </p>
                    </ColorWhite>
                </Card>
            </Flex>
        </Section>
    )
}

export default Banner
