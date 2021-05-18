import React from 'react';
import styled from 'styled-components'
import { FaAlignRight } from "react-icons/fa"
import logo from '../images/logo.svg'
import Links from "../data/links"
import { Link } from 'react-router-dom'
import { useNavContext } from "../context"
import { motion } from 'framer-motion'
import AOS from 'aos'
import CVSrc from "../images/WojciechSikoraCV.pdf"

function Navbar() {
  const { openSidebar } = useNavContext()

  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <Wrapper>
      <motion.div className="nav-center"
      initial={{y: -200}} animate={{y: 0}}
      >
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt="logo" />  
          </Link>
          <button type="button" className="toggle-btn" onClick={openSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {Links.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
          <a href={CVSrc} target='_blank' rel="noreferrer">CV</a>
        </div>
      </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: #222;
  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: none;
    img {
      margin-bottom: 0.375rem;
    }
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
    color: var(--clr-primary-2);
  }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      a {
        margin-right: 2rem;
        text-transform: capitalize;
        color: var(--clr-white);
        font-weight: bold;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 0.5rem 0;
        &:hover {
          color: var(--clr-primary-5);
          box-shadow: 0px 2px var(--clr-primary-5);
        }
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
  @media screen and (min-width: 992px) {
    .navbar {
      background: transparent;
    }
  }
`

export default Navbar;
