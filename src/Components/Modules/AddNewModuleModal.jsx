import React, {useState} from 'react'
import {Modal, Input, Checkbox, message } from 'antd'
import {setIsModalVisibleModule,getDataModulesName,getDataModulesColor,getDataModules,setIdModule} from '../../redux/reducers/mainReducer';
import {useDispatch, useSelector} from 'react-redux';

function AddNewModuleModal() {
    const dispatch = useDispatch();
    const isModalVisibleModule = useSelector((store)=>store.data.isModalVisibleModule)
    const module = useSelector((store)=>store.data.module)
    const modules = useSelector((store)=>store.data.modules)
    const [inputValueName,setInputValueName] = useState('')
/*    console.log(modules) */
   
 
      const handleOk = () => {
     if(modules.map(item=>Object.values(item).includes(module.nameModules))[0]){message.warning('Такое имя модуля уже существует! В дальнейшем мы удалим повтор')}
      
       dispatch (setIsModalVisibleModule(false))
       dispatch (getDataModules(module))
       dispatch(getDataModulesColor(module.colorModules))
       dispatch(setIdModule(Date.parse(new Date)))
       setInputValueName('')
      };
    
      const handleCancel = () => {
        dispatch (setIsModalVisibleModule(false))
      };

      function handleInputChange(e){
        dispatch(getDataModulesName(e.target.value))
        setInputValueName(e.target.value)
      }
  return (
    <Modal title="Добавить модуль" visible={isModalVisibleModule} onOk={handleOk} onCancel={handleCancel} >
    
    <p>Название</p>
    <Input value={inputValueName} onChange={(e)=>handleInputChange(e)}/>
    <p>Цвет</p>
    <div className='block-color-container' >
        <div id='red' className={module.colorModules !=='red'?'block-color red ' :' block-color red border' } onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>

        <div id='orange' className={module.colorModules !=='orange'?'block-color orange ' :' block-color orange border' } onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>

        <div id='green' className={module.colorModules !=='green'?'block-color green ' :' block-color green border' } onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>

        <div id='yellow' className={module.colorModules !=='yellow'?'block-color yellow ' :' block-color yellow border' }  onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>

        <div id='blue'  className={module.colorModules !=='blue'?'block-color blue ' :' block-color blue border' } onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>

        <div id='pink' className={module.colorModules !=='pink'?'block-color pink ' :' block-color pink border' }  onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>

        <div id='light-blue' className={module.colorModules !=='light-blue'?'block-color light-blue ' :' block-color light-blue border' }   onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>

        <div id='purple' className={module.colorModules !=='purple'?'block-color purple ' :' block-color purple border' }   onClick={(e)=>dispatch(getDataModulesColor(e.target.id))}></div>
    </div>
  </Modal>
  )
}

export default AddNewModuleModal