import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import loginReducer from "./loginReducer";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    loginReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer