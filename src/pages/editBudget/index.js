import SideBar from "../../components/sideBar";
import Input from "../../components/input";
import Button from "../../components/button";
import DashImage from "../../components/dashNav/dashImage";
import DashNav from "../../components/dashNav";
import Box from "../../components/box";
import Small from "../../components/typography/small";
import Label from "../../components/typography/label";
import InfoCard from "../../components/infoCard";
// import MyLink from "../../components/myLink/myLink";
import Paragraph from "../../components/typography/p";
import ErrorMsg from "../../components/typography/errorMsg";
import Loader from "react-spinners/SyncLoader";
import { Link } from 'react-router-dom'

import { validateIncome, validateExpense } from "../addBudget/validate";
import { Container, Content, FlexDiv, FormContent, ListDiv } from "./style";

import {Formik} from 'formik'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import getBudgetDetail from "../../redux/action/budget/budgetDetail";
import editAddIncome from "../../redux/action/budget/editAddIncome";
import editAddExpense from "../../redux/action/budget/editAddExpense";


const EditBudget = ({ match, budgetData, getBudgetDetail, editAddIncome, editAddIncomeData, editAddExpense, editAddExpenseData }) => {
    console.log('data----', editAddIncomeData)

    const id = match.params.id
    useEffect(()=>{
        getBudgetDetail(id)
    }, [getBudgetDetail, id])

    const totalIncome = budgetData.data ? budgetData.data.budget.total_budget_income : 0
    const totalExpense = budgetData.data ? budgetData.data.budget.total_budget_expense : 0
    const totalBalance = budgetData.data ? budgetData.data.budget.total : 0
    const incomeList = budgetData.data ? budgetData.data.income : []
    const expenseList = budgetData.data ? budgetData.data.expense : []
    const currency = budgetData.data ? budgetData.data.currency : null

    return <Container>
        <SideBar />

        <Content>
            <DashNav>
                Edit budget
                <DashImage />
            </DashNav>
            <FlexDiv>
                <Box flexBetween>
                    <InfoCard
                        title="Estimated Revenue"
                        background="#D7FFC5"
                        amount={budgetData.loading && !budgetData.data ? <Loader color="#fff" /> : (currency + totalIncome)}
                    />
                    <InfoCard
                        title="Estimated Expenditure"
                        background="#FFD6D6"
                        amount={budgetData.loading && !budgetData.data ? <Loader color="#fff" /> : (currency + totalExpense)}
                    />
                    <InfoCard
                        title="Estimated Balance"
                        background="#EFF1FF"
                        amount={budgetData.loading && !budgetData.data ? <Loader color="#fff" /> : (currency + totalBalance)}
                    />
                </Box>
            </FlexDiv>
            <FlexDiv>
                <Box flex="1" margin="10px">
                    <Small align='center' color="#0B480A">Add Revenue</Small>
                    
                    <Formik
                        initialValues ={{
                            amount:'',
                            source:'',
                            description:''
                        }}
                        validationSchema={validateIncome}
                        onSubmit ={async (values)=>{
                            await editAddIncome(values, id)
                        }}
                    >
                        {({handleSubmit, handleChange, handleBlur, values, touched, errors})=>(
                            <form onSubmit={handleSubmit} >
                                <FormContent>
                                    <Label>Amount</Label>
                                    <Input 
                                        width="100%" 
                                        type="number" 
                                        name="amount"
                                        onChange={handleChange}
                                        values={values.amount}
                                        onBlur={handleBlur} />
                                    <ErrorMsg>{touched.amount && errors.amount ? errors.amount : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>Source</Label>
                                    <Input 
                                        width="100%" 
                                        type="text" 
                                        name="source"
                                        onChange={handleChange}
                                        values={values.source}
                                        onBlur={handleBlur} />
                                    <ErrorMsg>{touched.source && errors.source ? errors.source : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>Short Description</Label>
                                    <Input 
                                        width="100%" 
                                        type="text" 
                                        name="description"
                                        onChange={handleChange}
                                        values={values.description}
                                        onBlur={handleBlur} />
                                    <ErrorMsg>{touched.description && errors.description ? errors.description : null}</ErrorMsg>
                                </FormContent>
                                <Button background="#0B480A" type="submit">{editAddIncomeData.loading ? <Loader color="#fff" /> : 'Add Revenue'}</Button>
                            </form>
                        )}
                    </Formik>
                </Box>
                <Box flex="1" margin="10px">
                    <Small color="#AF0000" align='center' >Add Expense</Small>
                    <Formik
                        initialValues={{
                            amount:'',
                            category:'',
                            description:''
                        }}
                        validationSchema={validateExpense}
                        onSubmit={async (values)=>{
                            await editAddExpense(values, id)
                        }}
                    >{({handleSubmit, handleChange, handleBlur, errors, values, touched})=>(
                        <form onSubmit={handleSubmit} >
                        <FormContent>
                            <Label>Amount</Label>
                            <Input 
                                width="100%" 
                                type="number" 
                                name="amount"
                                onChange={handleChange}
                                values={values.amount}
                                onBlur={handleBlur}
                                 />
                            <ErrorMsg>{touched.amount && errors.amount ? errors.amount : null}</ErrorMsg>
                        </FormContent>
                        <FormContent>
                            <Label>Category</Label>
                            <Input 
                                width="100%" 
                                type="text" 
                                name="category"
                                onChange={handleChange}
                                values={values.category}
                                onBlur={handleBlur}
                                 />
                            <ErrorMsg>{touched.category && errors.category ? errors.category : null}</ErrorMsg>
                        </FormContent>
                        <FormContent>
                            <Label>Short Description</Label>
                            <Input 
                                width="100%" 
                                type="text" 
                                name="description"
                                onChange={handleChange}
                                values={values.description}
                                onBlur={handleBlur}
                                 />
                            <ErrorMsg>{touched.description && errors.description ? errors.description : null}</ErrorMsg>
                        </FormContent>
                                <Button background="#AF0000">{editAddExpenseData.loading ? <Loader color="#fff" /> : 'Add Expense'}</Button>
                    </form>
                    )}</Formik>
                </Box>
            </FlexDiv>
            <FlexDiv>
                <Box flex="1" margin="10px">
                    <Small color="#0B480A">Expected Revenue</Small>

                    {incomeList.map(item => (
                        <ListDiv key={item.id}>
                            <Link to={"edit-expense" + item.id}>
                                <Small>{item.description}</Small>
                                <Paragraph>{item.amount}</Paragraph>
                            </Link>
                        </ListDiv>
                    ))}
                </Box>
                <Box flex="1" margin="10px">
                    <Small color="#AF0000">Expected Expenditure</Small>
                    {expenseList.map(item =>(
                        <ListDiv key={item.id}>
                            <Link to={"edit-expense"+item.id}>
                                <Small>{item.description}</Small>
                                <Paragraph>{item.amount}</Paragraph>
                            </Link>
                        </ListDiv>
                    ))}
                </Box>
            </FlexDiv>
        </Content>
    </Container>
}

const mapStateToProps = state => ({
    budgetData: state.budgetDetailReducer,
    editAddIncomeData: state.editAddIncomeReducer,
    editAddExpenseData: state.editAddExpenseReducer
})

export default connect(mapStateToProps, { getBudgetDetail, editAddIncome, editAddExpense })(EditBudget)
