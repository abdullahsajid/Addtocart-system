import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"items",
    initialState:{
        items:[]
    },
    reducers: {
        addtoqty:(state,action) => {
            const item = state.items.findIndex((item) => item.id === action.payload.id)
            if(item !== -1){
                const updateItem = [...state.items]
                updateItem[item]={
                    ...updateItem[item],
                    qty: Number(updateItem[item].qty)+1
                }
                state.items = updateItem
            }else{
                state.items.push({...action.payload,qty:1})
            }
        },
        removeqty:(state,action) => {
            const item = state.items.findIndex((item) => item.id === action.payload.id)
            if(item !== -1){
                const updateItem = [...state.items]
                // const updateQty = 
                updateItem[item] = {
                    ...updateItem[item],
                    qty:Math.max(updateItem[item].qty - 1,0)
                }
                state.items = updateItem
            }
        },
        editAbleVal:(state,action) => {
            const item = state.items.findIndex((item) => item.id === action.payload.id)
            if(item !== -1){
                const updateItem = [...state.items]
                updateItem[item] = {
                    ...updateItem[item],
                    qty:action.payload.qty
                }
                state.items = updateItem
            }else{
                state.items.push({...action.payload,qty:action.payload.qty})
            }
        }
    }
})

export const itemReduce = slice.reducer
export const {addtoqty,removeqty,editAbleVal} = slice.actions
