import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";



export const fetchUser = createAsyncThunk(
    'user/fetch',
    async (login:string, thunkAPI) => {
        try {
            const response = await axios.get(`/users/${login}`);
            return response.data;
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('Пользователь не найден')
        }
    }
)