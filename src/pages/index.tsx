import React from 'react'
import Head from 'next/head'

import { Banner, Services, SocialProof, AboutMe } from '../components'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Maheoi</title>
            </Head>
            <Banner />
            <Services />
            <SocialProof />
            <AboutMe />
        </>
    )
}

export default Home
