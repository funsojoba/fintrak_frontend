import { BoxDiv } from "./style";


const Box = ({children, width, flex, margin, displayFlex, background})=>{
    return <BoxDiv 
            width={width} 
            flex={flex}
            margin={margin}
            displayFlex={displayFlex}
            background={background}>
        {children}
    </BoxDiv>
}

export default Box