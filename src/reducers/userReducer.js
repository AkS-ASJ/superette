import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        connexion(state, action) {
            return action.payload.email
        }
    }
})

export const {connexion} = userSlice.actions
export default userSlice.reducer