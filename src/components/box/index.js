import { BoxDiv } from "./style";


const Box = ({children, width, flex})=>{
    return <BoxDiv width={width} flex={flex}>
        {children}
    </BoxDiv>
}

export default Box