import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto bg-sky-400 p-2 static bottom-0 text-center font-bold text-white'>
      <div className='inline'>
        Desenvolvido por Wilian Ansanello

        <a className=' inline-block align-middle p-2' href="https://linkedin.com/in/wiliansanello">
          <img src='/linkedin.png' placeholder='LinkedIn' />
        </a>
        <a className=' inline-block align-middle' href="https://github.com/wiliansanello">
          <img src='/github.png' placeholder='Github' />
        </a>
      </div>
    </div>
  )
}

export default Footer