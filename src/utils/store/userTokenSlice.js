import { createSlice } from '@reduxjs/toolkit'

export const userTokenSlice = createSlice({
    name: 'userToken',
    initialState: {
        value: null
    },
    reducers: {
        tokenRemove: state => {
            state.value = null
        },
        tokenAdd: state => {
            state.value = 12
        },
        tokenFetchAdd: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { tokenRemove, tokenAdd, tokenFetchAdd } = userTokenSlice.actions

export default userTokenSlice.reducer