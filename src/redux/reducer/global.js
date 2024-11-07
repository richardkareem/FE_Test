import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuIndex: 0
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers:{
        setMenuIndex: (state, actions) =>{
            state.menuIndex = actions.payload
        }
    },
})

export const {setMenuIndex} = globalSlice.actions;
export default globalSlice.reducer