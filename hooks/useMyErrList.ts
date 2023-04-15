import { useEffect, useState } from 'react'

export default function useMyErrList(formData:any,validations:any) 
{
  const[errList,setErrList]=useState<any>()

  useEffect(()=>
  {
    const errors:any={}

    const{error}=validations.validate(formData,{abortEarly:false});

    if(!error)return setErrList('ok')

    error.details.forEach((err:any)=>
        {
            errors[err.context.key]=err.message
        })

    setErrList(errors)
  },[formData])

  return [errList]
}
