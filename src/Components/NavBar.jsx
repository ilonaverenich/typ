import {  Menu } from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import {menulink} from '../redux/reducers/mainReducer'
import AddNewStudentsModal from './AddNewStudentsModal';
import {NavLink} from 'react-router-dom'

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

  
  
function NavBar() {
  
    const dispatch = useDispatch();
  const link = useSelector((store)=>store.data.link)
  /*     const navigate = useNavigate(); */
  console.log(link)
  return (
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
       
          
             
           
               
             
             <div className='navMenu'>
             <div className='menu'  onClick={(e)=>dispatch(menulink(e.target.id))}>
             <NavLink to='/main' id='allstudents'> 
             <span className={link == 'allstudents'?'active':''}>Все пользователи</span> </NavLink> 
             <NavLink to='/module' id='module' > <span>Модули</span>  </NavLink> 

             </div>
             </div>

       </div>
       <div className="exit">
        <img src="https://i.postimg.cc/63xNPtnT/icons8-32.png" alt="exit" />
        <span>Выйти</span>
       </div>
            <AddNewStudentsModal/>
      </div>
  )
}

export default NavBar