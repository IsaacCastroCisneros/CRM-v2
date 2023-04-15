import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

export default function ErrMsg() 
{
  return (
    <div className='bg-myRed text-[#fff] inline-flex px-[1rem] py-[.8rem] gap-[1rem] items-center rounded-[.3rem]'>
      <FontAwesomeIcon size='2xl' icon={faXmarkCircle} />
      <strong className='uppercase'>usuario o contraseña erroneos</strong>
    </div>
  );
}
