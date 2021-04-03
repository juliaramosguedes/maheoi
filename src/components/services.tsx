import React from 'react'
import {openPopupWidget} from "react-calendly";

import {Li, Section, Ul} from '../styles/components/Services'
import {Button, Card, ColorWhite, ColorYellow, Container, Flex} from '../styles/components/Shared'

const Banner: React.FC = () => {
    const onScheduleClick = (url) => openPopupWidget({
        url,
        prefill: {name: "", firstName: "", lastName: "", email: "", customAnswers: {}},
        pageSettings: {
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "510087",
            textColor: "6D6D6D"
        },
        utm: {
            utmCampaign: "Landing page 2021",
            utmSource: "Site",
            utmMedium: "Ad",
            utmContent: "Tarot e Reiki",
            utmTerm: "Site release"
        }
    });

    return (
        <main>
            <Section>
                <Container>
                    <h2><ColorYellow>Conheça terapias holísticas</ColorYellow></h2>
                    <Flex>
                        <Card>
                            <ColorWhite>
                                    <h3>Tarot terapêutico</h3>
                                <p>O tarot terapêutico traz uma maior compreensão e direcionamento, iluminando e se
                                    aprofundando nas
                                    questões da vida de consulente, para auxiliar em sua jornada.</p>
                                <p>É possível obter uma perspectiva sobre a questão que te interesse, de modo a estar
                                    mais
                                    bem
                                    preparade, ou orientações que ajudem a lidar e superar os desafios.</p>
                                <p>As consultas são feitas para contribuir com o seu crescimento, portanto só são
                                    acessadas
                                    as
                                    respostas que condizam com esse critério.</p>
                                <p>A duração é de 60 minutos. Nesse tempo é possível esclarecer até 3 perguntas, dependendo da
                                    profundidade de cada pergunta.</p>
                                <Button
                                    onClick={() => onScheduleClick("https://calendly.com/juliaramos/tarot")}
                                    title="Agendar uma consulta de tarot terapêutico"
                                    type="button"
                                >
                                    Agendar uma consulta
                                </Button>
                            </ColorWhite>
                        </Card>
                        <Card>
                            <ColorWhite>
                                <h3>Reiki xamânico</h3>
                                <p>O reiki xamânico Ma'Heo'O é um tratamento energético e espiritual, complementar ao
                                    tratamento da
                                    medicina tradicional.</p>
                                <p>Sua aplicação proporciona um profundo estado de relaxamento, equilibra as energias,
                                    os
                                    chakras e
                                    os corpos sutis e nos conecta à natureza.</p>
                                <p>Ma'Heo'O significa Grande Espírito e sua prática combina a energia de Ma'Heo’O com a
                                    energia da
                                    Mãe Terra, atráves dos quatro elementos (Fogo, Terra, Água e Ar).</p>
                                <p>A duração é de 60 minutos, sendo 30 minutos de aplicação e 15 minutos de conversa antes e depois da aplicação.</p>
                                <Button
                                    onClick={() => onScheduleClick("https://calendly.com/juliaramos/reiki")}
                                    title="Agendar uma consulta de reiki xamânico"
                                    type="button"
                                >
                                    Agendar uma consulta</Button>
                            </ColorWhite>
                        </Card>
                    </Flex>
                    <ColorWhite>
                        <h3>Valores</h3>
                        <p>Os serviços ofertados tem 3 opções de valor à sua escolha:</p>
                        <Ul>
                            <Li>R$35 (mínimo)</Li>
                            <Li>R$44 (suficiente)</Li>
                            <Li>R$ 53 (abundante)</Li>
                        </Ul>

                    </ColorWhite>
                </Container>
            </Section>
        </main>
    )
}

export default Banner
