import SideBar from "../../components/sideBar";
import DashImage from "../../components/dashNav/dashImage";
import DashNav from "../../components/dashNav";
import Box from "../../components/box";
import Small from "../../components/typography/small";
import Paragraph from "../../components/typography/p";
import Input from "../../components/input";
import MyLink from "../../components/myLink/myLink";
import { Table, Thead, Tr, Td } from "../../components/table";
import { Container, Content, FlexDiv, Badge, BadgeWrapper, TopNav } from "./style";

import { Pie } from 'react-chartjs-2';


const BudgetPage = ()=>{
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
                Budget
                <DashImage />
            </DashNav>
            <FlexDiv>
                <Box displayFlex flex="2" margin="10px">
                    <BadgeWrapper>
                        <Badge>
                            <Small>Estimated Revenue</Small>
                            <Paragraph>$12 000</Paragraph>
                        </Badge>
                        <Badge background="#FFD6D6">
                            <Small>Estimated Expense</Small>
                            <Paragraph>$10 000</Paragraph>
                        </Badge>
                        <Badge background="#EFF1FF">
                            <Small>Estimated Balance</Small>
                            <Paragraph>$2 000</Paragraph>
                        </Badge>
                    </BadgeWrapper>
                </Box>

                <Box flex="1" margin="10px">
                    <Pie data={PieData} />
                </Box>
            </FlexDiv>
            <div>
                <Box>
                    <TopNav>
                        <Input type="search" placeholder="Search" />
                        <MyLink to="/add-budget"><i className="fas fa-plus"></i> Add</MyLink>
                    </TopNav>
                    <Table>
                        <Thead>
                            <Td>Month</Td>
                            <Td>Income</Td>
                            <Td>Expenditure</Td>
                            <Td>Balance</Td>
                            <Td>Action</Td>
                        </Thead>
                        <Tr>
                            <Td>Jan.</Td>
                            <Td>$ 30 000</Td>
                            <Td>$ 12 000</Td>
                            <Td>$ 18 000</Td>
                            <Td>
                                <MyLink
                                    to="/edit-budget"
                                    background="#62B161"
                                    color="#fff"
                                    padding="5px 20px" >Edit</MyLink>
                            </Td>

                        </Tr>
                        <Tr>
                            <Td>Feb.</Td>
                            <Td>$ 50 000</Td>
                            <Td>$ 22 000</Td>
                            <Td>$ 28 000</Td>
                            <Td>
                                <MyLink
                                    to="/edit-budget"
                                    background="#62B161"
                                    color="#fff"
                                    padding="5px 20px" >Edit</MyLink>
                            </Td>

                        </Tr>
                    </Table>
                </Box>
            </div>
        </Content>
    </Container>
}

export default BudgetPage