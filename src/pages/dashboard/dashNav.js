import styled from "styled-components";


const DashNavDIv = styled.div`
    display: flex;
    justify-content: space-between;
    padding:30px;
    align-items:center;
    width: 100%;
`


const DashNav = ({children})=>{
    return <DashNavDIv>
        {children}
    </DashNavDIv>
}

export default DashNav