import SideBar from "../../components/sideBar";
import Box from "../../components/box";
import H1 from "../../components/typography/h1";
import Paragraph from "../../components/typography/p";

import { Bar } from 'react-chartjs-2';
import { Container,TopDiv, Content } from "./style";

const IncomePage = ()=>{
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Income',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
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
        <SideBar />

        <Content>
            <TopDiv>
                <Box flex="2" margin="3px">
                    <Bar data={data} options={options} />
                </Box>
                <Box flex="1" margin="3px" displayFlex>
                    <div>
                    <Paragraph>Total Revenue</Paragraph>
                    <H1>$12 122 133</H1>
                    </div>
                </Box>
            </TopDiv>
        </Content>

    </Container>
}

export default IncomePage