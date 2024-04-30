import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'







export const fetchDataBar = createAsyncThunk('bar/fetchDataBar', async (menu='bar') => {
    const { data } = await axios.get(`https://6626bd55b625bf088c068351.mockapi.io/api/${menu}`)
    return data

})


const initialState = {
    data: [],
    status: "loading"

}

const SliceBar = createSlice({
    name: 'bar',
    initialState,
    reducers:{},
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


export const selectBarData = (state) => state.bar;
export const barReducer = SliceBar.reducer