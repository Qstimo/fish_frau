import { configureStore } from '@reduxjs/toolkit'
import { menuReduser } from './Slice/SliceMenu/SliceMenu'
import { barReduser } from './Slice/SliceBar/SliceBar'


const store = configureStore({
    reducer: {
        menu: menuReduser,
        bar:barReduser
    }
})
export default store