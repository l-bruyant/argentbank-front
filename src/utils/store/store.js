import { configureStore } from '@reduxjs/toolkit'
import userTokenReducer from './userTokenSlice'

export const store = configureStore({
    reducer: {
            userToken: userTokenReducer
        }
})

