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
import Modal from '../../components/modal'
import deleteIncome from "../../redux/action/income/deleteIncome"
 
import Loader from "react-spinners/SyncLoader";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Formik } from 'formik'
import fetchIncomeDetail from "../../redux/action/income/incomeDetail";
import editIncome from "../../redux/action/income/editIncome"

import { Container, Content, Parent, ParentChild, Category, FormDiv, FormChild } from "./style";

const EditIncome = ({ fetchIncomeDetail, incomeData, match, deleteIncome , deleteIncomeData, editIncome, editIncomeData}) => {
    let id = match.params.id
    const selectOptions = [
        {key:"gift", value:"gift"},
        {key:"royalty", value:"royalty"},
        {key:"profits", value:"profits"},
        {key:"interest", value:"interest"},
        {key:"dividend", value:"dividend"},
        {key:"allowance", value:"allowance"},
        {key:"commission", value:"commission"},
        {key:"wages/salary", value:"wages/salary"},
        {key:"others", value:"others"},
    
    ]

    useEffect(() => {
        fetchIncomeDetail(id)
    }, [fetchIncomeDetail, id])

    const data = incomeData.data ? incomeData.data : null
    console.log('Income data---', incomeData)

    // const { amount, description, income_date, source } = incomeData.data.data
    const [modalState, setModalState] = useState(false)
    const openModal = () => {
        setModalState(true)
    }
    const closeModal = () => {
        setModalState(false)
    }

    const previous = () => {
        window.history.back()
    }
    return <Container>
        <Modal
            close={closeModal}
            display={modalState ? 'flex' : 'none'}
        >
            <Paragraph color="#AF0000" >Are you sure you want to delete this income?</Paragraph>
            <hr />
            <br />
            <em><Paragraph>{data.data && data.data.description ? data.data.description : null} | {data.currency + data.data && data.data.amount ? data.data.amount : null} | {data.data && data.data.source ? data.data.source : null}</Paragraph></em>
            <br />
            <div>
                <Button onClick={closeModal}>Cancle</Button> &nbsp;
                <Button onClick={() => deleteIncome(id)} background="#AF0000" color="#fff">{deleteIncomeData.loading ? <Loader color="#fff" /> : "Delete Account"}</Button>
            </div>
        </Modal>
        <SideBar />

        <Content>
            <DashNav>
                <>Edit Income</>
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
                                amount:'',
                                income_date:'',
                                source:'',
                                description:''
                            }}
                            onSubmit={
                                // (values)=>console.log(values)
                                async (values)=>{
                                    await editIncome(values, id)
                                }
                            }
                        >
                            {({ handleSubmit, handleBlur, handleChange, values, errors, touched, setFieldValue, setFieldTouched}) => (
                                <FormDiv onSubmit={handleSubmit}>
                                    <FormChild>
                                        <Label>Amount</Label>
                                        <Input name="amount" onChange={handleChange} width="100%" type="number" value={values.amount} />
                                    </FormChild>
                                    <FormChild>
                                        <Label>Source</Label>
                                        <Select name="source" 
                                                onChange={(value) => setFieldValue('source', value)}
                                                onBlur={() => setFieldTouched('source', true)}
                                                background="#F5F5F5" 
                                                width="100%" 
                                                padding="15px" 
                                                value={values.source}
                                                options={selectOptions}>
                                                
                                        </Select>
                                    </FormChild>
                                    <FormChild>
                                        <Label>Description</Label>
                                        <Input name="description" onChange={handleChange} width="100%" type="text" value={values.description} />
                                    </FormChild>
                                    <FormChild>
                                        <Label>Date</Label>
                                        <Input name="income_date" onChange={handleChange} width="100%" type="date" value={values.income_date} />
                                    </FormChild>
                                    <Button type="submit">{editIncomeData.loading ? <Loader color="#FFF" /> : "Update"}</Button>
                                </FormDiv>
                            )}
                        </Formik>
                    </ParentChild>
                    <ParentChild flex="1" className="hide">
                        <Box background="#EFF1FF" displayFlex>
                            <div>
                                <H3>{(data && data.currency  ? data.currency : null) + (data.data && data.data.amount ? data.data.amount : null)}</H3>
                                <Category>{data.data && data.data.source ? data.data.source : null}</Category>
                                <Paragraph>{data.data && data.data.description ? data.data.description : null}</Paragraph>
                                <hr />
                                <Small>{data.data && data.data.income_date ? data.data.income_date : null}</Small>
                            </div>
                        </Box>
                    </ParentChild>
                </Parent>
            </Box>

        </Content>

    </Container>
}

const mapStateToProps = store => ({
    incomeData: store.incomeDetailReducer,
    deleteIncomeData: store.deleteIncomeReducer,
    editIncomeData: store.editIncomeReducer
})



export default connect(mapStateToProps, { fetchIncomeDetail, deleteIncome, editIncome})(EditIncome)