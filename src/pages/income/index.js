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


import { useState, useEffect } from "react";
import { connect } from "react-redux";
import fetchIncome from "../../redux/action/income/getIncome";
import fetchIncomeCSV from "../../redux/action/income/incomeCSV";

import validate from "./validate";
import { Formik } from "formik";
import ErrorMsg from "../../components/typography/errorMsg";


const IncomePage = ({ fetchIncome, incomeData, fetchIncomeCSV }) => {
    const graphLabel = []
    const graphInfo = []
    const graphData = incomeData ? incomeData.data.income_per_source : []

    for (let i = 0; i < graphData.length; i++) {
        graphLabel.push(graphData[i].source)
    }
    for (let i = 0; i < graphData.length; i++) {
        graphInfo.push(graphData[i].source_total)
    }

    useEffect(() => { fetchIncome() }, [fetchIncome])
    const [modalState, setmodalState] = useState(false)

    const closeModal = () => {
        setmodalState(false)
    }

    const openModal = () => {
        setmodalState(true)
    }

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
                    amount:'',
                    source:'',
                    description:'',
                    income_date:''
                }}
                onSubmit={ (values) => {
                     console.log(values)
                }}
            >
                {({handleSubmit, handleBlur, handleChange, values, errors, touched})=>(
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
                            <Select value={values.source} background="#F5F5F5" width="100%" padding="15px">
                                <option value="Gift">Gift</option>
                                <option value="Royalty">Royalty</option>
                                <option value="Profits">Profits</option>
                                <option value="Interest">Interest</option>
                                <option value="Dividend">Dividend</option>
                                <option value="Allowance">Allowance</option>
                                <option value="Commission">Commissions</option>
                                <option value="Wages/salary">Wages/Salary</option>
                                <option value="Others">Others</option>
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
                                name="expense_date" 
                                width="100%" />
                            <ErrorMsg>{touched.income_date && errors.income_date ? errors.income_date : null}</ErrorMsg>
                        </FormContent>

                        <Button width="100%" type="submit">Submit</Button>
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
                        <Select>
                            <option>Aug. 2021</option>
                            <option>July 2021</option>
                            <option>June 2021</option>
                            <option>May 2021</option>
                            <option>Apr. 2021</option>
                            <option>Mar. 2021</option>
                            <option>Feb. 2021</option>
                            <option>Jan. 2021</option>
                        </Select>
                    </TopNav>
                    <Bar data={data} options={options} />
                </Box>
                <Box flex="1" margin="3px" displayFlex>
                    <div>
                        <Paragraph>Total Revenue</Paragraph>
                        <H1>{incomeData.data.currency + ' ' + incomeData.data.total_income}</H1>
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
                            <Td>Amount</Td>
                            <Td>Source</Td>
                            <Td>Description</Td>
                            <Td>Date</Td>
                            <Td>Action</Td>
                        </Thead>
                        {incomeData.data.income_per_month.map((income) => (

                            <Tr>
                                <Td>{incomeData.data.currency + ' ' + income.amount}</Td>
                                <Td>{income.source}</Td>
                                <Td>{income.description}</Td>
                                <Td>{income.income_date}</Td>
                                <Td>
                                    <MyLink
                                        to={`/edit-income/${income.id}`}
                                        background="#62B161"
                                        color="#fff"
                                        padding="5px 20px" >Edit</MyLink>
                                </Td>

                            </Tr>
                        ))}

                    </Table>
                </Box>
            </Div>
        </Content>

    </Container>
}

const mapStateToProps = (store) => ({
    incomeData: store.fetchIncomeReducer
})

const mapDispatchToProps = (dispatch) => ({
    fetchIncome: () => { dispatch(fetchIncome()) },
    fetchIncomeCSV: () => { dispatch(fetchIncomeCSV()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(IncomePage)