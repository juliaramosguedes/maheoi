import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {Box, Card, Dot, Section} from '../styles/components/SocialProof'
import {ColorGray, ColorPurple, ParagraphNoMargin} from '../styles/components/Shared'

const CustomDots = ({ onClick, active, ...props }) => (
    <li
        {...props}
        className={active ? 'active' : 'inactive'}
        onClick={() => onClick()}
    >
        <Dot className={active ? 'active' : 'inactive'} />
    </li>
);

const Banner: React.FC = () => {
    const testimonials = [
        {
            name: 'Poliana Branti',
            service: 'Reiki xamânico',
            from: 'Faxial do Soturno, RS',
            testimonial: `“Descobri o aplicativo por meio de divulgação nas redes sociais, e também por meio de uma notificação ao abrir o meu portal do aluno. Sou aluno da Anhanguera, onde curso a Bi-Graduação: Bacharelado em Administração e Tecnologia Superior em Marketing Digital. Tenho MEI por conta da produção de marketing digital, mas ficou para segundo plano, pois o Consultoria Educação está rendendo muito pra mim.”`
        },
        {
            name: 'Henrique Góes',
            service: 'Tarot terapêutico',
            from: 'Mata de São Joao, BA',
            testimonial: `“Tem me ajudado muito nesse período tão difícil que estamos vivendo. Através da renda que resgato estou conseguindo pagar meus estudos, pois isso é prioridade pra mim. Como muitos, fiquei desempregada e já estava quase trancando meu curso na faculdade, mas conheci o App, e além de ajudar a tornar meu sonho realidade (de me formar em uma graduação), também consigo ajudar outras pessoas com o mesmo objetivo.”`
        },
        {
            name: 'Poliana Branti',
            service: 'Reiki xamânico',
            from: 'Faxial do Soturno, RS',
            testimonial: `“Descobri o aplicativo por meio de divulgação nas redes sociais, e também por meio de uma notificação ao abrir o meu portal do aluno. Sou aluno da Anhanguera, onde curso a Bi-Graduação: Bacharelado em Administração e Tecnologia Superior em Marketing Digital. Tenho MEI por conta da produção de marketing digital, mas ficou para segundo plano, pois o Consultoria Educação está rendendo muito pra mim.”`
        },
        {
            name: 'Henrique Góes',
            service: 'Tarot terapêutico',
            from: 'Mata de São Joao, BA',
            testimonial: `“Tem me ajudado muito nesse período tão difícil que estamos vivendo. Através da renda que resgato estou conseguindo pagar meus estudos, pois isso é prioridade pra mim. Como muitos, fiquei desempregada e já estava quase trancando meu curso na faculdade, mas conheci o App, e além de ajudar a tornar meu sonho realidade (de me formar em uma graduação), também consigo ajudar outras pessoas com o mesmo objetivo.”`
        }
    ];

    const TestmonialCards = () =>
        testimonials.map(({ name, from, service, testimonial }, index) => (
            <Box key={`testimonial-card-${index}`}>
                <Card>
                    <h3>Sobre {service}</h3>
                    <ColorGray>
                        <p>{testimonial}</p>
                        <ParagraphNoMargin><strong>{name}</strong></ParagraphNoMargin>
                        <ParagraphNoMargin><i>{from}</i></ParagraphNoMargin>
                    </ColorGray>
                </Card>
            </Box>
        ));

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    // @ts-ignore
    return (
        <Section>
            <h2><ColorPurple>Depoimentos</ColorPurple></h2>
            <Carousel
                responsive={responsive}
                arrows={false}
                customDot={<CustomDots />}
                showDots={true}
            >
                {TestmonialCards()}
            </Carousel>
        </Section>
    )
}

export default Banner
