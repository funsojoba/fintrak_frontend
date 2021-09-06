import styled from "styled-components";


const DashNavDIv = styled.div`
    display: flex;
    justify-content: space-between;
    padding:30px;
    align-items:center;
    width: 100%;

    @media only screen and (max-width:750px){
        padding:15px;
    }
`


const DashNav = ({ children }) => {
    return <DashNavDIv>
        {children}
    </DashNavDIv>
}

export default DashNav