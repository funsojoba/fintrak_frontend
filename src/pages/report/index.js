import SideBar from '../../components/sideBar/'

import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { Container, Flex, Headers, Body } from './style';
import Box from '../../components/box';
import H3 from '../../components/typography/h3';
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

    
    const { all_expense, all_income, currency, total_income, total_expense, full_month_name, year, available_balance } = reportData.data
    console.log(reportData.data)



    return (
    <Body>
        <SideBar />
        <Container>
            <Flex>
                <Box flex="2" margin="2.5px">
                    <div>
                        <H3>{full_month_name +' ' + year}'s Report</H3>
                    </div>
                    <Headers>
                        <Paragraph color="#D7FFC5" align="center" >
                            income
                        </Paragraph>
                    </Headers>
                    <Table>
                        <Tr>
                            <Th>Date</Th>
                            <Th>Description</Th>
                            <Th>Source</Th>
                            <Th>Amount</Th>
                        </Tr>

                        {all_income.map(income => (

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
                        <Tr>
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
                    <Headers>
                        <Paragraph color="#FF9C9C" align="center" >
                            expense
                        </Paragraph>
                    </Headers>
                    <Table>
                        <Tr>
                            <Th>Date</Th>
                            <Th>Description</Th>
                            <Th>Category</Th>
                            <Th>Amount</Th>
                        </Tr>

                        {all_expense.map(expense => (

                            <Tr>
                                <Td>{expense.expense_date}</Td>
                                <Td>{expense.description}</Td>
                                <Td>{expense.source}</Td>
                                <Td>
                                    <NumberFormat value={expense.amount}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={currency}/>
                                </Td>
                            </Tr>

                        ))}
                        <Tr>
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
                    
                    <Headers>
                        <Flex justify="space-between">
                            <Paragraph color="#A4E9FF">Available balance</Paragraph>
                            <Paragraph color="#A4E9FF">
                                <NumberFormat value={available_balance}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={currency}/>
                            </Paragraph>
                        </Flex>
                    </Headers>
                </Box>

                
            </Flex>
            
            {/* change month */}
            <Flex column flex="1">
                <Box flex="1" margin="2.5px 0">
                    <Flex>
                        <div style={{padding:"5px"}}>
                            Month
                        </div>
                        <select onChange={handleChangeMonth}>
                        {monthsName.map(month =>(
                            <option key={month.number} value={month.number}>{month.name}</option>
                            ))}
                        </select>
                    </Flex>
                    <Flex>
                        <div style={{padding:"5px"}}>
                            Year
                        </div>
                        <select onChange={handleChangeYear}>
                            {yearList.map(year => (
                                <option value={year} key={year} selected={currentYear === year}>{year}</option>
                            ))}
                        </select>
                    </Flex>
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