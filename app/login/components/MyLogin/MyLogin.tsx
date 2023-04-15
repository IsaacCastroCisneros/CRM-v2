'use client'

import Spinner from '@/components/Spinner/Spinner';
import React,{Dispatch, SetStateAction, useState} from 'react'
import ErrMsg from '../FormLogin/components/ErrMsg';
import FormLogin from '../FormLogin/FormLogin';

export default function MyLogin() 
{
  const [errMsg, setErrMsg] = useState<boolean>(false);
  const[isWrapping,setIsWrapping]=useState<boolean>(false)

  return (
    <div className="bg-[#fff] fixed w-[100%] bg-bg-login bg-cover bg-center h-full">
      <div
        className={`fixed w-[100%] h-[100%] flex justify-center items-center transition-all duration-200 pointer-events-none bg-myBlack ${
          isWrapping ? "opacity-[.8]" : "opacity-0"
        } z-[999]`}
      >
        <Spinner size={20} />
      </div>
      <div className="justify-center container mx-auto flex items-center align-center w-screen h-screen">
        <FullForm setErrMsg={setErrMsg} setIsWrapping={setIsWrapping} errMsg={errMsg}  />
      </div>
    </div>
  );
}

interface props
{
  setErrMsg:Dispatch<SetStateAction<boolean>>;
  setIsWrapping:Dispatch<SetStateAction<boolean>>
  errMsg:boolean
}

function FullForm({setErrMsg, setIsWrapping, errMsg}:props) 
{
  return (
    <div className="max-w-[384px]">
      <div className="w-[33rem] max-w-[100%] shadow-lg">
        <div className=" bg-blue-700 mx-auto p-5">
          <img
            src="https://nuevapagina.s3.amazonaws.com/DG-Logotipo_Blanco.png"
            alt=""
            className="w-52 mx-auto"
          />
        </div>
        <div className="bg-[#fff] p-[2rem] pb-[1.5rem]">
          <h2 className="text-center font-medium text-xl text-gray-700">
            Sign In
          </h2>
          <p className="text-center text-gray-500 w-full mx-auto mt-4 mb-[2rem]">
            Ingrese su dirección de correo electrónico y contraseña para acceder
            al panel de administración.
          </p>
          <FormLogin setErrMsg={setErrMsg} setIsWrapping={setIsWrapping} />
        </div>
      </div>
      <div className="flex justify-center mt-[1rem]">{errMsg && <ErrMsg />}</div>
    </div>
  );
}
  