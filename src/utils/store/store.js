import { configureStore } from '@reduxjs/toolkit'
import userTokenReducer from './userTokenSlice'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    userToken: userTokenReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

