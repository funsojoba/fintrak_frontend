import SideBar from '../../components/sideBar/'

import { Container, Content, DashDiv, DashBoxDiv, Select, TransactionCard, TopDiv } from './style'
import DashNav from '../../components/dashNav'
import DashImage from '../../components/dashNav/dashImage'
import InfoCard from '../../components/infoCard'
import Box from '../../components/box'
import Paragraph from '../../components/typography/p'
import Small from '../../components/typography/small'
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import fetchDashboard from '../../redux/action/dashboard'
import fetchReport from "../../redux/action/getReport"
import Loader from 'react-spinners/SyncLoader'
import NumberFormat from "react-number-format";

// import Skeleton from 'react-loading-skeleton';


const Dashboard = ({ dashboardData, fetchDashboard, }) => {
    const dataFromDB = dashboardData.data
    let newDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(()=>newDate.getMonth()+1)
    
    useEffect(() => { fetchDashboard(currentMonth) }, [fetchDashboard, currentMonth])
    

    const sumOfIncome = dataFromDB && dataFromDB.sum_of_income ? dataFromDB.sum_of_income : 0;
    const sumOfExpense = dataFromDB && dataFromDB.sum_of_expenses ? dataFromDB.sum_of_expenses : 0;
    const currency = dataFromDB && dataFromDB.currency ? dataFromDB.currency : "$"
    const availableBalance = dataFromDB && dataFromDB.available_balance ? dataFromDB.available_balance : 0
    const totalTransaction = dataFromDB && dataFromDB.total_transaction ? dataFromDB.total_transaction : 0;
    
    const months = {
        1:'Jan.',
        2:'Feb.',
        3:'March',
        4:'April',
        5:'May',
        6:'June',
        7:'July',
        8:'Aug.',
        9:'Sept.',
        10:'Oct.',
        11:'Nov.',
        12:'Dec.'
    }

    const monthsName = [
        {
            "name":"Jan",
            "number":1
        },
        {
            "name":"Feb",
            "number":2
        },
        {
            "name":"March",
            "number":3
        },
        {
            "name":"April",
            "number":4
        },
        {
            "name":"May",
            "number":5
        },
        {
            "name":"June",
            "number":6
        },
        {
            "name":"July",
            "number":7
        },
        {
            "name":"August",
            "number":8
        },
        {
            "name":"Sept.",
            "number":9
        },
        {
            "name":"Oct.",
            "number":10
        },
        {
            "name":"Nov.",
            "number":11
        },
        {
            "name":"Dec.",
            "number":12
        },
    ]

    let todaysDate = months[currentMonth] + ' ' + newDate.getDate()
    const changeSelect = (e)=>{
        setCurrentMonth(e.target.value)
    }

    const graphData = {
        labels: dataFromDB && dataFromDB.days_label ? dataFromDB.days_label : [],
        datasets: [
            {
                label: 'Income',
                data: dataFromDB && dataFromDB.income_graph_data ? dataFromDB.income_graph_data : [],
                fill: false,
                backgroundColor: 'rgb(152, 216, 158)',
                borderColor: 'rgba(152, 216, 158, 0.8)',
                yAxisID: 'y-axis-1',
                tension: 0.3
            },
            {
                label: 'Expenditure',
                data: dataFromDB && dataFromDB.expense_graph_data ? dataFromDB.expense_graph_data : [] ,
                fill: false,
                backgroundColor: 'rgb(233, 160, 160)',
                borderColor: 'rgba(233, 160, 160, 0.8)',
                yAxisID: 'y-axis-2',
                
            },
        ],
    };

    const PieData = {
        labels: ['Income', 'Expenditure'],
        datasets: [
            {
                label: '# of Votes',
                data: [sumOfIncome, sumOfExpense],
                backgroundColor: [
                    'rgb(155, 221, 124)',
                    'rgba(237, 132, 132)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',

                ]
            },
        ],
    };

    return <Container>
        <SideBar />

        <Content>
            <DashNav>
                <div>Dashboard <br /> <Small>{todaysDate }</Small> </div>
                <TopDiv>
                     <Select background="#fff" color="#c4c4c4" onChange={changeSelect}>
                                {monthsName.map((month)=>{
                                   return <option key={month.number} selected={monthsName.number === currentMonth } value={month.number}>{month.name}</option>
                                })}
                        </Select> &nbsp; &nbsp;
                    <DashImage />
                </TopDiv>
            </DashNav>

            <DashDiv>
                <InfoCard
                    title="Income"
                    amount={dashboardData.loading ? <Loader color="#fff" /> : (<NumberFormat value={sumOfIncome}
                    displayType="text"
                    thousandSeparator={true}
                    prefix={currency}/>)}
                    icon={<i className="fas fa-hand-holding-usd fa-lg"></i>}
                />

                <InfoCard
                    title="Expense"
                    amount={dashboardData.loading ? <Loader color="#fff" /> : (<NumberFormat value={sumOfExpense}
                        displayType="text"
                        thousandSeparator={true}
                        prefix={currency} />)}
                    icon={<i className="fas fa-money-check-alt fa-lg"></i>}
                    background="#EFDADA"
                />

                <InfoCard
                    title="Avaialable Balance"
                    amount={dashboardData.loading ? <Loader color="#fff" /> : (<NumberFormat value={availableBalance}
                        displayType="text"
                        thousandSeparator={true}
                        prefix={currency} />)}
                    icon={<i className="fas fa-balance-scale-right fa-lg"></i>}
                    background="#F4ECDD"
                />

                <InfoCard
                    title="Total Transaction"
                    amount={dashboardData.loading ? <Loader color="#fff"/> : totalTransaction}
                    icon={<i className="fas fa-layer-group fa-lg"></i>}
                    background="#DEE0EF"
                />

            </DashDiv>

            <DashDiv>
                <Box>
                    <DashBoxDiv>
                        <div>Activities</div>
                        
                    </DashBoxDiv>

                    <DashBoxDiv>
                        <Line data={graphData} />
                    </DashBoxDiv>

                </Box>
            </DashDiv>

            <DashDiv>
                <Box flex="1" margin="5px" >
                    {dataFromDB && dataFromDB.top_income.map((income)=>{
                        return(
                            <TransactionCard key={income.id} background="#EEFFF0">
                                <Paragraph> {income.description} </Paragraph>
                                <small><NumberFormat
                                    value={income.amount}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={dataFromDB.currency}
                                />  |  {income.income_date}</small>

                        </TransactionCard>)
                    })}
                </Box>

                <Box flex="1" margin="5px">
                    {dataFromDB && dataFromDB.top_expense.map((expense) => {
                        return (
                            <TransactionCard key={expense.id} background="#FFF0F0">
                                <Paragraph> {expense.description} </Paragraph>
                                <small><NumberFormat
                                    value={expense.amount}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={dataFromDB.currency}
                                />  |  {expense.expense_date}</small>

                            </TransactionCard>)
                    })}
                </Box>

                <Box flex="1" margin="5px">
                    <Pie data={PieData} />
                </Box>
            </DashDiv>

        </Content>
    </Container>
}

const mapStateToProps = (store) => ({
    dashboardData: store.dashboardReducer,
    reportData: store.reportReducer
})

const mapDispatchToProps = (dispatch) => ({
    fetchDashboard: (month) => dispatch(fetchDashboard(month)),
    fetchReport: ()=> dispatch(fetchReport())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)