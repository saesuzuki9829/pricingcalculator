import React, {useEffect}from 'react'
import {Button, Image} from 'react-bootstrap'
import {
    FunctionContainer,
    FunctionWrapper,
    FunctionRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
}
from './FunctionElements'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as Scroll } from 'react-scroll'


const FunctionSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    variant
}) => {

    const controls = useAnimation();
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);


    return (
        <>
     
            <FunctionContainer lightBg={lightBg} id ={id}>
                <FunctionWrapper>
                    <FunctionRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                           {topLine}
                        </TopLine>
                        <Heading lightText={lightText}>
                           {headline}
                        </Heading>
                        <Subtitle lightText={lightText}>
                            {description}
                        </Subtitle>
                        <Scroll to="co2sensor">
                        <BtnWrap>
                            <Button variant={variant}>
                                {buttonLabel}               
                            </Button>
                        </BtnWrap>
                        </Scroll>
                    </TextWrapper>
                    </Column1>
                   
                    </FunctionRow>
                </FunctionWrapper>
            </FunctionContainer>

        </>
    )
}

export default FunctionSection