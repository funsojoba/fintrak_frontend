import SideBar from "../../components/sideBar";
import DashNav from "../../components/dashNav";
import DashImage from "../../components/dashNav/dashImage";
import Box from "../../components/box";
import Input from "../../components/input";
import Button from "../../components/button";
import H3 from "../../components/typography/h3";
import Paragraph from "../../components/typography/p";
import Small from "../../components/typography/small";
import Label from "../../components/typography/label"
import Select from "../../components/input/select";
import Modal from "../../components/modal"

import Loader from "react-spinners/SyncLoader";
import { Container, Content, Parent, ParentChild, Category, FormDiv, FormChild } from "./style";
import Skeleton from 'react-loading-skeleton';
import { Formik } from "formik";
import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import fetchExpenseDetail from '../../redux/action/expense/expenseDetail'
import editExpense from '../../redux/action/expense/editExpense'


const EditExpense = ({expenseData, editExpenseData, fetchExpenseDetail, editExpense, match})=>{
    const id = match.params.id
    const data = expenseData.data
    const [modalState, setModalState] = useState(false)
    const closeModal = () => {
        setModalState(false)
    }
    const openModal = () => {
        setModalState(true)
    }
    const selectOptions = [
        { key: "------", value: "" },
        { key: "tax", value: "tax" },
        { key: "transportation", value: "transportation" },
        { key: "feeding", value: "feeding" },
        { key: "rent", value: "rent" },
        { key: "investment", value: "investment" },
        { key: "utilities", value: "utilities" },
        { key: "clothing", value: "clothing" },
        { key: "electronics", value: "electronics" },
        { key: "others", value: "others" },
    ]

    useEffect(()=>{
        fetchExpenseDetail(id)
    }, [fetchExpenseDetail, id])

    const previous = () => {
        window.history.back()
    }
    
    return <Container>
        <Modal
            close={closeModal}
            display={modalState ? 'flex':'none'}
        >
            <Paragraph color="#AF0000" >Are you sure you want to delete this income?</Paragraph>
            <hr />
            <br />
            {/* <em><Paragraph>{description + ' | ' + amount + ' | ' + source}</Paragraph></em> */}
            <br />
            <div>
                <Button onClick={closeModal}>Cancle</Button> &nbsp;
                {/* <Button onClick={() => deleteIncome(id)} background="#AF0000" color="#fff">{deleteIncomeData.loading ? <Loader color="#fff" /> : "Delete Account"}</Button> */}
            </div>
        </Modal>
        <SideBar />

        <Content>
            <DashNav>
                <>Edit Expense</>
                <DashImage></DashImage>
            </DashNav>
            <Box>
                <Parent justify="space-between">
                    <Button onClick={previous} padding="10px 15px"><i className="fas fa-long-arrow-alt-left"></i></Button>
                    <Button onClick={openModal} padding="10px 15px" background="#DB0069" color="#fff"> <i className="fas fa-trash"></i> Delete</Button>
                </Parent>

                <Parent>
                    <ParentChild flex="2">
                        <Formik
                            initialValues={{
                                amount:"",
                                category:"",
                                description:"",
                                expense_date:""
                            }}
                            onSubmit={async (values) => {
                                await editExpense(values, id)
                            }}
                        >
                            {({handleSubmit, handleChange, values, setFieldValue, setFieldTouched })=>(

                                <FormDiv onSubmit={handleSubmit}>
                                    <FormChild>
                                        <Label>Amount</Label>
                                        <Input 
                                            width="100%" 
                                            type="number" 
                                            value={values.amount}
                                            onChange={handleChange}
                                            name="amount" 
                                            />
                                    </FormChild>
                                    <FormChild>
                                        <Label>Category</Label>
                                        <Select
                                            options={selectOptions}
                                            value={values.category}
                                            name="category"
                                            width="100%" 
                                            padding="15px"
                                            background="#f5f5f5"
                                            onChange={(value)=> setFieldValue('category', value)}
                                        ></Select>
                                        
                                    </FormChild>
                                    <FormChild>
                                        <Label>Description</Label>
                                        <Input 
                                            width="100%" 
                                            type="text" 
                                            value={values.description}
                                            name="description"
                                            onChange={handleChange} />
                                    </FormChild>
                                    <FormChild>
                                        <Label>Date</Label>
                                        <Input 
                                            width="100%" 
                                            type="date"
                                            value={values.expense_date}
                                            name="expense_date"
                                            onChange={handleChange} />
                                    </FormChild>
                                    <Button type="submit">{editExpenseData.loading ? <Loader /> : 'Update'}</Button>
                                </FormDiv>
                            )}
                        </Formik>
                    </ParentChild>
                    <ParentChild flex="1">
                        <Box background="#EFDADA" displayFlex>
                        {expenseData.data === '' && expenseData.loading ?(
                            <div>
                                <Skeleton />
                            </div>) :
                            <div>
                                <H3>{expenseData && (data.currency +data.amount)}</H3>
                                <Category>{expenseData && data.category}</Category>
                                <Paragraph>{expenseData && data.description}</Paragraph>
                                <hr />
                                <Small>{expenseData && data.expense_date}</Small>
                            </div>
                        }
                        </Box>
                    </ParentChild>
                </Parent>
            </Box>

        </Content>

    </Container>
}

const mapStateToProps = store =>({
    expenseData : store.expenseDetailReducer,
    editExpenseData : store.editExpenseReducer
})

export default connect(mapStateToProps, {fetchExpenseDetail, editExpense})(EditExpense)