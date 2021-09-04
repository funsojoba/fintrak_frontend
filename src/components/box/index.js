import { BoxDiv } from "./style";


const Box = ({children, width, flex, margin, displayFlex, background, flexOnly, flexStart, flexBetween})=>{
    return <BoxDiv 
            width={width} 
            flex={flex}
            margin={margin}
            displayFlex={displayFlex}
            background={background}
            flexStart={flexStart}
            flexOnly={flexOnly}
            flexBetween={flexBetween}>
        {children}
    </BoxDiv>
}

export default Box