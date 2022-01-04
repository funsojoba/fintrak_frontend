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
import Button from '../../components/button'

import { connect } from 'react-redux'
import { useEffect } from 'react'
import fetchDashboard from '../../redux/action/dashboard'
import fetchReport from "../../redux/action/getReport"
import Loader from 'react-spinners/SyncLoader'
import NumberFormat from "react-number-format";
// import Skeleton from 'react-loading-skeleton';

const Dashboard = ({ dashboardData, fetchDashboard, reportData, fetchReport }) => {
    const dataFromDB = dashboardData.data
    useEffect(() => { fetchDashboard() }, [fetchDashboard])

    const sumOfIncome = dataFromDB && dataFromDB.sum_of_income ? dataFromDB.sum_of_income : 0;
    const sumOfExpense = dataFromDB && dataFromDB.sum_of_expenses ? dataFromDB.sum_of_expenses : 0;
    const currency = dataFromDB && dataFromDB.currency ? dataFromDB.currency : "$"
    const availableBalance = dataFromDB && dataFromDB.available_balance ? dataFromDB.available_balance : 0
    const totalTransaction = dataFromDB && dataFromDB.total_transaction ? dataFromDB.total_transaction : 0;
    
    let newDate = new Date();
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

    let todaysDate = months[newDate.getMonth()+1] + ' ' + newDate.getDate()

    const getReportData = ()=>{
        fetchReport()
        console.log(reportData)
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
                <Button
                        onClick={getReportData}
                        padding="10px 15px"
                        background="#62B161"
                        color="#fff">{reportData.loading ? <Loader color="#fff" /> :  <i className="fas fa-cloud-download-alt"></i>}
                            </Button> &nbsp; &nbsp;
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
                    icon={<i class="fas fa-hand-holding-usd fa-lg"></i>}
                />

                <InfoCard
                    title="Expense"
                    amount={dashboardData.loading ? <Loader color="#fff" /> : (<NumberFormat value={sumOfExpense}
                        displayType="text"
                        thousandSeparator={true}
                        prefix={currency} />)}
                    icon={<i class="fas fa-money-check-alt fa-lg"></i>}
                    background="#EFDADA"
                />

                <InfoCard
                    title="Avaialable Balance"
                    amount={dashboardData.loading ? <Loader color="#fff" /> : (<NumberFormat value={availableBalance}
                        displayType="text"
                        thousandSeparator={true}
                        prefix={currency} />)}
                    icon={<i class="fas fa-balance-scale-right fa-lg"></i>}
                    background="#F4ECDD"
                />

                <InfoCard
                    title="Total Transaction"
                    amount={dashboardData.loading ? <Loader color="#fff"/> : totalTransaction}
                    icon={<i class="fas fa-layer-group fa-lg"></i>}
                    background="#DEE0EF"
                />

            </DashDiv>

            <DashDiv>
                <Box>
                    <DashBoxDiv>
                        <div>Activities</div>
                        <div>
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
                        </div>
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
    fetchDashboard: () => dispatch(fetchDashboard()),
    fetchReport: ()=> dispatch(fetchReport())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)