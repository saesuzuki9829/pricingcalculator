import React from 'react'
import TopSection from '../sections/TopSection/TopSection'
import Co2SensorSection from '../sections/Co2SensorSection/Co2SensorSection'
import FunctionSection from '../sections/FunctionSection/FunctionSection'
import { homeObjectOne, homeObjectTwo } from '../sections/FunctionSection/Data'

const HomeScreen = () => {

    return (
        <>
        <TopSection />
        <FunctionSection {...homeObjectOne} />
        <FunctionSection {...homeObjectTwo} />
        <Co2SensorSection />

            </>
    )
}

export default HomeScreen
