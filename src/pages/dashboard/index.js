import SideBar from '../../components/sideBar/'

import { Container, Content, DashDiv, DashBoxDiv, Select, TransactionCard } from './style'
import DashNav from './dashNav'
import DashImage from './dashImage'
import InfoCard from '../../components/infoCard'
import Box from '../../components/box'
import Paragraph from '../../components/typography/p'
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

const Dashboard = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Income',
                data: [12, 19, 11, 10, 8, 13],
                fill: false,
                backgroundColor: 'rgb(152, 216, 158)',
                borderColor: 'rgba(152, 216, 158, 0.2)',
                yAxisID: 'y-axis-1',
                tension: 0.3
            },
            {
                label: 'Expenditure',
                data: [11, 20, 10, 7, 2, 12],
                fill: false,
                backgroundColor: 'rgb(238, 132, 132)',
                borderColor: 'rgba(238, 132, 132, 0.2)',
                yAxisID: 'y-axis-2',
                tension: .3
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
            ],
        },
    };

    const PieData = {
        labels: ['Income', 'Expenditure'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19],
                backgroundColor: [
                    'rgb(152, 216, 158)',
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
                    amount="$23 000"
                    icon={<i class="fas fa-hand-holding-usd fa-lg"></i>}
                />

                <InfoCard
                    title="Expense"
                    amount="$13 000"
                    icon={<i class="fas fa-money-check-alt fa-lg"></i>}
                    background="#F4ECDD"
                />

                <InfoCard
                    title="Avaialable Balance"
                    amount="$1 000"
                    icon={<i class="fas fa-balance-scale-right fa-lg"></i>}
                    background="#EFDADA"
                />

                <InfoCard
                    title="Total Transaction"
                    amount="65"
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
                        <Line data={data} options={options} />
                    </DashBoxDiv>
            
                </Box>
            </DashDiv>

            <DashDiv>
                <Box flex="1" margin="5px" >
                    <DashBoxDiv>
                        <div> Expenditures  </div>
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
                    <TransactionCard background="#FFF0F0">
                        <Paragraph> Salary for the month </Paragraph>
                        <small>$ 21 000  |  July 21</small>
                    </TransactionCard>
                    <TransactionCard background="#FFF0F0">
                        <Paragraph> Salary for the month </Paragraph>
                        <small>$ 21 000  |  July 21</small>
                    </TransactionCard>
                    <TransactionCard background="#FFF0F0">
                        <Paragraph> Salary for the month </Paragraph>
                        <small>$ 21 000  |  July 21</small>
                    </TransactionCard>
                </Box>

                <Box flex="1" margin="5px">
                    <DashBoxDiv>
                        <div>Income</div>
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
                    <TransactionCard>
                        <Paragraph> Salary for the month </Paragraph>
                        <small>$ 21 000  |  July 21</small>
                    </TransactionCard>
                    <TransactionCard>
                        <Paragraph> Salary for the month </Paragraph>
                        <small>$ 21 000  |  July 21</small>
                    </TransactionCard>
                    <TransactionCard>
                        <Paragraph> Salary for the month </Paragraph>
                        <small>$ 21 000  |  July 21</small>
                    </TransactionCard>
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

export default Dashboard