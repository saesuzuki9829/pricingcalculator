import React, {useState} from 'react'
import { 
    TopContainer, 
    TopBtnWrapper, 
    TopContent,
    TopH1,
    TopP1,
    TopP2,
    TopP3,
    TopH2,
    Pulse } from './TopElemnts'
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
                <TopP3>ホテルや観光施設、スポーツ施設で導入実績あり！</TopP3>
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
