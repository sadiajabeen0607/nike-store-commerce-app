import React from 'react'

const SocialLinks = ({icon}) => {
  return (
    <>
      <img src={icon} alt="icon/social"
      className='w-8 h-8 flex items-center cursor-pointer md:h-6 md:w-6 sm:w-4 sm:h-4 transition-all duration-200 hover:scale-110'
      />
    </>
  )
}

export default SocialLinks