import React from 'react'
import {Button,Input,message} from 'antd';
import { useNavigate  } from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from 'axios'


function Login() {

  let navigate = useNavigate();
  const [inputName, setInputName] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  function handleSubmit (){
    
    if ((inputName.length !==0) && (inputPassword.length!==0)){
      axios.post('https://typ-back.herokuapp.com/api/auth/login',
        {
          "login": inputName,
          "password":inputPassword
        }
      ).then(res=>res.data.token).then(token=>{
        if (token){
          localStorage.setItem('token',token);
          navigate('/main')
         }
         else {
         message.error('Неверный логин или пароль!')

         }
        }
       )}
  else {
      message.error('Проверьте введенные значения');
  }
  }

  return (
    <div className='content'>
        <div className='logo'>
              <img src="https://i.postimg.cc/ZRxWF1K4/png.png" alt="logo" width={200} />
        </div>
          <h1>Вход в личный кабинет</h1>
        <div className='form'>
                 <div>
                    <p>Логин:</p>
                    <Input type='email' className='input' onChange={(e)=>setInputName(e.target.value)}/>
                    </div>
                  <div>
                    <div className='password'>
                    <p>Пароль:</p>
                    <p className='fogot-password' onClick={()=>message.warning('Плохо:) Ничем помочь Вам не можем!)')}>Забыли пароль?</p>
                  </div>

                <Input type='password' className='input' onChange={(e)=>setInputPassword(e.target.value)}/>
                </div>
                
                <Button type='primary' onClick={()=>handleSubmit()} className='submit'>Отправить</Button>
        </div>

    </div>
  )
}

export default Login