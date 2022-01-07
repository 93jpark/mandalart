import { configureStore } from '@reduxjs/toolkit'
import mandalartReducer from '../mandalart/mandalartSlice'

export default configureStore({
    reducer: {
        mandalart: mandalartReducer,
    },
})