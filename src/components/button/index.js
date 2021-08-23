import { ButtonDiv } from "./style";


const Button = ({children, onClick, background, color, width})=>{
    return <ButtonDiv 
            background={background} 
            color={color} 
            onClick={onClick}
            width={width}>
        {children}
    </ButtonDiv>
}

export default Button