import { configureStore } from '@reduxjs/toolkit'
import { menuReduser } from './Slice/SliceMenu/SliceMenu'
import { barReducer } from './Slice/SliceBar/SliceBar'


const store = configureStore({
    reducer: {
        menu: menuReduser,
        bar:barReducer
    }
})
export default store