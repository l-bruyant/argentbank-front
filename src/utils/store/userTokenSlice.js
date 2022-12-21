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
        }
        // tokenAdd: (state, action) => {
        //     state.value = action.payload
        // }
    }
})

export const { tokenRemove, tokenAdd } = userTokenSlice.actions

export default userTokenSlice.reducer