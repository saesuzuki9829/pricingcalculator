import React, {useState} from 'react'
import { 
    TopContainer, 
    TopBtnWrapper, 
    TopContent,
    TopH1,
    TopP3,
    TopP2,
    TopH2,
    Pulse,
    Light } from './TopElemnts'
import {Button} from 'react-bootstrap'
import { Link as Scroll } from 'react-scroll'
import {motion} from 'framer-motion'

const TopSection = () => {
    const [hover, setHover] =useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <>
           <motion.div
                initial={{
                    y:-100,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                
                >
        <TopContainer>
     
            <TopContent>
         
            <TopP2><Light />Easy! Fast! </TopP2>
                <TopH1>
                This is a demo site.
                </TopH1>
            
                <TopH2>Pricing Calculator</TopH2>
                
               
                <TopBtnWrapper>
                    <Scroll to='co2sensor' smooth={false}>
                        <Pulse>
                    <Button variant='warning' 
                        onMouseEnter={onHover}
                        onMouserLeave={onHover}
                        primary='true'
                        dark='true'>
                            Click Here!
                    </Button>
                    </Pulse>
                    </Scroll>
                </TopBtnWrapper>
            </TopContent>
           
        </TopContainer>
        </motion.div>
        </>
    )
}

export default TopSection
