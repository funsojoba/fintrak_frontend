import styled from "styled-components";
import Img from "../../components/img/img";
import MyLink from "../../components/myLink/myLink"
import Button from "../../components/button";

import { connect } from "react-redux";

const NavDiv = styled.nav`
    display: flex;
    justify-content: space-between;
    padding:20px 50px;
    background:#fff;
`

const NavImg = styled.div`
    width:150px;
`


const Nav = ({loginData})=>{
    const logOut = () => {
        localStorage.clear()
        console.log('loggin out...')
        window.location = "/";
    }
    return <NavDiv>
        <NavImg>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1630147720/fintrak/FinTrakPL_fuiegf.png" alt="FinTrak" />
        </NavImg>

        <div>
            {loginData.token ? <Button onClick={logOut}>Log out</Button> : <MyLink to="/login">Login</MyLink>}
        </div>
    </NavDiv>
}

const mapStateToProps = (store)=>({
    loginData:store.loginReducer
})

export default connect(mapStateToProps)(Nav)