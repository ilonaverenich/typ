import { createReducer ,createAction} from "@reduxjs/toolkit";

const initialValue ={
    link: 'hgvnbn'
}
export const menulink = createAction('MENU_LINK')

export default createReducer(initialValue,{
        [menulink]: function (state,action){
            state.link = action.payload;
        }
})