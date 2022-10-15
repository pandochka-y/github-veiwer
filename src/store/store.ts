import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from './modules/User/UserSlice'

const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']