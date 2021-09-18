import SideBar from '../../components/sideBar/'

import { Container, Content, DashDiv, DashBoxDiv, Select, TransactionCard } from './style'
import DashNav from '../../components/dashNav'
import DashImage from '../../components/dashNav/dashImage'
import InfoCard from '../../components/infoCard'
import Box from '../../components/box'
import Paragraph from '../../components/typography/p'
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

import { connect } from 'react-redux'
import { useEffect } from 'react'
import fetchDashboard from '../../redux/action/dashboard'
import Loader from 'react-spinners/SyncLoader'
import Skeleton from 'react-loading-skeleton';

const Dashboard = ({ dashboardData, fetchDashboard }) => {
    console.log(dashboardData.loading)
    const dataFromDB = dashboardData.data
    useEffect(() => { fetchDashboard() }, [fetchDashboard])

    const sumOfIncome = dataFromDB && dataFromDB.sum_of_income ? dataFromDB.sum_of_income : 0;
    const sumOfExpense = dataFromDB && dataFromDB.sum_of_expenses ? dataFromDB.sum_of_expenses : 0;
    const currency = dataFromDB && dataFromDB.currency ? dataFromDB.currency : "$"
    const availableBalance = dataFromDB && dataFromDB.available_balance ? dataFromDB.available_balance : 0
    const totalTransaction = dataFromDB && dataFromDB.total_transaction ? dataFromDB.total_transaction : 0;
    
    const data = {
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
                <div>Dashboard</div>
                <div>
                    <DashImage />
                </div>
            </DashNav>

            <DashDiv>
                <InfoCard
                    title="Income"
                    amount={dashboardData.loading ? <Loader color="#fff"/> : (currency + sumOfIncome)}
                    icon={<i class="fas fa-hand-holding-usd fa-lg"></i>}
                />

                <InfoCard
                    title="Expense"
                    amount={dashboardData.loading ? <Loader color="#fff"/> : ( currency + sumOfExpense )}
                    icon={<i class="fas fa-money-check-alt fa-lg"></i>}
                    background="#EFDADA"
                />

                <InfoCard
                    title="Avaialable Balance"
                    amount={dashboardData.loading ? <Loader color="#fff"/> : (currency + availableBalance)}

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
                        <Line data={data} />
                    </DashBoxDiv>

                </Box>
            </DashDiv>

            <DashDiv>
                <Box flex="1" margin="5px" >
                    {dataFromDB && dataFromDB.top_income.map((income)=>{
                        return(
                            <TransactionCard key={income.id} background="#EEFFF0">
                                <Paragraph> {income.description} </Paragraph>
                            <small>{currency +  income.amount} |  {income.income_date}</small>
                        </TransactionCard>)
                    })}
                </Box>

                <Box flex="1" margin="5px">
                    {dataFromDB && dataFromDB.top_expense.map((expense) => {
                        return (
                            <TransactionCard background="#FFF0F0">
                                <Paragraph> {expense.description} </Paragraph>
                                <small>{dataFromDB.currency +  expense.amount}  |  {expense.expense_date}</small>
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
    dashboardData: store.dashboardReducer
})

const mapDispatchToProps = (dispatch) => ({
    fetchDashboard: () => dispatch(fetchDashboard())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)