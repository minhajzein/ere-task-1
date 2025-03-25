import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setCredentials: (state, action) => state.user = action.payload
    }

})

export const { setCredentials } = userSlice.actions

export default userSlice.reducer;