import { BoxDiv } from "./style";


const Box = ({children, width, flex, margin})=>{
    return <BoxDiv 
            width={width} 
            flex={flex}
            margin={margin}>
        {children}
    </BoxDiv>
}

export default Box