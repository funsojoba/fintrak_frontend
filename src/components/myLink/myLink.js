import { MyLinkDiv } from "./style";
import { Link } from "react-router-dom";


const MyLink = ({ to, children}) => {
    return <MyLinkDiv>
        <Link to={to}>
            {children}
        </Link>
    </MyLinkDiv>
}

export default MyLink