import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instanse from '../../../axios';




export const fetchModalreview = createAsyncThunk('Modal/fetchModalreview', async (params) => {
    try {
        const { name, email, textarea } = params;
        const { data } = await instanse.post(`/send-review`, { name, email, messageUser: textarea })
        return data
    } catch (error) {
        throw new Error(error)
    }
})





const initialState = {
    data: [],
}

const SliceModalReview = createSlice({
    name: 'Review',
    initialState,
    status: '',
    extraReducers: (builder) => {
        builder.addCase(fetchModalreview.pending, (state, action) => {
            state.data = [];
            state.status = 'loading';
        });
        builder.addCase(fetchModalreview.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchModalreview.rejected, (state, action) => {
            state.data = [];
            state.status = 'error'
        });
    }
})


export const { } = SliceModalReview.actions
export const reviewReduser = SliceModalReview.reducer