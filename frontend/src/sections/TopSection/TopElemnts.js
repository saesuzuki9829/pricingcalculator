import styled, {keyframes} from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

const pulse = keyframes`
0% {
       transform: rotate(0);
   }
89% {
       transform: rotate(0) ;
   }
90% {
       transform: rotate(20deg) ;
   }  
91% {
       transform: rotate(0) ;
   }
92% {
       transform: rotate(20deg) ;
   }
93% {
       transform: rotate(0);
   }
 
`
export const Pulse= styled.div`
&>:first-child{
    animation: ${pulse} infinite 5s linear;
}
`

export const TopContainer = styled.div`
background: #282828;
display: flex;
justify-content: center;
align-items: center;
margin-left: calc(50% - 50vw);
margin-right: calc(50% - 50vw);
height: 410px;
position: relative;
z-index:1;

@media (max-width: 1482px){
    height: 430px;
}
@media (max-width: 930px){
    height: 470px;
}
@media (max-width: 700px){
    height: 510px;
}

@media (max-width: 646px){
    height: 410px;
}

@media (max-width: 425px){
    height: 360px;
}

`

export const TopContent = styled.div`
z-index:3;
max-width:50vw;
position: absolute;
padding: 0 24px;
display: flex;
flex-direction: column;
align-items: center;
left:10px;
top:40px;

@media (max-width: 646px){
    max-width:100vw;
    left:10px;
    top:10px;
}
`

export const TopBtnWrapper = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
margin-left:20vw;
`

export const TopH1 = styled.h1`
color: #fff;
font-size: 20px;
text-align: center;
margin-top:0;
padding: 0.5rem 2rem;

@media (max-width: 425px){
    font-size: 15px;
    padding: 1rem 1rem;
}

@media (max-width: 451px){
    padding: 1rem 1rem;
}
`

export const TopH2 = styled.h1`
color: #fff;
font-size: 40px;
text-align: center;
margin-top:10px;
padding: 1rem 2rem;

@media (max-width: 425px){
    font-size: 30px;
    padding: 1rem 1rem;
}

@media (max-width: 451px){
    padding: 1rem 1rem;
    margin-top:0;
}
`

export const TopP1 = styled.p`
color:#fff;
font-size:15px;
margin-bottom:0;
border-bottom: 2px solid #efb73e;
@media (max-width: 425px){
    font-size: 12px;
}
@media (max-width: 339px){
    font-size: 10px;
}
`

export const TopP3 = styled.p`
color:#000;
font-size:17px;
padding: 0.2em 0.5em;
background: #f4f4f4;
border-left: solid 5px  #efb73e;
border-bottom: solid 3px #d7d7d7;

@media (max-width: 425px){
    font-size: 14px;
}
@media (max-width: 400px){
    font-size: 13px;
}
@media (max-width: 380px){
    font-size: 12px;
}
@media (max-width: 350px){
    font-size: 11px;
}
`

export const TopP2 = styled.p`
margin-top:24px;
color:#fff;
font-size:19px;
text-align:center;
max-width:600px;
font-family: 'Zen Kurenaido', sans-serif;

@media (max-width: 425px){
    font-size: 15px;
}

`