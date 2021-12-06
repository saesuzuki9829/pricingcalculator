import styled, {keyframes} from "styled-components";
import {MdCoronavirus} from 'react-icons/md'

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
height: 430px;
position: relative;
z-index:1;

@media (max-width: 1482px){
    height: 450px;
}
@media (max-width: 930px){
    height: 490px;
}
@media (max-width: 700px){
    height: 530px;
}

@media (max-width: 646px){
    height: 430px;
}

@media (max-width: 425px){
    height: 380px;
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
align-items: center;
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
color:#fff;
font-size:17px;
padding: 0.2em 0.5em;
border-radius: 5px;
background:linear-gradient(transparent 60%, rgba(239, 183, 62, 0.6) 60%);
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
font-size:19px;
text-align:center;
max-width:600px;

position: relative;
background: #dee2e6;
padding: 5px 5px 5px 15px;
color: #000;
border-radius: 0px 10px 10px 0px;
}

@media (max-width: 425px){
    font-size: 15px;
}

`

export const Covid =styled(MdCoronavirus)`
font-size:20px;
color: #38b44a;
    display: inline-block;
  line-height: 40px;
  position: absolute;
  padding: 0em;
  background: #dee2e6  ;
  width: 40px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  left: -1.35em;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border: solid 3px white; 
  border-radius: 50%;
`