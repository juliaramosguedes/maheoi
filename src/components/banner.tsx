import React from 'react'

import Logo from '../assets/logo.svg'
import { Header } from '../styles/components/Banner'

const Banner: React.FC = () => {
    return (
        <Header>
            <Logo />
            <h1>Maheoi</h1>
            <h2>Tarot Terapêutico <br/> e Reiki Xamânico</h2>
        </Header>
    )
}

export default Banner
