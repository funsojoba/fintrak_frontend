import SideBar from "../../components/sideBar";
import Input from "../../components/input";
import Button from "../../components/button";
import DashImage from "../../components/dashNav/dashImage";
import DashNav from "../../components/dashNav";
import Box from "../../components/box";
import Small from "../../components/typography/small";
import Label from "../../components/typography/label";
import InfoCard from "../../components/infoCard";
import Select from "../../components/input/select";
import ErrorMsg from "../../components/typography/errorMsg";

import { Container, Content, FlexDiv, FormContent, ListDiv } from "./style";
import Paragraph from "../../components/typography/p";

import fetchBudget from "../../redux/action/budget";
import { connect } from "react-redux";
import { useEffect } from "react";
import Loader from "react-spinners/SyncLoader";
import { Formik } from "formik";
import { validateIncome, validateExpense} from './validate'

import addIncomeBudget from "../../redux/action/budget/addIncomeBudget";
import addBudgetExpense from "../../redux/action/budget/addBudgetExpense";
import NumberFormat from "react-number-format";


const AddBudget = ({ fetchBudget, budgetData, addIncomeData, addIncomeBudget, addBudgetExpense, addExpenseData})=>{
    useEffect(() => {
        fetchBudget()
    }, [fetchBudget])

    const totalIncome = budgetData.data ? budgetData.data.total_income : 0
    const totalExpense = budgetData.data ? budgetData.data.total_expense : 0
    const totalBalance = budgetData.data ? budgetData.data.budget_balance : 0
    const currency = budgetData.data ? budgetData.data.currency : '$'
    const income = budgetData.data ? budgetData.data.income : []
    const expense = budgetData.data ? budgetData.data.expense : []
    
    const incomeSource = [
        { key: "-----", value: "" },
        { key: "gift", value: "gift" },
        { key: "royalty", value: "royalty" },
        { key: "profits", value: "profits" },
        { key: "interest", value: "interest" },
        { key: "dividend", value: "dividend" },
        { key: "allowance", value: "allowance" },
        { key: "commission", value: "commission" },
        { key: "wages/salary", value: "wages/salary" },
        { key: "others", value: "others" },
    ]
    const expenseCategory = [
        { key: "-----", value: "" },
        { key: "tax", value: "tax" },
        { key: "transportation", value: "transportation" },
        { key: "feeding", value: "feeding" },
        { key: "rent", value: "rent" },
        { key: "investment", value: "dividend" },
        { key: "utilities", value: "utilities" },
        { key: "clothing", value: "clothing" },
        { key: "electronics", value: "electronics" },
        { key: "shopping", value: "shopping" },
        { key: "others", value: "others" },
    ]



    return <Container>
        <SideBar />

        <Content>
            <DashNav>
                Add budget
                <DashImage />
            </DashNav>
            <FlexDiv>            
                <Box flexBetween>
                    <InfoCard
                        title="Estimated Revenue"
                        background="#D7FFC5"
                        amount={budgetData.loading || !budgetData.data ? <Loader /> : <NumberFormat value={totalIncome} prefix={currency} thousandSepartor={true} displayType="text" />}
                    />
                    <InfoCard
                        title="Estimated Expenditure"
                        background="#FFD6D6"
                        amount={budgetData.loading || !budgetData.data ? <Loader /> : <NumberFormat value={totalExpense} prefix={currency} thousandSepartor={true} displayType="text" />}
                    />
                    <InfoCard
                        title="Estimated Balance"
                        background="#EFF1FF"
                        amount={budgetData.loading || !budgetData.data ? <Loader /> : <NumberFormat value={totalBalance} prefix={currency} thousandSepartor={true} displayType="text" />}
                    />
                </Box>
            </FlexDiv>
            <FlexDiv>
                <Box flex="1" margin="10px">
                    <Small color="#0B480A">Add Revenue</Small>
                    <Formik
                    validationSchema={validateIncome}
                    initialValues={{
                        amount:'',
                        source:'',
                        description:''
                    }}
                    onSubmit={
                        async (values)=>{
                            await addIncomeBudget(values)
                        }
                    }
                    >
                        {({ handleChange, handleSubmit, values, handleBlur, touched, errors})=>(
                            <form onSubmit={handleSubmit}>
                                <FormContent>
                                    <Label>Amount</Label>
                                    <Input 
                                        width="100%" 
                                        type="number" 
                                        name="amount"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.amount}
                                         />
                                    <ErrorMsg>{touched.amount && errors.amount ? errors.amount : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>Source</Label>
                                    <Select
                                        background="EAEAEA"
                                        padding= "10px"
                                        width="100%" name="source"
                                        options={incomeSource}
                                        onChange = {handleChange}
                                        onBlur={handleBlur}
                                        value={values.source}
                                    ></Select>
                                    <ErrorMsg>{touched.source && errors.source ? errors.source : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>Short Description</Label>
                                    <Input 
                                        width="100%" 
                                        type="text" 
                                        name="description" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        />
                                    <ErrorMsg>{touched.description && errors.description ? errors.description : null}</ErrorMsg>
                                </FormContent>
                                <Button type="submit" background="#0B480A">{addIncomeData.loading ? <Loader color="#F4ECDD"/> :'Add Revenue'}</Button>
                            </form>
                        )}
                    </Formik>
                </Box>
                <Box flex="1" margin="10px">
                    <Small align="center" color="#AF0000" >Add Expense</Small>
                    <Formik
                        validationSchema={validateExpense}
                        initialValues={{
                            amount: '',
                            category: '',
                            description: ''
                        }}
                        onSubmit={
                           async (values) => {
                               await addBudgetExpense(values)
                            }
                        }
                    >
                        {({ handleChange, handleSubmit, values, handleBlur, touched, errors }) => (
                            <form onSubmit={handleSubmit}>
                                <FormContent>
                                    <Label>Amount</Label>
                                    <Input
                                        width="100%"
                                        type="number"
                                        name="amount"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.amount}
                                    />
                                    <ErrorMsg>{touched.amount && errors.amount ? errors.amount : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>Category</Label>
                                    <Select
                                        background="EAEAEA"
                                        padding="10px"
                                        width="100%" name="category"
                                        options={expenseCategory}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.category}
                                    ></Select>
                                    <ErrorMsg>{touched.category && errors.category ? errors.category : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>Short Description</Label>
                                    <Input
                                        width="100%"
                                        type="text"
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                    <ErrorMsg>{touched.description && errors.description ? errors.description : null}</ErrorMsg>
                                </FormContent>
                                <Button type="submit" disabled={!income} background="#AF0000">{addExpenseData.loading ? <Loader color="#F4ECDD" /> : 'Add Expense'}</Button>
                            </form>
                        )}
                    </Formik>
                </Box>
            </FlexDiv>
            <FlexDiv>
                <Box flex="1" margin="10px">
                    <Small color="#0B480A">Expected Revenue</Small>
                    {budgetData.loading || !budgetData.data ? <Loader /> : income.map(item =>(
                        <ListDiv key={item.id}>
                            <Small>{item.description}</Small>
                            <Paragraph><NumberFormat value={item.amount} prefix={currency} thousandSepartor={true} displayType="text" /></Paragraph>
                        </ListDiv>
                    ))}
                
                </Box>
                <Box flex="1" margin="10px">
                    <Small color="#AF0000">Expected Expenditure</Small>
                    {budgetData.loading || !budgetData.data ? <Loader /> :  expense.map(item => (
                        <ListDiv key={item.id}>
                            <Small>{item.description}</Small>
                            <Paragraph><NumberFormat value={item.amount} prefix={currency} thousandSepartor={true} displayType="text" /></Paragraph>
                        </ListDiv>
                    ))}
                </Box>
            </FlexDiv>
        </Content>
    </Container>
}

const mapStateToProps = state => ({
    budgetData: state.fetchBudgetReducer,
    addIncomeData: state.addBudgetIncomeReducer,
    addExpenseData: state.addBudgetExpenseReducer
})

export default connect(mapStateToProps, { fetchBudget, addIncomeBudget, addBudgetExpense})(AddBudget)