import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instanse from '../../../axios';




export const fetchModalreservation = createAsyncThunk('Modal/fetchModalreservation', async (params) => {
    try {
        const { name, email, phone, date, time, guests } = params;
        console.log('params', params)
        const { data } = await instanse.post(`/send-message`, { name, email, phone, date, time, guests })
        return data
    } catch (error) {
        throw new Error(error)
    }
})


const initialState = {
    data: [],
}

const SliceModalReservation = createSlice({
    name: 'Reservation',
    initialState,
    status: '',
    extraReducers: (builder) => {
        builder.addCase(fetchModalreservation.pending, (state, action) => {
            state.data = [];
            state.status = 'loading';
        });
        builder.addCase(fetchModalreservation.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchModalreservation.rejected, (state, action) => {
            state.data = [];
            state.status = 'error'
        });
    }
})


export const { } = SliceModalReservation.actions
export const reservationReduser = SliceModalReservation.reducer