import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import verifyAccountReducer from "./verifyAccountReducer";

import dashboardReducer from "./dashboardReducer";

import fetchIncomeReducer from "./income/fetchIncomeReducer";
import incomeDetailReducer from "./income/incomeDetailReducer";
import addIncomeReducer from "./income/addIncomeReducer";
import deleteIncomeReducer from "./income/deleteIncomeReducer"
import editIncomeReducer from "./income/editIncomeReducer";

import fetchExpenseReducer from "./expense/fetchExpenseReducer";
import expenseDetailReducer from "./expense/expenseDetailReducer";
import editExpenseReducer from "./expense/editExpenseReducer";


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
    incomeDetailReducer,
    addIncomeReducer,
    deleteIncomeReducer,
    editIncomeReducer,

    fetchExpenseReducer,
    editExpenseReducer,
    expenseDetailReducer
    
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer