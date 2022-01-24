import SideBar from '../../components/sideBar/'

import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { Container, Flex, Headers, Body, TabDiv, TabDivChild } from './style';
import Box from '../../components/box';
import H4 from '../../components/typography/h4'
import Paragraph from '../../components/typography/p';
import NumberFormat from "react-number-format";

import { Table, Tr, Td,Th } from '../../components/table';

import fetchReport from "../../redux/action/reports/getReport"

import {monthsName} from "../../utils/months"

const Report = ({fetchReport, reportData})=>{
    let newDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(()=>newDate.getMonth()+1)
    const [currentYear, setCurrentYear] = useState(()=>newDate.getFullYear())
    
    useEffect(()=>{
        fetchReport(currentMonth, currentYear)
    }, [fetchReport, currentMonth, currentYear])

    const handleChangeYear = (e)=>{
        setCurrentYear(e.target.value)
    }
    const handleChangeMonth = (e)=>{
        setCurrentMonth(e.target.value)
    }

    const yearList = []
    for(let i= newDate.getFullYear() - 5; i <= newDate.getFullYear(); i++){
        yearList.push(i)
    }

    const [tabToggle, setTabToggle] = useState(false)

    const setTabTrue = ()=>{
        setTabToggle(true)
    }
    const setTabFalse = ()=>{
        setTabToggle(false)
    }
    
    const { all_expense, all_income, currency, total_income, total_expense, full_month_name, year, available_balance } = reportData.data


    const fixedStyle = {
        position:'sticky',
        top:0,
        right:0,
        width:'100%',
        zIndex:10,
        boxShadow:'0 10px 30px rgba(0,0,0,.05)'
    }

    return (
    <Body>
        <SideBar />
        <Container>
            <Box flex="1" flexBetween style={fixedStyle} >
                <div>
                    <H4>{full_month_name +' ' + year}'s Report</H4>
                </div>

                <div>
                    <select onChange={handleChangeMonth}>
                        {monthsName.map(month =>(
                            <option key={month.number} value={month.number}>{month.name}</option>
                            ))}
                    </select>
                    &nbsp;
                    <select onChange={handleChangeYear}>
                        {yearList.map(year => (
                            <option value={year} key={year} selected={currentYear === year}>{year}</option>
                        ))}
                    </select>
                </div>

            </Box>
            <Flex>
                <Box flex="2" margin="2.5px">
                    <TabDiv>
                        <TabDivChild className={tabToggle ? "active" : ''} onClick={setTabTrue}>Income ({all_income && all_income.length})</TabDivChild>
                        <TabDivChild className={!tabToggle ? "active" : ''} onClick={setTabFalse}>Expense ({all_expense && all_expense.length})</TabDivChild>
                    </TabDiv>
                    
                    {tabToggle && 
                    <Table>
                        <Tr header>
                            <Th>Date</Th>
                            <Th>Description</Th>
                            <Th>Source</Th>
                            <Th>Amount</Th>
                        </Tr>

                        {all_income && all_income.map(income => (

                            <Tr>
                                <Td>{income.income_date}</Td>
                                <Td>{income.description}</Td>
                                <Td>{income.source}</Td>
                                <Td>
                                <NumberFormat value={income.amount}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={currency}/>
                                </Td>
                            </Tr>
                        ))}
                        <Tr header>
                            <Td>Total Income</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td>
                            <NumberFormat value={total_income}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={currency}/>

                            </Td>
                        </Tr>
                    </Table>
                    }
                    
                    {!tabToggle && 
                    <Table>
                        <Tr header>
                            <Th>Date</Th>
                            <Th>Description</Th>
                            <Th>Category</Th>
                            <Th>Amount</Th>
                        </Tr>

                        {all_expense && all_expense.map(expense => (

                            <Tr>
                                <Td>{expense.expense_date}</Td>
                                <Td>{expense.description}</Td>
                                <Td>{expense.category}</Td>
                                <Td>
                                    <NumberFormat value={expense.amount}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={currency}/>
                                </Td>
                            </Tr>

                        ))}
                        <Tr header>
                            <Td>Total Expenses</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td>
                                <NumberFormat value={total_expense}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={currency}/>

                            </Td>
                        </Tr>
                    </Table>
                    }
                    
                    <Headers>
                        <Flex justify="space-between">
                            <Paragraph color="#EFF1FF">Available balance</Paragraph>
                            <Paragraph color="#EFF1FF">
                                <NumberFormat value={available_balance}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={currency}/>
                            </Paragraph>
                        </Flex>
                    </Headers>
                </Box>

                
            </Flex>
            
        </Container>
    </Body>)
}


const mapDispatchToProps = dispatch => ({
    fetchReport : (month, year) => dispatch(fetchReport(month, year))
})

const mapStateToProps = store =>({
    reportData : store.reportReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Report)