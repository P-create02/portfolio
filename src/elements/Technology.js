import React from 'react'
import language from '../data/tech'
import styled from 'styled-components'

export default function Technology() {
    return (
        <Wrapper className="about-stack">
            <div className='tech-box'>
                {language.map(({id, icon, text}) =>{
                return(<div key={id} data-aos="zoom-out-down">
                    <span className='icon'>{icon}</span>
                    <span className='text'>{text}</span>
                </div>
                )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    text-align: center;
    padding: 2rem 10rem;
    .tech-box{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        color: #fff;
        div{
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 10px #000;
            padding: 1.25rem 0.5rem;
            border-radius: var(--radius);
            transition: var(--transition);
            &:hover{color: var(--clr-primary-5);}
        }
        .icon{
            font-size: 3rem;
        }
    }
    @media (max-width: 768px){
        padding: 2rem 5rem;
        .tech-box{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        }
    }
    @media (max-width: 768px){
        padding: 2rem 1rem;
    }
`