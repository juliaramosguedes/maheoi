import React from 'react'
import Head from 'next/head'

import {Banner, Services} from '../components'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Maheoi</title>
            </Head>
            <Banner />
            <Services />
        </>
    )
}

export default Home
