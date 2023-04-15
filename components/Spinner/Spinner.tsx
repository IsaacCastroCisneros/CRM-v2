import React from 'react'

interface props
{
   styles?:string;
   isButtonLoad?:boolean;
   color?:string;
   size?:number
}

export default function Spinner({styles,isButtonLoad=false,color='#fff',size=15}:props) 
{
  const buttonLoad = '!absolute !left-0 !top-[50%] translate-y-[-50%]'

  return (
    <div className={`flex w-[100%] justify-center ${isButtonLoad ? buttonLoad:''} ${styles}`}>
        {/* <ClipLoader color={color} size={size} /> */}
        heeeey
    </div>
  )
}
