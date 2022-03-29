import React from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='container mx-auto bg-sky-400 p-2 static bottom-0 text-center text-white'>
      <div className='inline'>
        Desenvolvido por Wilian Ansanello

        <a href='https://linkedin.com/in/wiliansanello'>
          <GrLinkedin className='inline mx-2' size={22} placeholder='LinkedIn' />
        </a>
        <a href='https://github.com/wiliansanello'>
          <GrGithub className='inline' size={24} placeholder='Github' />
        </a>
      </div>
    </div>
  )
}

export default Footer