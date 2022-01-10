import React from 'react'
import TopSection from '../sections/TopSection/TopSection'
import Co2SensorSection from '../sections/Co2SensorSection/Co2SensorSection'
import FunctionSection from '../sections/FunctionSection/FunctionSection'
import { homeObjectOne, homeObjectTwo } from '../sections/FunctionSection/Data'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import {motion} from 'framer-motion'

const HomeScreen = () => {

    return (
        <>
            <Header />
        <Container>
            
        <TopSection />
           
        <motion.div
               whileHover={{scale:1.1}}
                
                >
        <FunctionSection {...homeObjectOne} />
        </motion.div>
        <Co2SensorSection />

            </Container>
            </>
    )
}

export default HomeScreen
