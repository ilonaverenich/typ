
import { Button , Input, Table} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {setIsModalVisible} from '../redux/reducers/mainReducer'
import NavBar from './NavBar';
import SubMenu from './SubMenu';



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
  
  const isModalVisible = useSelector((store)=>store.data.isModalVisible)
  const student = useSelector((store)=>store.data.student)
  const students = useSelector((store)=>store.data.students)
   console.log(isModalVisible)

   function addNewStudents(){
    dispatch(setIsModalVisible(true))  
    console.log(isModalVisible)
     }

/*    switch (link){
    case 'rStudents': console.log('tut rS');break;
    case 'tasks': console.log('tut tasks');break;
  
  } */

  return (
  <div className="container">
      <NavBar/>
      <div className="contentBlock">
       <SubMenu/>
        <div className='subBlock'>
          <div><h1>Таблица пользователей</h1></div>
          <div className='add-new-person-block'>
                <Button className='add-btn' onClick={()=>addNewStudents()}>
                    Добавить студента
                </Button>
              <div>
                <Input/>
              </div>
          </div>
        </div>
        <Table dataSource={students} columns={columns} />
      </div>
    </div> 
  )
}

export default Main;