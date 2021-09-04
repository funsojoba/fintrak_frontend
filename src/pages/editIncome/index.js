import SideBar from "../../components/sideBar";
import DashNav from "../../components/dashNav";
import DashImage from "../../components/dashNav/dashImage";
import Box from "../../components/box";
import Input from "../../components/input";
import Button from "../../components/button";
import H3 from "../../components/typography/h3";
import Paragraph from "../../components/typography/p";
import Small from "../../components/typography/small";
import Label from "../../components/typography/label"

import { Container, Content, Parent, ParentChild, Category, FormDiv, FormChild } from "./style";

const EditIncome = ()=>{
    return <Container>
        <SideBar />

        <Content>
            <DashNav>
                <>Edit Income</>
                <DashImage></DashImage>
            </DashNav>
            <Box>
                <Parent justify="space-between">
                    <Button padding="10px 15px"><i className="fas fa-long-arrow-alt-left"></i></Button>
                    <Button padding="10px 15px" background="#DB0069" color="#fff"> <i className="fas fa-trash"></i> Delete</Button>
                </Parent>

                <Parent>
                    <ParentChild flex="2">
                        <FormDiv>
                            <FormChild>
                                <Label>Amount</Label>
                                <Input width="100%" type="number" placeholder="$12 000" />
                            </FormChild>
                            <FormChild>
                                <Label>Source</Label>
                                <Input width="100%" type="text" placeholder="salary" />
                            </FormChild>
                            <FormChild>
                                <Label>Description</Label>
                                <Input width="100%" type="text" placeholder="Salary for the month of July" />
                            </FormChild>
                            <FormChild>
                                <Label>Date</Label>
                                <Input width="100%" type="date"/>
                            </FormChild>
                            <Button type="submit">Update</Button>
                        </FormDiv>
                    </ParentChild>
                    <ParentChild flex="1">
                        <Box background="#EFF1FF" displayFlex>
                            <div>
                                <H3>$5 000</H3>
                                <Category>Salary</Category>
                                <Paragraph>Salary for the month of July</Paragraph>
                                <hr />
                                <Small>09/12/2020</Small>
                            </div>
                        </Box>
                    </ParentChild>
                </Parent>
            </Box>

        </Content>

    </Container>
}

export default EditIncome