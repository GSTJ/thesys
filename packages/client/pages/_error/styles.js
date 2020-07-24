import styled from 'styled-components';
import { THEME_COLOR, SECONDARY_BG } from "global_variables"
import { Button } from "components/atoms"

export const BgPurple = styled.div`
    background: url("./static/bg_purple.png");
    background-repeat: repeat-x;
    background-size: cover;
    background-position: left top;
    height: 100vh;
    overflow: hidden;
`
export const Error = styled.h1`
    font-size: 150px;
    font-weight: bold;
    color:white;
    margin:0;
`
export const ErrorMessage = styled.div`
    font-size: 40px;
    font-weight: bold;
    color:white;
    max-width: 500px;
    margin-bottom: 25px;
    > span {
        color: ${THEME_COLOR};
    }
`
export const ErrorContainer = styled.div`
    margin: 30px;
    ${Button}{
        color: white;
        font-size: 25px;
        width: 150px;
        height: 30px;
        margin: auto;
    }
`
export const Focus = styled.div`
    z-index:120;
    position: absolute;
    top:0;
    left:0;
    display: flex;

    width: 100vw;
    height: 100vh;

    justify-content:center;
    align-items:center;
    background-color: rgba(0,0,0,0.7);

    margin:auto;
    color: white;

    font-size:40px;
    font-weight:bold;
    text-align:center;
`

export const BoxAstronaut = styled.div`
    z-index: 110 !important;
    position: absolute;
    top: 60%;
    right: 20%;
    will-change: transform;
    animation: move-astronaut 50s infinite linear both alternate;
`
export const ObjectAstronaut = styled.img`
    animation: rotate-astronaut 200s infinite linear both alternate;
`

export const MessageOne = styled.div`
    position: absolute;
    border-radius: 100px 100px 100px 0;
    background-color: ${THEME_COLOR};
    width: 100px;
    height: 50px;
    opacity: .5;
    z-index: 20;
`
export const MessageTwo = styled.div`
    position: absolute;
    border-radius: 100px 100px 0 100px;
    background-color: ${SECONDARY_BG};
    width: 100px;
    height: 50px;
    opacity: .5;
    z-index: 20;
`

export const Messages = styled.div`
    ${MessageOne}:nth-child(1) {
        top: 60%;
        left: -120px;
        animation: glow-message-one 3s infinite 17s;
    }
    ${MessageOne}:nth-child(1) {
        top: 80%;
        left: -120px;
        animation: glow-message-one 3s infinite 3.5s;
    }
    ${MessageOne}:nth-child(2) {
        top: 20%;
        left: -120px;
        animation: glow-message-one 3s infinite 1.9s;
    }
    ${MessageOne}:nth-child(3) {
        top: 25%;
        left: -120px;
        animation: glow-message-one 3s infinite 7s;
    }
    ${MessageOne}:nth-child(4) {
        top: 75%;
        left: -120px;
        animation: glow-message-one 3s infinite 11s;
    }
    ${MessageOne}:nth-child(5) {
        top: 90%;
        left: -120px;
        animation: glow-message-one 3s infinite 13s;
    }

    ${MessageTwo}:nth-child(6) {
        top: 12%;
        right: -120px;
        animation: glow-message-two 3s infinite 4.7s;
    }
    ${MessageTwo}:nth-child(7) {
        top: 26%;
        right: -120px;
        animation: glow-message-two 3s infinite 3.5s;
    }
    ${MessageTwo}:nth-child(8) {
        top: 34%;
        right: -120px;
        animation: glow-message-two 3s infinite 1.9s;
    }
    ${MessageTwo}:nth-child(9) {
        top: 64%;
        right: -120px;
        animation: glow-message-two 3s infinite 5.2s;
    }
    ${MessageTwo}:nth-child(10) {
        top: 49%;
        right: -120px;
        animation: glow-message-two 3s infinite 2.7s;
    }
    ${MessageTwo}:nth-child(11) {
        top: 83%;
        right: -120px;
        animation: glow-message-two 3s infinite 8.3s;
    }
`

export const Star = styled.div`
    position: absolute;
    border-radius: 100%;
    background-color: #fff;
    width: 3px;
    height: 3px;
    opacity: 0.3;
    will-change: opacity;
`
export const GlowingStars = styled.div`
    ${Star}:nth-child(1) {
        top: 80%;
        left: 25%;
        animation: glow-star 2s infinite ease-in-out alternate 1s;
    }
    ${Star}:nth-child(1) {
        top: 80%;
        left: 25%;
        animation: glow-star 2s infinite ease-in-out alternate 1s;
    }
    ${Star}:nth-child(2) {
        top: 20%;
        left: 40%;
        animation: glow-star 2s infinite ease-in-out alternate 3s;
    }
    ${Star}:nth-child(3) {
        top: 25%;
        left: 25%;
        animation: glow-star 2s infinite ease-in-out alternate 5s;
    }
    ${Star}:nth-child(4) {
        top: 75%;
        left: 80%;
        animation: glow-star 2s infinite ease-in-out alternate 7s;
    }
    ${Star}:nth-child(5) {
        top: 90%;
        left: 50%;
        animation: glow-star 2s infinite ease-in-out alternate 9s;
    }
`
export const Objects = styled.div`
    img {
        z-index: 10;
        pointer-events: none;
    }
`
export const ObjectEarth = styled.img`
    position: absolute;
    top: 20%;
    left: 15%;
    z-index: 10;
`
export const ObjectMoon = styled.img`  
    position: absolute;
    top: 12%;
    left: 25%;
`
export const ObjectRocket = styled.img`
    z-index: 15;
    position: absolute;
    transform: translateX(-50px);
    top: 75%;
    pointer-events: none;
    animation: rocket-movement 200s linear infinite both running;
`
export const Stars = styled.div`
    background: url("./static/overlay_stars.svg");
    background-repeat: repeat;
    background-size: contain;
    background-position: left top;
    z-index:7;
`
export const Container = styled.div`
    @keyframes rocket-movement {
        100% {
            transform: translate(1200px, -600px);
        }
    }
    @keyframes glow-message-one {
        100% {
            width: 200px;
            left: 110%;
    
        }
    }
    @keyframes glow-message-two {
        100% {
            width: 200px;
            right: 110%;
        }
    }
    @keyframes move-astronaut {
        100% {
            transform: translate(-160px, -160px);
        }
    }

    @keyframes glow-star {
        40% {
            opacity: 0.3;
        }
        90%,
        100% {
            opacity: 1;
            transform: scale(1.2);
            border-radius: 999999px;
        }
    }
    @keyframes rotate-astronaut {
        100% {
            transform: rotate(-720deg);
        }
    }
`;