import {IUser} from "../../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser} from "./ActionCreators";


interface UserState {
    user: IUser | null;
    redirectTo: string;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: null,
    redirectTo: '',
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearRedirect(state) {
            state.redirectTo = '';
            state.error = '';
        }
    },
    extraReducers: {
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.redirectTo = action.payload.login
            state.user = action.payload
        },
        [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    },
})
export const {clearRedirect} = userSlice.actions
export default userSlice;