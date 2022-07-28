
import { Button, Menu , Input, Table} from 'antd';
import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {menulink} from '../redux/reducers/mainReducer'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [

  getItem('Все пользователи', 'allstudents',null, [
    getItem('Динамика студентов', 'dStudents'),
    getItem('Рейтинг благодарности', 'rStudents'),
  ]),
  getItem('Модули', 'module', null),
  getItem('Теория', 'teoria', null),
  getItem('Задачи', 'tasks', null),
  getItem('Чек листы', 'checklists', null),
];
const dataSource = [
  {
    key: '1',
    name: "Pavel Guzu",
    login: "example@example.com",
    password: 123123,
    instagram: "@pgutzu",
    telegram: "@pgutzu",
    nameModule:'JavaScript',
    getStart: '12.05.2022',
    deistvie:'Пригласить',
    another: 'Изменить'
  },
  {
    key: '2',
    name: "Ilona Verenich",
    login: "iloneeechka@example.com",
    password: 1234268,
    instagram: "@iloneeechka",
    telegram: "@iloneeechka",
    nameModule:'React',
    getStart: '05.05.2022',
    deistvie:'Пригласить',
    another: 'Изменить'
  },

];

const columns = [
  {
    title: 'Имя Фамилия',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Telegram',
    dataIndex: 'telegram',
    key: 'telegram',
  },
  {
    title: 'Instagram',
    dataIndex: 'instagram',
    key: 'instagram',
  },
  {
    title: 'Логин',
    dataIndex: 'login',
    key: 'login',
  },
  {
    title: 'Название модуля',
    dataIndex: 'nameModule',
    key: 'nameModule',
  },
  {
    title: 'Дата старта',
    dataIndex: 'getStart',
    key: 'getStart',
  },
  {
    title: 'Действие',
    dataIndex: 'deistvie',
    key: 'deistvie',
  },
  {
    title: ':',
    dataIndex: 'another',
    key: 'another',
  }
];


function Main() {

  const dispatch = useDispatch();
  const link = useSelector((store)=>store.data.link)
   console.log(link)

/*    switch (link){
    case 'rStudents': console.log('tut rS');break;
    case 'tasks': console.log('tut tasks');break;
  
  } */

  return (
  <div className="container">
      <div className="navbar">
       <div className="navbar__block">
       <div className="navbar__header">
          <div className="logoRedev">
            <img src="https://i.postimg.cc/ZRxWF1K4/png.png" alt="logo" width={200} />
          </div>
          <div className="icon">
            <img src="https://i.postimg.cc/Ghr4Z1dB/icons8-24.png" width={40} alt="icon" />
          </div>
        </div>
        <div className="navMenu">
       
           <Menu
            className='menu-antd'
              style={{
                width: 256,
              }}
              
              mode="inline"
              items={items}
              onClick={(e)=>dispatch(menulink(e.key))}
              />
        </div>
       </div>
       <div className="exit">
        <img src="https://i.postimg.cc/63xNPtnT/icons8-32.png" alt="exit" />
        <span>Выйти</span>
       </div>
        
      </div>
      <div className="contentBlock">
      <Menu mode="horizontal"  onClick={(e)=>dispatch(menulink(e.key))}  defaultSelectedKeys={['mail']}> 

          <Menu.Item key="students">
            Студенты
          </Menu.Item>
          
          <Menu.Item key="dstudents">
              Динамика студентов
          </Menu.Item>

          <Menu.Item key="rStudents">
            Рейтинг благодарности
          </Menu.Item>

       </Menu>
        <div className='subBlock'>
          <div><h1>Таблица пользователей</h1></div>
          <div className='add-new-person-block'>
                <Button className='add-btn'>Добавить студента</Button>
            <div><Input/></div>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div> 
  )
}

export default Main;