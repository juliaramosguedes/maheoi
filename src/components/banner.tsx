import React from 'react'

import Logo from '../assets/logo.svg'
import { Section } from '../styles/components/Banner'

const Banner: React.FC = () => {
    return (
        <Section>
            <Logo />
            <h1>Maheoi</h1>
            <h2>Tarot e reiki</h2>
        </Section>
    )
}

export default Banner
