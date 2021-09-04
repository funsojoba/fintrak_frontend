import SideBar from "../../components/sideBar";
import Box from "../../components/box";
import H1 from "../../components/typography/h1";
import Paragraph from "../../components/typography/p";

import { Bar } from 'react-chartjs-2';
import { Container,TopDiv, Content, TopNav } from "./style";
import DashNav from "../../components/dashNav";
import DashImage from "../../components/dashNav/dashImage";
import { Table, Tr, Td, Thead } from "../../components/table";
import Input from "../../components/input";
import Select from "../../components/input/select";
import Button from "../../components/button";
import MyLink from "../../components/myLink/myLink";

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
            <DashNav>
                <div>Income</div>
                <TopDiv>
                    <Button
                        padding="10px 20px"
                        background="#62B161"
                        color="#fff"><i className="fas fa-cloud-download-alt"></i> Report</Button> &nbsp; &nbsp;
                    <DashImage />
                </TopDiv>
            </DashNav>
            <TopDiv>
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
                    <H1>$23 000</H1>
                    </div>
                </Box>
            </TopDiv>

            <TopDiv>
                <Box>
                    <TopNav> 
                        <Input type="search" placeholder="Search" />
                        <Button><i className="fas fa-plus"></i> Add</Button>
                    </TopNav>
                    <Table>
                        <Thead>
                            <Td>Amount</Td>
                            <Td>Source</Td>
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
                                    to="/edit-income"
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
                                    to="/edit-income"
                                    background="#62B161"
                                    color="#fff"
                                    padding="5px 20px" >Edit</MyLink>
                            </Td>
                            
                        </Tr>
                    </Table>
                </Box>
            </TopDiv>
        </Content>

    </Container>
}

export default IncomePage