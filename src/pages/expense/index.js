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
import {Formik} from 'formik'

import { useState } from "react";

const ExpensePage = ()=>{
    const [modalState, setmodalState] = useState(false)
    
    const closeModal = () => {
        setmodalState(false)
    }

    const openModal = ()=>{
        setmodalState(true)
    }

    const selectOptions = [
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
    
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Expenses',
                data: [12, 19, 3, 5],
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
            <Formik>{()=>(
                <form>
                <FormContent>
                    <Label>Amount</Label>
                    <Input placeholder="amount" type="number" name="amount" width="100%" />
                </FormContent>
                <FormContent>
                    <Label>Category</Label>
                    <Select background="#f5f5f5" width="100%" padding="10px" options={selectOptions}></Select>

                </FormContent>
                <FormContent>
                    <Label>Description</Label>
                    <Input placeholder="Rent" type="text" name="description" width="100%" />
                </FormContent>
                <FormContent>
                    <Label>Date</Label>
                    <Input type="date" name="expense_date" width="100%" />
                </FormContent>
                </form>
            )}</Formik>

            <Button>Submit</Button>
        </Modal>
        <SideBar />

        <Content>
            <DashNav>
                <div>Expenses</div>
                <TopDiv>
                    <Button
                        padding="10px 20px"
                        background="#62B161"
                        color="#fff"><i className="fas fa-cloud-download-alt"></i></Button> &nbsp; &nbsp;
                    <DashImage />
                </TopDiv>
            </DashNav>

            <Div>
                <Box flex="2" margin="3px">
                    <TopNav>
                        <form>
                            <select>
                                {selectDates.map(data=>(
                                    <option key={data.key} value={data.key}>{data.key}</option>
                                ))}
                            </select>
                        </form>
                    </TopNav>
                    <Bar data={data} options={options} />
                </Box>
                <Box flex="1" margin="3px" displayFlex>
                    <div>
                    <Paragraph>Total Expenses</Paragraph>
                    <H1>$13 000</H1>
                    </div>
                </Box>
            </Div>

            <Div>
                <Box>
                    <TopNav> 
                        <Input type="search" placeholder="Search" /> <br />
                        <Button onClick={openModal} ><i className="fas fa-plus"></i> Add</Button>
                    </TopNav>
                    <Table>
                        <Thead>
                            <Td>Amount</Td>
                            <Td>Category</Td>
                            <Td>Description</Td>
                            <Td>Date</Td>
                            <Td>Action</Td>
                        </Thead>
                        <Tr>
                            <Td>$12 000</Td>
                            <Td>Salary</Td>
                            <Td>July salary</Td>
                            <Td>07/01/2020</Td>
                            <Td>
                                <MyLink 
                                    to="/edit-expense"
                                    background="#62B161"
                                    color="#fff"
                                    padding="5px 20px" >Edit</MyLink>
                            </Td>
                            
                        </Tr>
                        <Tr>
                            <Td>$12 000</Td>
                            <Td>Salary</Td>
                            <Td>July salary</Td>
                            <Td>07/01/2020</Td>
                            <Td>
                                <MyLink 
                                    to="/edit-expense"
                                    background="#62B161"
                                    color="#fff"
                                    padding="5px 20px" >Edit</MyLink>
                            </Td>
                            
                        </Tr>
                    </Table>
                </Box>
            </Div>
        </Content>

    </Container>
}

export default ExpensePage