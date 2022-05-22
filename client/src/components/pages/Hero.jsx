import React from 'react'
import Doing from './Doing'
import Done from './Done'
import { HeroWrapper } from './Hero.style'
import Todo from './Todo'

const Hero = () => {
  return (
    <HeroWrapper>
      <Todo />
      <Doing />
      <Done />
    </HeroWrapper>
  )
}

export default Hero