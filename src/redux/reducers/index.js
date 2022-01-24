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
import deleteExpenseReducer from "./expense/deleteExpenseReducer"
import addExpenseReducer from "./expense/addExpenseReducer";

import fetchBudgetReducer from "./budget";
import addBudgetIncomeReducer from "./budget/addBudget"
import addBudgetExpenseReducer from "./budget/addBudgetExpense";
import budgetDetailReducer from "./budget/budgetDetail";
import editAddIncomeReducer from "./budget/editAddIncomeReducer";
import editAddExpenseReducer from "./budget/editAddExpenseReducer"
import deleteBudgetIncomeReducer from "./budget/deleteIncomeBudgetReducer";

import userReducer from './user'
import userProfileReducer from './user/userProfileReducer'
import addAvatarReducer from "./user/addAvatarReducer";
import changePasswordReducer from "./user/changePasswordReducer"
import deleteUserReducer from "./user/deleteUserReducer";

import reportReducer from "./getReportReducer"
import forgotPasswordReducer from "./forgotPassword"

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    verifyAccountReducer,
    forgotPasswordReducer,
    
    dashboardReducer,
    fetchIncomeReducer,
    incomeDetailReducer,
    addIncomeReducer,
    deleteIncomeReducer,
    editIncomeReducer,

    fetchExpenseReducer,
    editExpenseReducer,
    expenseDetailReducer,
    deleteExpenseReducer,
    addExpenseReducer,

    fetchBudgetReducer,
    addBudgetIncomeReducer,
    addBudgetExpenseReducer,
    budgetDetailReducer,
    editAddIncomeReducer,
    editAddExpenseReducer,
    deleteBudgetIncomeReducer,

    userReducer,
    userProfileReducer,
    addAvatarReducer,
    changePasswordReducer,
    deleteUserReducer,

    reportReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer