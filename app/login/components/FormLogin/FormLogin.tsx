'use client'

import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import MyAssButton from '@/components/MyAssButton/MyAssButton';
import React, { useState } from 'react'
import postRequest from '@/helpers/postRequest';
import login from '../../interfaces/login';
import useMyErrList from '@/hooks/useMyErrList';
import {login as loginValidation} from '@/helpers/validations'
import MyInput from '@/components/MyInput/MyInput'
import { signIn } from "next-auth/react"

export default function FormLogin({
  setErrMsg,
  setIsWrapping,
}: {
  setErrMsg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWrapping: React.Dispatch<React.SetStateAction<boolean>>;
}) 
{
  const [formData, setFormData] = useState<login>({ email: "", password: "" });
  const [errList] = useMyErrList(formData, loginValidation);
  const [load, setLoad] = useState<boolean>(false);

  async function submittingForm(e:any) 
  {
    e.preventDefault();

    if (errList !== "ok") return;

   const form = new FormData();
    form.append("correo", formData.email);
    form.append("clave", formData.password);

  
    setLoad(true);
    postRequest(form, "login").then(async(res) => {
      setLoad(false);
      if (res === false||res.tipo!=='ADMI') return setErrMsg(true);
      setIsWrapping(true)
      await signIn("credentials", {
        user: JSON.stringify(res),
        redirect: true,
        callbackUrl: "/dashboard",
      });
      
    });
  }

  return (
    <>
      <form className={`flex flex-col gap-[2rem]`} onSubmit={submittingForm}>
        <MyInput
          placeHolder={"Email"}
          value={formData.email}
          icon={faEnvelope}
          err={errList?.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <MyInput
          placeHolder={"Password"}
          value={formData.password}
          icon={faLock}
          err={errList?.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          type={"password"}
        />
        <MyAssButton
          type={"submit"}
          label={"LOGIN"}
          isLoad={load}
          disabled={errList !== "ok"}
        />
      </form>
    </>
  );
}




