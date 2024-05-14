import { configureStore } from '@reduxjs/toolkit'
import { barReducer } from './Slice/SliceBar/SliceBar'
import { reviewReduser } from './Slice/SliceModalReview/SliceModalReview'
import { reservationReduser } from './Slice/SliceModalReservation/SliceModalReservation'



const store = configureStore({
    reducer: {
        bar:barReducer,
        review:reviewReduser,
        reservation:reservationReduser,
    }
})
export default store