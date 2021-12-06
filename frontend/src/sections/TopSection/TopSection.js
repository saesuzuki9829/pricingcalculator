import React, {useState} from 'react'
import { 
    TopContainer, 
    TopBtnWrapper, 
    TopContent,
    TopH1,
    TopP1,
    TopP3,
    TopP2,
    TopH2,
    Pulse,
    Covid } from './TopElemnts'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopSection = () => {
    const [hover, setHover] =useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <TopContainer>
            <TopContent>
                <TopP1>
                    電気通信大学石垣陽特任准教授監修
                </TopP1>
            
                <TopH1>
                    SensorCorpus IC
                </TopH1>
            
                <TopH2>その感染症対策、本当に安全ですか？</TopH2>
                <TopP2><Covid />換気・密集対策！</TopP2>
               
                <TopBtnWrapper>
                    <Link to='/download'>
                        <Pulse>
                    <Button variant='primary' 
                        onMouseEnter={onHover}
                        onMouserLeave={onHover}
                        primary='true'
                        dark='true'>
                  資料ダウンロード
                    </Button>
                    </Pulse>
                    </Link>
                </TopBtnWrapper>
            </TopContent>
        </TopContainer>
    )
}

export default TopSection
