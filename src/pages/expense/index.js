import SideBar from "../../components/sideBar";
import Box from "../../components/box";
import H1 from "../../components/typography/h1";
import Paragraph from "../../components/typography/p";

import { Bar } from 'react-chartjs-2';
import { Container, TopDiv, Content, TopNav, FormContent, Div } from "./style";
import DashNav from "../../components/dashNav";
import DashImage from "../../components/dashNav/dashImage";
import { Table, Tr, Td, Thead } from "../../components/table";
import Input from "../../components/input";
import Select from "../../components/input/select";
import Button from "../../components/button";
import MyLink from "../../components/myLink/myLink";
import Modal from "../../components/modal";
import Label from "../../components/typography/label";
import { Formik } from 'formik'
import Loader from "react-spinners/SyncLoader";
import ErrorMsg from "../../components/typography/errorMsg";

import validate from './validate'
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import fetchExpense from "../../redux/action/expense/fetchExpense";
import addExpense from "../../redux/action/expense/addExpense";

import NumberFormat from "react-number-format";

import { monthsName } from '../../utils/months';


const ExpensePage = ({ fetchExpense, expenseData, addExpenseReducer, addExpense, addExpenseData}) => {
    let newDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(()=>newDate.getMonth()+1)
    
    useEffect(()=> {fetchExpense(currentMonth)}, [fetchExpense, currentMonth])
    const [modalState, setmodalState] = useState(false)

    const result = expenseData.data && expenseData.data.data.data ? expenseData.data.data.data : null;
    const graphData = expenseData && expenseData.data ? result.expense_per_month : []
    const totalExpense = expenseData.data ? expenseData.data.data.data.total_expense : 0
    const currency = expenseData.data ? expenseData.data.data.data.currency : '$'

    const changeSelect = (e)=>{
        setCurrentMonth(e.target.value)
    }


    const closeModal = () => {
        setmodalState(false)
    }

    const openModal = () => {
        setmodalState(true)
    }

    const graphLabel = []
    const graphInfo = []

    for(let i = 0; i < graphData.length; i++){
        graphLabel.push(graphData[i].category)
    }
    for(let i = 0; i < graphData.length; i++){
        graphInfo.push(graphData[i].amount)
    }

    const selectOptions = [
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


    const data = {
        labels: graphLabel,
        datasets: [
            {
                label: 'Expenses',
                data: graphInfo,
                backgroundColor: [
                    'rgba(255, 156, 156, 0.2)',
                    'rgba(255, 156, 156, 0.2)',
                    'rgba(255, 156, 156, 0.2)',
                    'rgba(255, 156, 156, 0.2)',
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },

    }
    return <Container>
        <Modal
            title="Add expense"
            display={modalState ? "flex" : "none"}
            close={closeModal}>
            <Formik
                initialValues={{
                    amount:'',
                    category:'',
                    description:'',
                    expense_date:''
                }}
                validationSchema={validate}
                onSubmit={ async (values)=>{
                    await addExpense(values)
                    closeModal()
                }}
            >{({handleSubmit, handleChange, values, errors, handleBlur, touched}) => (
                <form onSubmit={handleSubmit}>
                    <FormContent>
                        <Label>Amount</Label>
                        <Input 
                            type="number" 
                            name="amount" 
                            width="100%"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.amount} />
                        <ErrorMsg>{touched.amount&& errors.amount ? errors.amount : null}</ErrorMsg>
                    </FormContent>

                    <FormContent>
                        <Label>Category</Label>
                        <Select 
                            background="#f5f5f5" 
                            width="100%" 
                            padding="10px" 
                            options={selectOptions}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.category}
                            name="category" ></Select>

                        <ErrorMsg>{touched.category&& errors.category ? errors.category : null}</ErrorMsg>
                    </FormContent>
                    <FormContent>
                        <Label>Description</Label>
                        <Input 
                            type="text" 
                            name="description" 
                            width="100%"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}  />
                            <ErrorMsg>{touched.description && errors.description ? errors.description : null}</ErrorMsg>
                    </FormContent>
                    <FormContent>
                        <Label>Date</Label>
                        <Input 
                            type="date" 
                            name="expense_date" 
                            width="100%" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.expense_date}
                            />
                        <ErrorMsg>{touched.expense_date&& errors.expense_date ? errors.expense_date : null}</ErrorMsg>
                    </FormContent>
                    <Button type="submit">Submit</Button>
                </form>
            )}</Formik>

        </Modal>
        <SideBar />

        <Content>
            <DashNav>
                <div>Expenses</div>
                <TopDiv>
                    <Button
                        padding="10px 15px"
                        background="#62B161"
                        color="#fff"><i className="fas fa-cloud-download-alt"></i></Button> &nbsp; &nbsp;
                    <DashImage />
                </TopDiv>
            </DashNav>

            <Div>
                <Box flex="2" margin="3px">
                    <TopNav>
                        <form>
                            <select onChange={changeSelect}>
                                {monthsName.map(data => (
                                    <option key={data.number} value={data.number} selected={data.number === newDate.getMonth()+1}>{data.name}</option>
                                ))}
                            </select>
                        </form>
                    </TopNav>
                    <Bar data={data} options={options} />
                </Box>
                <Box flex="1" margin="3px" displayFlex>
                    <div>
                        <Paragraph>Total Expenses</Paragraph>
                        <H1>{expenseData.loading ? <Loader /> : <NumberFormat value={totalExpense} prefix={currency} thousandSeparator={true} displayType="text" />}</H1>
                    </div>
                </Box>
            </Div>

            <Div>
                <Box>
                    <TopNav>
                        <Input type="search" placeholder="Search" /> <br />
                        <Button onClick={openModal} ><i className="fas fa-plus"></i> Add</Button>
                    </TopNav>
                    <br />
                    <Table>
                        <Thead>
                            <Td>Amount</Td>
                            <Td>Category</Td>
                            <Td>Description</Td>
                            <Td>Date</Td>
                            <Td>Action</Td>
                        </Thead>
                        {expenseData.loading ? <Loader /> : (graphData.map(item => (
                            <Tr key={item.id}>

                                <Td><NumberFormat value={item.amount} prefix={currency} thousandSeparator={true} displayType="text" /></Td>
                                <Td>{item.category}</Td>
                                <Td>{item.description}</Td>
                                <Td>{item.expense_date}</Td>
                                <Td>
                                    <MyLink
                                        to={"/edit-expense/" + item.id}
                                        background="#62B161"
                                        color="#fff"
                                        padding="5px 20px" >Edit</MyLink>
                                </Td>

                            </Tr>
                        )))}
                        
                    </Table>
                </Box>
            </Div>
        </Content>

    </Container>
}

const mapStateToProps = (state) => ({
    expenseData: state.fetchExpenseReducer,
    addExpenseData: state.addExpenseReducer
})

export default connect(mapStateToProps, { fetchExpense, addExpense })(ExpensePage)