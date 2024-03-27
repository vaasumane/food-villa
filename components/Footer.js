import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=''>
      {/* <div className='absolute bottom-0 left-[45%]'> */}
      <div className='flex py-5 justify-center'>
        <p className='font-semibold'>Vaasu | &copy;{(new Date().getFullYear())}</p>

      </div>
      </div>
    </>
  )
}

export default Footer
