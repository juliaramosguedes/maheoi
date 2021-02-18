import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {Box, Card, Dot, Section} from '../styles/components/SocialProof'
import {ColorGray, ColorPurple, ParagraphNoMargin} from '../styles/components/Shared'

const CustomDots = ({ onClick, active, ...props }) => (
    <li
        {...props}
        className={active ? 'active' : 'inactive'}
        onClick={onClick}
    >
        <Dot className={active ? 'active' : 'inactive'} />
    </li>
);

const Banner: React.FC = () => {
    const testimonials = [
        {
            name: 'Fernanda Fortes',
            service: 'Reiki xamânico',
            from: 'São Bernardo do Campo, SP - Brasil',
            testimonial: `“Eu não me considero uma pessoa muito sensitiva, mas quando a Julia aplicou o reiki em mim me
                senti muito leve, como se estivesse flutuando durante toda a aplicação. Em alguns momentos também sentia
                um calor maior em algumas partes específicas do corpo, conforme o chakra que ela estava trabalhando.
                Me senti extremamente relaxada durante a aplicação e também nos dias seguintes. Achei maravilhoso
                e recomendo a todos.”`
        },
        {
            name: 'Henrique Góes',
            service: 'Tarot terapêutico',
            from: 'São Paulo, SP - Brasil',
            testimonial: `“Essa foi minha primeira consulta com o tarô e não poderia ter sido mais especial! A Júlia
                soube administrar com grande maestria nossa consulta, me deixando super confortável em expor minhas
                angústias. Ela me ajudou a entender os processos que me trouxeram até minha situação atual e quais são
                os passos mais indicados para que eu realize os meus sonhos! Graças a estas orientações, consegui mudar
                meu comportamento e assumir uma postura mais firme na empresa na qual trabalho, reconhecendo o meu
                valor. A diretoria da empresa se mostrou satisfeita com minha evolução e concordaram com um aumento de
                30% no meu salário e uma promoção para o cargo que eu buscava. Gratidão eterna!”`
        },
        {
            name: 'Poliana Branti',
            service: 'Reiki xamânico',
            from: 'Fort Lauderdale, Florida - USA',
            testimonial: `“Minha sessão de reiki xamânico foi muito especial! Já tinha feito sessões de reiki antes,
                mas essa foi muito diferente de uma maneira positiva. Senti como se estivesse em outro plano e tive
                sensações muito vívidas misturando cores e vivências. Senti uma vibração muito forte do chakra do
                coração e como se espinhos fossem arrancados. Apos a sessão me senti energizada e meu foco e atenção
                nas atividades melhoraram muito no dia seguinte. Muito obrigada, Julia”`
        },
        {
            name: 'Nami Abe',
            service: 'Tarot terapêutico',
            from: 'São Paulo, SP - Brasil',
            testimonial: `“Quero muito agradecer voce, Julia, por essa conexão maravilhosa que aconteceu. Eu já tive um
                contato breve antes com tarot mas não se compara com o que ocorreu hoje. Eu estava totalmente entregue
                e meu coração estava pulsando forte. Foi uma viagem profunda no autoconhecimento, revivi certas coisas
                em mim que estavam enterradas lá no fundo e que tinha medo de acessar, mas que agora estão clareando.
                Foi lindo ver as cartas se manifestando e o mais incrível foi ver o quanto você se conecta
                profundamente com as energias. Muito obrigada mesmo, foi surreal.”`
        }
    ];

    const TestmonialCards = () =>
        testimonials.map(({ name, from, service, testimonial }, index) => (
            <Box key={`testimonial-card-${index}`}>
                <Card>
                    <h3>{service}</h3>
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
