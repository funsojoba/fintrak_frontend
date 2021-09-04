import { BoxDiv } from "./style";


const Box = ({children, width, flex, margin, displayFlex, background, flexOnly, flexStart})=>{
    return <BoxDiv 
            width={width} 
            flex={flex}
            margin={margin}
            displayFlex={displayFlex}
            background={background}
            flexStart={flexStart}
            flexOnly={flexOnly}>
        {children}
    </BoxDiv>
}

export default Box