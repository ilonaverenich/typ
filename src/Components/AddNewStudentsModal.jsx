import { Modal, Input,Cascader } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { setIsModalVisible, setNameStudent, setTelegramStudent, setInstagramStudent,setLoginStudent,setModuleStudent, getListStudents} from '../redux/reducers/mainReducer';


const options = [
  {
    value: 'HTML/CSS',
    label: 'HTML/CSS',
  },
  {
    value: 'JAVASCRIPT',
    label: 'JAVASCRIPT',
  },
  {
    value: 'REACT',
    label: 'REACT',
  }
]
const AddNewStudentsModal = () => {
    const dispatch = useDispatch();
    const isModalVisible = useSelector((store)=>store.data.isModalVisible)
    const student = useSelector((store)=>store.data.student)

  
  const handleOk = () => {
    dispatch(getListStudents(student))
    dispatch(setIsModalVisible(false));
  };

  const handleCancel = () => {
    dispatch(setIsModalVisible(false));
  };

  return (
      <Modal title="Добавить студента" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
              <p>Имя Фамилия</p>
              <Input onChange={(e)=>dispatch(setNameStudent(e.target.value))}/>
              <p>Telegram</p>
              <Input onChange={(e)=>dispatch(setTelegramStudent(e.target.value))}/>
              <p>Instagram</p>
              <Input onChange={(e)=>dispatch(setInstagramStudent(e.target.value))}/>
              <p>Mail</p>
              <Input onChange={(e)=>dispatch(setLoginStudent(e.target.value))}/>
              <p>Модуль:</p> 
              <Cascader onChange={(e)=>dispatch(setModuleStudent(e[0]))} options={options} placeholder="Please select" />
            </div>
      </Modal>
  );
};

export default AddNewStudentsModal;