import SideBar from "../../components/sideBar";
import Input from "../../components/input";
import Button from "../../components/button";
import DashImage from "../../components/dashNav/dashImage";
import DashNav from "../../components/dashNav";
import Box from "../../components/box";
import Small from "../../components/typography/small";
import Label from "../../components/typography/label";
import InfoCard from "../../components/infoCard";

import { Container, Content, FlexDiv, FormContent, ListDiv } from "./style";
import Paragraph from "../../components/typography/p";


const AddBudget = ()=>{
    return <Container>
        <SideBar />

        <Content>
            <DashNav>
                Add Budget
                <DashImage />
            </DashNav>
            <FlexDiv>            
                <Box flexBetween>
                    <InfoCard
                        title="Estimated Revenue"
                        background="#D7FFC5"
                        amount="$0"
                    />
                    <InfoCard
                        title="Estimated Expenditure"
                        background="#FFD6D6"
                        amount="$0"
                    />
                    <InfoCard
                        title="Estimated Balance"
                        background="#EFF1FF"
                        amount="$0"
                    />
                </Box>
            </FlexDiv>
            <FlexDiv>
                <Box flex="1" margin="10px">
                    <Small color="#0B480A">Add Revenue</Small>
                    <form>
                        <FormContent>
                            <Label>Amount</Label>
                            <Input width="100%" type="number" name="amount" />
                        </FormContent>
                        <FormContent>
                            <Label>Source</Label>
                            <Input width="100%" type="text" name="source" />
                        </FormContent>
                        <FormContent>
                            <Label>Short Description</Label>
                            <Input width="100%" type="text" name="description" />
                        </FormContent>
                        <Button>Add Revenue</Button>
                    </form>
                </Box>
                <Box flex="1" margin="10px">
                    <Small color="#AF0000" >Add Expense</Small>
                    <form>
                        <FormContent>
                            <Label>Amount</Label>
                            <Input width="100%" type="number" name="amount" />
                        </FormContent>
                        <FormContent>
                            <Label>Source</Label>
                            <Input width="100%" type="text" name="source" />
                        </FormContent>
                        <FormContent>
                            <Label>Short Description</Label>
                            <Input width="100%" type="text" name="description" />
                        </FormContent>
                        <Button disabled>Add Expense</Button>
                    </form>
                </Box>
            </FlexDiv>
            <FlexDiv>
                <Box flex="1" margin="10px">
                    <Small color="#0B480A">Expected Revenue</Small>
                    <ListDiv>
                        <Small>Some Description</Small>
                        <Paragraph>$1 200</Paragraph>
                    </ListDiv>
                    <ListDiv>
                        <Small>Some Description</Small>
                        <Paragraph>$1 200</Paragraph>
                    </ListDiv>
                    <ListDiv>
                        <Small>Some Description</Small>
                        <Paragraph>$1 200</Paragraph>
                    </ListDiv>
                </Box>
                <Box flex="1" margin="10px">
                    <Small color="#AF0000">Expected Expenditure</Small>
                    <ListDiv>
                        <Small>Some Description</Small>
                        <Paragraph>$1 200</Paragraph>
                    </ListDiv>
                </Box>
            </FlexDiv>
        </Content>
    </Container>
}

export default AddBudget