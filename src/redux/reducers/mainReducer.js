import { createReducer ,createAction} from "@reduxjs/toolkit";

const initialValue ={
    link: 'hgvnbn',
    isModalVisible: false,
    isModalVisibleModule: false,
    student: {
        name:'',
        telegram:'',
        instagram:'',
        login:'',
        nameModule:'',
        getStart:'28.07.2022',
        deistvie:'Пригласить',
        another:'Изменить'
    },
    students:[],
    module: {
        nameModules:'',
        colorModules:'red',
        id:Date.parse(new Date)
    },
    editSudentModule:{
        id:'',
        value:''
    }
    ,
    isEditModule:false,
    modules:[]

}
export const menulink = createAction('MENU_LINK')
export const setIsModalVisible = createAction('MODAL_VISIBLE')
export const setIsModalVisibleModule = createAction('MODAL_VISIBLE_MODULE')
export const setNameStudent = createAction('SET_NAME_STUDENTS')
export const setTelegramStudent = createAction('SET_TELEGRAM_STUDENTS')
export const setInstagramStudent = createAction('SET_INSTAGRAM_STUDENTS')
export const setLoginStudent = createAction('SET_LOGIN_STUDENTS')
export const setModuleStudent = createAction('SET_MODULE_STUDENTS')
export const getListStudents = createAction('GET_LIST_STUDENTS')
export const setIdModule = createAction('SET_ID_MODULE')

 export const setNewTitleModule = createAction('SET_NEW_TITLE_MODULE') 

export const getDataModulesName = createAction('GET_DATA_MODULES_NAME')
export const getDataModulesColor = createAction('GET_DATA_MODULES_COLOR')

export const changeEditModule = createAction('CHANGE_EDIT_MODULE')

export const getDataModules = createAction('GET_DATA_MODULES')

export const closeModuleWindow = createAction('DELETE_WINDOW_MODULE')

export default createReducer(initialValue, {
        [menulink]: function (state,action){
            state.link = action.payload;
        },
        [setIsModalVisible]: function (state,action){
            state.isModalVisible = action.payload;
        },
        [setIsModalVisibleModule]: function (state,action){
            state.isModalVisibleModule = action.payload;
        },
        [setNameStudent]: function (state,action){
            state.student.name = action.payload;
        },
        [setTelegramStudent]: function (state,action){
            state.student.telegram = action.payload;
        },
        [setInstagramStudent]: function (state,action){
            state.student.instagram = action.payload;
        },
        [setLoginStudent]: function (state,action){
            state.student.login = action.payload;
        },
        [setModuleStudent]: function (state,action){
            state.student.nameModule = action.payload;
        }
        ,
        [getListStudents]: function (state,action){
            state.students =[...state.students, action.payload];
        },
        [getDataModulesName]: function (state,action){
            state.module.nameModules = action.payload.toUpperCase();
        },
        [getDataModulesColor]: function (state,action){
            state.module.colorModules = action.payload;
        },
        [setIdModule]: function (state,action){
            state.module.id = action.payload;
        },
        [getDataModules]: function (state,action){
            state.modules =[...state.modules, action.payload];
        },
        [changeEditModule]: function (state,action){
            state.isEditModule = action.payload;
        },
        [closeModuleWindow]: function (state,action){
            state.modules= [ ...state.modules.filter(item=> action.payload !== item.id)]}
            ,
        [setNewTitleModule]: function (state,action){
           /*  state.editSudentModule = action.payload */
           state.module.nameModules = (action.payload == state.module.id)? 'hello': action.payload.toUpperCase() 
        }
        
        
          /*    */
        },
            
)


/*  return  [ ...state.map((item) => item.id === action.payload.id ? {...item, textTask: action.payload.value} : item)] } */