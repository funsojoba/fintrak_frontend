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
import ErrorMsg from "../../components/typography/errorMsg";

import { useState, useEffect } from "react";
import { connect } from "react-redux";
import fetchIncome from "../../redux/action/income/getIncome";
import fetchIncomeCSV from "../../redux/action/income/incomeCSV";
import addIncome from "../../redux/action/income/addIncome";

import validate from "./validate";
import { Formik } from "formik";

import Loader from 'react-spinners/SyncLoader'


const IncomePage = ({ fetchIncome, incomeData, fetchIncomeCSV, addIncome, addIncomeData }) => {
    const graphLabel = []
    const graphInfo = []

    const totalIncome = incomeData.data ? incomeData.data.total_income : 0
    const incomePerSource = incomeData.data ? incomeData.data.income_per_source : []
    const incomePerMonth = incomeData.data ? incomeData.data.income_per_month : []

    const currency = incomeData && incomeData.data ? incomeData.data.currency : '$'

    for (let i = 0; i < incomePerSource.length; i++) {
        graphLabel.push(incomePerSource[i].source)
    }
    for (let i = 0; i < incomePerSource.length; i++) {
        graphInfo.push(incomePerSource[i].source_total)
    }

    useEffect(() => { fetchIncome() }, [fetchIncome])
    const [modalState, setmodalState] = useState(false)

    const closeModal = () => {
        setmodalState(false)
    }

    const openModal = () => {
        setmodalState(true)
    }

    const selectDates = [
        { key: "July", value: "July" },
        { key: "June", value: "June" },
        { key: "May", value: "May" },
        { key: "April", value: "April" },
        { key: "March", value: "March" },
        { key: "February", value: "February" },
        { key: "January", value: "January" },
        { key: "others", value: "others" },
    ]
    const selectOptions = [
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


    const data = {
        labels: graphLabel,
        datasets: [
            {
                label: 'Income',
                data: graphInfo,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
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
            title="Add income"
            display={modalState ? "flex" : "none"}
            close={closeModal}>
            <Formik
                validationSchema={validate}
                initialValues={{
                    amount: '',
                    source: '',
                    description: '',
                    income_date: ''
                }}
                onSubmit={async (values) => {
                    await (addIncome(values))
                    closeModal()
                }
                }
            >
                {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <FormContent>
                            <Label>Amount</Label>
                            <Input
                                value={values.amount}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="amount"
                                type="number"
                                name="amount"
                                width="100%" />
                            <ErrorMsg>{touched.amount && errors.amount ? errors.amount : null}</ErrorMsg>
                        </FormContent>
                        <FormContent>
                            <Label>Source</Label>
                            <Select name="source" value={values.source} background="#F5F5F5" width="100%" padding="15px" options={selectOptions}>
                            </Select>
                        </FormContent>
                        <FormContent>
                            <Label>Description</Label>
                            <Input
                                value={values.description}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Salary for the month of July"
                                type="text"
                                name="description" width="100%" />
                            <ErrorMsg>{touched.description && errors.description ? errors.description : null}</ErrorMsg>
                        </FormContent>
                        <FormContent>
                            <Label>Date</Label>
                            <Input
                                value={values.date}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="date"
                                name="income_date"
                                width="100%" />
                            <ErrorMsg>{touched.income_date && errors.income_date ? errors.income_date : null}</ErrorMsg>
                        </FormContent>
                        <Button width="100%" type="submit">{addIncomeData && addIncomeData.loading ? <Loader color="#fff" /> : 'Submit'}</Button>
                    </form>
                )}
            </Formik>
        </Modal>
        <SideBar />

        <Content>
            <DashNav>
                <div>Income</div>
                <TopDiv>
                    <Button
                        onClick={() => fetchIncomeCSV()}
                        padding="10px 20px"
                        background="#62B161"
                        color="#fff"><i className="fas fa-cloud-download-alt"></i> </Button> &nbsp; &nbsp;
                    <DashImage />
                </TopDiv>
            </DashNav>
            <Div>
                <Box flex="2" margin="3px">
                    <TopNav>
                        <form>
                            <select>
                                {selectDates.map(data => (
                                    <option key={data.key} value={data.key}>{data.key}</option>
                                ))}
                            </select>
                        </form>
                    </TopNav>
                    <Bar data={data} options={options} />
                </Box>
                <Box flex="1" margin="3px" displayFlex>
                    <div>
                        <Paragraph>Total Revenue</Paragraph>
                        <H1>{currency + totalIncome}</H1>
                    </div>
                </Box>
            </Div>

            <Div>
                <Box>
                    <TopNav>
                        <Input type="search" placeholder="Search" /> <br />
                        <Button sm onClick={openModal}><i className="fas fa-plus"></i> Add</Button>
                    </TopNav>
                    <Table>
                        <Thead>
                        
                            <Td align="left">Amount</Td>
                            <Td align="left">Source</Td>
                            <Td align="left">Description</Td>
                            <Td align="left">Date</Td>
                            <Td align="left">Action</Td>
                            
                        </Thead>

                        {incomeData && incomePerMonth ? (incomeData && incomePerMonth.map((income) => (
                            <Tr key={income.id}>
                                <Td>{incomeData.data.currency +  income.amount}</Td>
                                <Td>{income.source}</Td>
                                <Td>{income.description.trim().length > 10 ? (income.description.substring(0,10)+'...') : income.description}</Td>
                                <Td>{income.income_date}</Td>
                                <Td>
                                    <MyLink
                                        to={`/edit-income/${income.id}`}
                                        background="#62B161"
                                        color="#fff"
                                        padding="5px 20px" >Edit</MyLink>
                                </Td>

                            </Tr>
                        ))) : null}

                    </Table>
                </Box>
            </Div>
        </Content>

    </Container>
}

const mapStateToProps = (store) => ({
    incomeData: store.fetchIncomeReducer,
    addIncomeData: store.addIncomeReducer
})

const mapDispatchToProps = (dispatch) => ({
    fetchIncome: () => { dispatch(fetchIncome()) },
    fetchIncomeCSV: () => { dispatch(fetchIncomeCSV()) },
    addIncome: (values) => { dispatch(addIncome(values)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(IncomePage)