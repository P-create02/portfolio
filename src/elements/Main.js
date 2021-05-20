import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logoback from '../images/logoBack.png'
import AOS from 'aos'
import { motion } from 'framer-motion'
const words = ['websites', 'applications', 'logos', 'needThis'];


export default function Main() {
    const [count, setCount] = useState(0); 
    const [index, setIndex] = useState(0); 
    const [reverse, setReverse] = useState(false);

    useEffect(() =>{
        if(count === words.length - 1) setCount(0)
        if(index === words[count].length + 1 && !reverse){
            setReverse(true)
            return
        }
        if(index === 0 && reverse){
            setReverse(false)
            setCount((prev) => prev + 1)
            return
        }
        const timeout = setTimeout(() =>{
            setIndex((prev) => prev + (reverse ? -1 : 1))
        }, 400)
        return() => clearTimeout(timeout)
    }, [count, index, reverse])

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <Wrapper>
            <motion.img src={logoback} alt="back" className='secondOne aside' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} />
            <motion.img src={logoback} alt="back" className='fourOne aside' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}} />
            <motion.div className='prime' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
                    <img src={logoback} alt="back" className='mainOne'/>
                    <div className="text">
                        <motion.h1 initial={{x: '-100vw'}} animate={{x: 0}}  transition={{duration: 1.5}}>WOJCIECH SIKORA</motion.h1>
                        <motion.h3 initial={{x: '100vw'}} animate={{x: 0}}  transition={{duration: 1.5}}>FrontEnd Developer</motion.h3>
                        <motion.h4 initial={{x: '-100vw'}} animate={{x: 0}}  transition={{duration: 1.5}} className='desc'>-<span className="typing">{`${words[count].substring(0, index)}`}</span></motion.h4>
                    </div>
            </motion.div>
            <motion.img src={logoback} alt="back" className='thirdOne aside' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} />
            <motion.img src={logoback} alt="back" className='fithOne aside' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100vh;
    position: relative;
    background: #222;
    @keyframes spinner{
    0% {
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg) scale(0.75);
    }
    100% {
        transform: rotate(0deg) scale(1);
    }
    }
    .secondOne{
        position: absolute;
        top: 10%;
        left: 4%;
        width: 200px;
        height: 200px;
    }
    .fourOne{
        position: absolute;
        top: 70%;
        left: 8%;
        width: 100px;
        height: 100px;
        &:hover{animation: spinner 1s infinite;}
    }
    .thirdOne{
        position: absolute;
        top: 10%;
        right: 4%;
        width: 200px;
        height: 200px;
    }
    .fithOne{
        position: absolute;
        top: 70%;
        right: 8%;
        width: 100px;
        height: 100px;
        &:hover{animation: spinner 1s infinite;}
    }
    .mainOne, .secondOne, .thirdOne{
        animation: spinner 4s infinite;
    }
    .prime, .text{
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .text{
        color: #fff;
        .desc{text-transform: uppercase; letter-spacing: 7.5px;
            .typing{
                color: var(--clr-primary-8);
                &::after {
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 95%;
                    border-right: 2px solid var(--clr-primary-8);;
                    animation: blink 0.4s infinite ease;
                }

                @keyframes blink {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            }
        }
        h1{
            font-weight: bold;
            font-size: 6rem;
            color: var(--clr-primary-8);
            @media (max-width: 768px){font-size: 4rem;}
            @media (max-width: 410px){font-size: 3rem;}
        }
        h3{
            font-weight: 400;
            letter-spacing: 0.25rem;
        }
    }
    @media (max-width: 1200px){
        .aside{display: none;}
        .mainOne{width: 50vw;}
    }
`