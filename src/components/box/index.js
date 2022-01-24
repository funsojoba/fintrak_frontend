import { BoxDiv } from "./style";


const Box = ({children, width, flex, margin, displayFlex, background, flexOnly, flexStart, flexBetween, ...rest})=>{
    return <BoxDiv 
            width={width} 
            flex={flex}
            margin={margin}
            displayFlex={displayFlex}
            background={background}
            flexStart={flexStart}
            flexOnly={flexOnly}
            flexBetween={flexBetween}
            {...rest}>
        {children}
    </BoxDiv>
}

export default Box