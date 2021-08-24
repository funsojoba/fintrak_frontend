import { MyLinkDiv } from "./style";


const MyLink = ({ to, children}) => {
    return <MyLinkDiv>
        <a href={to}>
            {children}
        </a>
    </MyLinkDiv>
}

export default MyLink