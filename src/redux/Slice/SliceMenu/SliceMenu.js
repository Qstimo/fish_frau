import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




export const fetchDataMenu = createAsyncThunk('Menu/fetchDataMenu', async () => {
    try {
        const { data } = await axios.get(`https://6626bd55b625bf088c068351.mockapi.io/api/primer`)
        return data
    } catch (error) {
        throw new Error(error)
    }
})





const initialState = {
    data: [],

}

const SliceMenu = createSlice({
    name: 'Menu',
    initialState,
    status: '',
    extraReducers: (builder) => {
        builder.addCase(fetchDataMenu.pending, (state, action) => {
            state.data = [];
            state.status = 'loading';
        });
        builder.addCase(fetchDataMenu.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchDataMenu.rejected, (state, action) => {
            state.data = [];
            state.status = 'error'
        });
    }
})


export const { } = SliceMenu.actions
export const menuReduser = SliceMenu.reducer