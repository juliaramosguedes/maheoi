import React from 'react'
import Head from 'next/head'

import {Instagram} from '@styled-icons/fa-brands/Instagram'


import Logo from '../assets/logo.svg'
import InConstruction from '../assets/in-construction.svg'
import { Container, Sling, Text } from '../styles/pages/Home'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Maheoi</title>
            </Head>
            <Sling>
                <InConstruction />
            </Sling>
            <Container>
                <Logo />
                <h1>Maheoi</h1>
                <h3>Tarot e reiki</h3>
                <Text>
                    Site em construção. <br/>
                    Me siga no{' '}
                    <a href="https://www.instagram.com/maheoi.xamanica">
                        <Instagram title="Perfil do Instagram da Maheoi" width="18px"/> <u>maheoi.xamanica</u>
                    </a>
                </Text>
            </Container>
        </>
    )
}

export default Home
