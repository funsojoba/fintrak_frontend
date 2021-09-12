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

const Dashboard = ({ dashboardData, fetchDashboard }) => {
    const dataFromDB = dashboardData.data
    useEffect(() => { fetchDashboard() }, [fetchDashboard])

    const data = {
        labels: dataFromDB.days_label,
        datasets: [
            {
                label: 'Income',
                data: dataFromDB.income_graph_data,
                fill: false,
                backgroundColor: 'rgb(152, 216, 158)',
                borderColor: 'rgba(152, 216, 158, 0.2)',
                yAxisID: 'y-axis-1',
                tension: 0.3
            },
            {
                label: 'Expenditure',
                data: dataFromDB.expense_graph_data,
                fill: false,
                backgroundColor: 'rgb(238, 132, 132)',
                borderColor: 'rgba(238, 132, 132, 0.2)',
                yAxisID: 'y-axis-2',
                
            },
        ],
    };

    const PieData = {
        labels: ['Income', 'Expenditure'],
        datasets: [
            {
                label: '# of Votes',
                data: [dataFromDB.sum_of_income, dataFromDB.sum_of_expenses],
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
                    amount={`${dataFromDB.currency} ${dataFromDB.sum_of_income}`}
                    icon={<i class="fas fa-hand-holding-usd fa-lg"></i>}
                />

                <InfoCard
                    title="Expense"
                    amount={`${dataFromDB.currency} ${dataFromDB.sum_of_expenses}`}
                    icon={<i class="fas fa-money-check-alt fa-lg"></i>}
                    background="#EFDADA"
                />

                <InfoCard
                    title="Avaialable Balance"
                    amount={`${dataFromDB.currency} ${dataFromDB.available_balance}`}
                    icon={<i class="fas fa-balance-scale-right fa-lg"></i>}
                    background="#F4ECDD"
                />

                <InfoCard
                    title="Total Transaction"
                    amount={dataFromDB.total_transaction}
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
                    <DashBoxDiv>
                        <div> Income  </div>
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
                    {dataFromDB && dataFromDB.top_income.map((income)=>{
                        return(
                            <TransactionCard key={income.id} background="#EEFFF0">
                                <Paragraph> {income.description} </Paragraph>
                            <small>{dataFromDB.currency + ' '+ income.amount} |  {income.income_date}</small>
                        </TransactionCard>)
                    })}
                </Box>

                <Box flex="1" margin="5px">
                    <DashBoxDiv>
                        <div>Expenses</div>
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
                    {dataFromDB && dataFromDB.top_expense.map((expense) => {
                        return (
                            <TransactionCard background="#FFF0F0">
                                <Paragraph> {expense.description} </Paragraph>
                                <small>{dataFromDB.currency + ' ' + expense.amount}  |  {expense.expense_date}</small>
                            </TransactionCard>)
                    })}
                </Box>

                <Box flex="1" margin="5px">
                    <DashBoxDiv>
                        <div> Transactions  </div>
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