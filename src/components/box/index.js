import { BoxDiv } from "./style";


const Box = ({children, width, flex, margin, displayFlex})=>{
    return <BoxDiv 
            width={width} 
            flex={flex}
            margin={margin}
            displayFlex={displayFlex}>
        {children}
    </BoxDiv>
}

export default Box