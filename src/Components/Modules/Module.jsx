import React, {useState} from 'react'
import NavBar from '.././NavBar';
import SubMenu from '../SubMenu';
import {Button,Input} from 'antd';
import AddNewModuleModal from './AddNewModuleModal';
import {setIsModalVisibleModule,closeModuleWindow,changeEditModule,setNewTitleModule} from '../../redux/reducers/mainReducer';
import {useDispatch, useSelector} from 'react-redux';

function Module() {
  const dispatch = useDispatch();
  const modules =useSelector((store)=>store.data.modules)
  const module =useSelector((store)=>store.data.module)
  const click =useSelector((store)=>store.data.isEditModule)

  const [value,setValue] = useState('')
  console.log(module)
 
  function handleOK(id){
    dispatch(setNewTitleModule(value))
    console.log(value)
    dispatch(changeEditModule(false))
    

    
/*     dispatch(getDataModulesName(item)) */

  }

 function handleChange(e){
  /* setNewTitleModule(e.target.value) */
  setValue(e.target.value);
  
  }

  return (
    <div className='container'>
      <NavBar/>
      <div className="contentBlock">
        <SubMenu/>
          <div className='block-module-title'>
            <div className='name-module'>Модули</div>
            <AddNewModuleModal/>
            <div><Button className='add-btn' onClick={()=>dispatch(setIsModalVisibleModule(true))}>Добавить модуль</Button></div>
          </div>
          <div className='module_container'>
            {modules && modules.map((item,id)=><div className='cards-module' >
                 <div className='cards-module-block'>
                 <div className='title-module'>{click?<Input value={value} onChange={(e)=>handleChange(e)} className='edit-input'/>: module.nameModules}</div>
                 <div className={item.colorModules +' '+ 'circle'}></div>
                 </div>
                 
                <div className='block-icons'>
                  <div>
                    {
                      click
                           ?
                           /* галочка */
                           <img onClick={()=>handleOK(item.id)} 
                           src={'https://i.postimg.cc/HnkRPrcd/icons8-32.png'} 
                            width={20} alt="icon-edit" />
                            :
                            <img 
                            onClick={()=>dispatch(changeEditModule(true))} 
                            src={'https://i.postimg.cc/Y24dVC58/icons8-32.png'} 
                            width={20} alt="icon-edit" />}</div>

                  <div ><img onClick={()=>dispatch(closeModuleWindow(item.id))}  src="https://i.postimg.cc/053pJGH0/icons8-32.png" width={20} alt="icon-close" /></div>
                </div>
               </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default Module