import { InfoCardDiv, CardIcon } from "./style";
import H3 from "../typography/h3";
import Paragraph from "../typography/p";


const InfoCard = ({icon, amount, title,background })=>{
    return <InfoCardDiv background={background}>
        <CardIcon>{icon}</CardIcon>
        <Paragraph>{title}</Paragraph>
        <H3>{amount}</H3>

    </InfoCardDiv>
}

export default InfoCard