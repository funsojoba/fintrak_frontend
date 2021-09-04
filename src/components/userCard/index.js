import {Div, Container, Talk} from './style'

import { Link } from "react-router-dom";

const UserCard = ({ show, logOut }) => {
    return <Container show={show}>
        <Div>
            <Link to="/settings" >Settings</Link>
            <Link to="#" onClick={logOut} >Logout</Link>
            <Talk />
        </Div>
    </Container>
}

export default UserCard