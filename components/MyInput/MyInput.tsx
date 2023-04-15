import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeEventHandler } from 'react';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface props
{
    placeHolder?:string,
    icon?:IconProp|undefined,
    onChange?:ChangeEventHandler<HTMLInputElement> | undefined,
    err?:string;
    value?:number|string;
    type?:string
}

export default function MyInput(props:props) 
{
    const
    {
      placeHolder,
      icon=undefined,
      onChange,
      err,
      value,
      type='text'
    }=props

    const[myType,setMyType]=useState<string|undefined>(type)

    return (
      <div
        className={`flex bg-myGray2 gap-[1rem] px-[.8rem] py-[1rem] items-center rounded-[.3rem] relative border-[1px] ${
          err ? "border-myRed" : "border-myGreen"
        }`}
      >
        {icon && <FontAwesomeIcon className="text-[1.2rem]" icon={icon} />}
        <input
          type={myType}
          onChange={onChange}
          placeholder={placeHolder}
          value={value}
          className="bg-[transparent] outline-none flex-1"
        />
        {type==='password'&&
          <button className="absolute right-[24px] bg-myGray2 pl-[.5rem]"
            type='button'
            onClick={()=>setMyType(prev=> 
              {
                if(prev==='password')return 'text'
                if(prev==='text')return 'password'
              })}
           >
            {
              myType==='password'&&<FontAwesomeIcon icon={faEye} />
            }
            {
              myType==='text'&&<FontAwesomeIcon icon={faEyeSlash} />
            }
          </button>
        }

        {err && (
          <span
            title={err}
            className="bg-myRed max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis text-[#fff] absolute bottom-0 translate-y-[50%] right-0 px-[.5rem] rounded-[.5rem] py-[.2rem]"
          >
            {err}
          </span>
        )}
      </div>
    ); 
}
