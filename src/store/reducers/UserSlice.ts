import {IUser} from "../../models/IUser";
import {createSlice} from "@reduxjs/toolkit";


interface UserState {
    user: IUser | {};
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: {},
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
})

export default userSlice.reducer;