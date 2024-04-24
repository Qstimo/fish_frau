import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'







export const fetchDataBar = createAsyncThunk('Bar/fetchDataBar', async () => {
    try {
        const { data } = await axios.get('https://6626bd55b625bf088c068351.mockapi.io/api/riba')
        return data
    } catch (error) {
        throw new Error(error)
    }
})





const initialState = {
    data: [],

}

const SliceBar = createSlice({
    name: 'Bar',
    initialState,
    status: '',
    extraReducers: (builder) => {
        builder.addCase(fetchDataBar.pending, (state, action) => {
            state.data = [];
            state.status = 'loading';
        });
        builder.addCase(fetchDataBar.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchDataBar.rejected, (state, action) => {
            state.data = [];
            state.status = 'error'
        });
    }
})


export const { } = SliceBar.actions
export const barReduser = SliceBar.reducer