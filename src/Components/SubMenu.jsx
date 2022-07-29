import React from 'react';
import { Menu } from 'antd';
import {useDispatch} from 'react-redux';
import { menulink } from '../redux/reducers/mainReducer';



function SubMenu() {
    const dispatch = useDispatch();

  return (
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
  )
}

export default SubMenu