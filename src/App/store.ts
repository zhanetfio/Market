import {combineReducers} from "redux";
import {configureStore, ThunkAction} from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const rootReducer=combineReducers({

})
export const store=configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

//@ts-ignore
window.store=store;

export type RootStateType = ReturnType<typeof store.getState>

export type RootActionsType=any

export type AppDispatch=typeof store.dispatch

export type AppThunk<ReturnType=void>=ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>