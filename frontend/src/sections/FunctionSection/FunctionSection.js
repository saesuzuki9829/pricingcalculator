import React from 'react'
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
                        <Subtitle darkText={darkText}>
                            {description}
                        </Subtitle>
                        <BtnWrap>
                            <Button variant={variant}>
                                {buttonLabel}
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                   
                    </FunctionRow>
                </FunctionWrapper>
            </FunctionContainer>
        </>
    )
}

export default FunctionSection
