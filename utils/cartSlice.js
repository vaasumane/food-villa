import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action) => {
            state.items.push(action);
        },
        removeItem:(state,action) => {
            state.items=state.items.filter(item=>item.payload.id!==action.payload)
        },
        clearItems:(state) => {
            state.items=[];
        },  
    },
});

export const {addItem,removeItem,clearItems} = cartSlice.actions;
export default cartSlice.reducer;