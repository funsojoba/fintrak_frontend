import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import verifyAccountReducer from "./verifyAccountReducer";

import dashboardReducer from "./dashboardReducer";

import fetchIncomeReducer from "./income/fetchIncomeReducer";
import incomeDetailReducer from "./income/incomeDetailReducer";
const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    verifyAccountReducer,
    dashboardReducer,
    fetchIncomeReducer,
    incomeDetailReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer