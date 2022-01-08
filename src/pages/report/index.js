import SideBar from '../../components/sideBar/'

import { Container, Flex } from './style';
import Box from '../../components/box';

import H3 from '../../components/typography/h3';

import { Table, Tr, Td,Th } from '../../components/table';


const Report = ()=>{
    return <Container>
        <SideBar />

        <Flex>
            <Box flex="2" margin="2.5px">
                <div>
                    <H3>January's Report</H3>
                </div>
                <div>
                    income
                </div>
                <Table>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Description</Th>
                        <Th>Source</Th>
                        <Th>Amount</Th>
                    </Tr>

                    <Tr>
                        <Td>Jan 1</Td>
                        <Td>Some descriptions</Td>
                        <Td>Others</Td>
                        <Td>$ 1000</Td>
                    </Tr>
                </Table>

            </Box>
            
        </Flex>
        <Flex column flex="1">
            <Box flex="1" margin="2.5px 0">
                <Flex>
                    <div style={{padding:"5px"}}>
                        Month
                    </div>
                    <select>
                        <option>Testing</option>
                    </select>
                </Flex>
                <Flex>
                    <div style={{padding:"5px"}}>
                        Year
                    </div>
                    <select>
                        <option>Testing</option>
                    </select>
                </Flex>
            </Box>

            <Box width="100%" margin="2.5px 0">
                Testing
            </Box>
        </Flex>
    </Container>
}

export default Report