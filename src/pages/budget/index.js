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
import Loader from "react-spinners/SyncLoader";
import NumberFormat from "react-number-format";



import { connect } from "react-redux";
import { useEffect } from 'react'
import fetchBudget from "../../redux/action/budget";


const BudgetPage = ({ fetchBudget, budgetData }) => {
    useEffect(()=>{
        fetchBudget()
    }, [fetchBudget])
    
    const totalIncome = budgetData.data ? budgetData.data.total_income : 0
    const totalExpense = budgetData.data ? budgetData.data.total_expense : 0
    const totalBalance = budgetData.data ? budgetData.data.budget_balance : 0
    const currency = budgetData.data ? budgetData.data.currency : ''
    const allBudgets = budgetData.data ? budgetData.data.all_budget : []
    const budgetExits = budgetData.data ? budgetData.data.budget_exists : false
    
    const months = {
        '1':'Jan.',
        '2':'Feb.',
        '3':'Mar.',
        '4':'April',
        '5':'May',
        '6':'June',
        '7':'July',
        '8':'Aug.',
        '9':'Sep.',
        '10':'Oct.',
        '11':'Nov.',
        '12':'Dec'
    }


    const PieData = {
        labels: ['Income', 'Expenditure'],
        datasets: [
            {
                data: [totalIncome, totalExpense],
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
                            <Paragraph><NumberFormat prefix={currency} value={totalIncome} thousandSeparator={true} displayType="text" /></Paragraph>
                        </Badge>
                        <Badge background="#FFD6D6">
                            <Small>Estimated Expense</Small>
                            <Paragraph><NumberFormat prefix={currency} value={totalExpense} thousandSeparator={true} displayType="text" /></Paragraph>
                        </Badge>
                        <Badge background="#EFF1FF">
                            <Small>Estimated Balance</Small>
                            <Paragraph><NumberFormat prefix={currency} value={totalBalance} thousandSeparator={true} displayType="text" /></Paragraph>
                        </Badge>
                    </BadgeWrapper>
                </Box>

                <Box flex="1" margin="10px">
                    {budgetData.data ? <Pie data={PieData} /> : <Loader />}
                </Box>
            </FlexDiv>
            <div>
                <Box>
                    <TopNav>
                        <Input type="search" placeholder="Search" />
                        {!budgetExits && <MyLink to="/add-budget"><i className="fas fa-plus"></i> Add</MyLink>}
                    </TopNav>
                    <br />
                    <Table>
                        <Thead>
                            <Td>Month</Td>
                            <Td>Income</Td>
                            <Td>Expenditure</Td>
                            <Td>Balance</Td>
                            <Td>Action</Td>
                        </Thead>

                        {allBudgets.map((item)=>(

                        <Tr key={item.id}>
                            <Td>{months[item.month]}</Td>
                            <Td><NumberFormat prefix={currency} value={item.total_budget_income} thousandSeparator={true} displayType="text" /></Td>
                            <Td><NumberFormat prefix={currency} value={item.total_budget_expense} thousandSeparator={true} displayType="text" /></Td>
                            <Td><NumberFormat prefix={currency} value={item.total} thousandSeparator={true} displayType="text" /></Td>
                            <Td>
                                <MyLink
                                    to={"/edit-budget/"+item.id}
                                    background="#62B161"
                                    color="#fff"
                                    padding="5px 20px">Edit</MyLink>
                            </Td>

                        </Tr>
                        ))}
                    </Table>
                </Box>
            </div>
        </Content>
    </Container>
}

const mapStateToProps = state => ({
    budgetData: state.fetchBudgetReducer
})

export default connect(mapStateToProps, { fetchBudget })(BudgetPage)