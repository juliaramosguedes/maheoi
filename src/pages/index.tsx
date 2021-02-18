import React from 'react'
import Head from 'next/head'

import { Banner, Services, SocialProof } from '../components'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Maheoi</title>
            </Head>
            <Banner />
            <Services />
            <SocialProof />
        </>
    )
}

export default Home
