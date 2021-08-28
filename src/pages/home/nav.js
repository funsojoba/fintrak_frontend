import styled from "styled-components";
import Img from "../../components/img/img";
import MyLink from "../../components/myLink/myLink"

const NavDiv = styled.nav`
    display: flex;
    justify-content: space-between;
    padding:20px 50px;
    background:#fff;
`

const NavImg = styled.div`
    width:150px;
`


const Nav = ()=>{
    return <NavDiv>
        <NavImg>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1630147720/fintrak/FinTrakPL_fuiegf.png" alt="FinTrak" />
        </NavImg>

        <div>
            <MyLink to="/login">Login</MyLink>
        </div>
    </NavDiv>
}

export default Nav