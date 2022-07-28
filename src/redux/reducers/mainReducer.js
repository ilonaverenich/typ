import { createReducer ,createAction} from "@reduxjs/toolkit";

const initialValue ={
    link: 'hgvnbn',
    isModalVisible: false,
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

}
export const menulink = createAction('MENU_LINK')
export const setIsModalVisible = createAction('MODAL_VISIBLE')
export const setNameStudent = createAction('SET_NAME_STUDENTS')
export const setTelegramStudent = createAction('SET_TELEGRAM_STUDENTS')
export const setInstagramStudent = createAction('SET_INSTAGRAM_STUDENTS')
export const setLoginStudent = createAction('SET_LOGIN_STUDENTS')
export const setModuleStudent = createAction('SET_MODULE_STUDENTS')
export const getListStudents = createAction('GET_LIST_STUDENTS')

export default createReducer(initialValue, {
        [menulink]: function (state,action){
            state.link = action.payload;
        },
        [setIsModalVisible]: function (state,action){
            state.isModalVisible = action.payload;
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
        }
})