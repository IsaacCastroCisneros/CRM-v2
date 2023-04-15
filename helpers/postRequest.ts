import axios from "axios";

export default async function postRequest(formData:any,type:string)
{
    const res = await axios.post(gettingUrl(type),formData)
    return res.data
}

function gettingUrl(type:string)
{
    const url ='https://aula.desarrolloglobal.pe/v03/api/'

    switch(type)
    {
        case 'login':
        {
           return `${url}sesiones/login`
        }
        case 'validation':
        {
           return `${url}sesiones/verificar`
        }
        case 'logout':
        {
           return `${url}sesiones/logout`
        }
        case 'signUp':
        {
          return `${url}sesiones/registrar`;
        }
  
        default: return ''
    }
}