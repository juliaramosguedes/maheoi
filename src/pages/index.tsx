import React from 'react'
import Head from 'next/head'

import { Banner, Services, SocialProof, AboutMe, Footer } from '../components'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Maheoi: Tarot Terapêutico e Reiki Xamânico Online</title>
            </Head>
            <Banner />
            <Services />
            <SocialProof />
            <AboutMe />
            <Footer />
        </>
    )
}

export default Home
