import { motion } from 'framer-motion'
import styled from 'styled-components'

import { BurgerSVG, LogoSVG } from './IconSVG'

export const Container = styled.div`
  position: sticky;
  inset: 0;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 4rem;
`

export const Logo = styled(LogoSVG)`
  height: 1.1rem;
  cursor: pointer;
`

export const Burger = styled(BurgerSVG)`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 5px;
  cursor: pointer;
`

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;

    li {
      font-size: 0.875rem;
    }

    a {
      text-decoration: none;
      color: #393c41;

      &:hover {
        color: #000;
      }
    }
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    ul {
      flex-direction: row;
      gap: 2rem;
    }
  }
`
