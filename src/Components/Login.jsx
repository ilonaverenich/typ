import React from 'react'
import {Button,Input} from 'antd'

function Login() {
  return (
    <div className='content'>
        <div className='logo'>
        <img src="https://i.postimg.cc/ZRxWF1K4/png.png" alt="logo" width={200} />
        </div>
        <h1>Вход в личный кабинет</h1>
        <div className='form'>
        <div >
        <p>Логин:</p>
        <Input className='input'/>
        </div>
        <div>
        <div className='password'>
        <p>Пароль:</p>
        <p className='fogot-password'>Забыли пароль?</p></div>
        <Input className='input'/>
        </div>
        
        <Button type='primary' className='submit'>Отправить</Button>
        </div>

    </div>
  )
}

export default Login