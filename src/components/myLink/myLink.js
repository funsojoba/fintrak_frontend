import { MyLinkDiv } from "./style";
import { Link } from "react-router-dom";


const MyLink = ({ to, children, padding, background, color}) => {
    return <MyLinkDiv 
                padding={padding}
                background={background}
                color={color}>
        <Link to={to}> {children} </Link>
    </MyLinkDiv>
}

export default MyLink
