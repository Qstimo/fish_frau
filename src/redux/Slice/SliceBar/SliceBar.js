import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'







export const fetchDataBar = createAsyncThunk('bar/fetchDataBar', async () => {
    const { data } = await axios.get(`https://6626bd55b625bf088c068351.mockapi.io/api/bar`)
    return data

})
export const fetchDataKitchen = createAsyncThunk('bar/fetchDataKitchen', async () => {
    const { data } = await axios.get(`https://6626bd55b625bf088c068351.mockapi.io/api/kitchen`)
    return data

})


const initialState = {
    bar: [],
    kitchen: [],
    status: "loading",
}

const SliceBar = createSlice({
    name: 'bar',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchDataBar.pending, (state, action) => {
            state.bar = [];
            state.statusBar = 'loading';
        });
        builder.addCase(fetchDataBar.fulfilled, (state, action) => {
            state.bar = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchDataBar.rejected, (state, action) => {
            state.bar = [];
            state.status = 'error'
        });
        builder.addCase(fetchDataKitchen.pending, (state, action) => {
            state.kitchen = [];
            state.status = 'loading';
        });
        builder.addCase(fetchDataKitchen.fulfilled, (state, action) => {
            state.kitchen = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchDataKitchen.rejected, (state, action) => {
            state.kitchen = [];
            state.status = 'error'
        });
    }
})


export const selectBarData = (state) => state.bar;
export const barReducer = SliceBar.reducer