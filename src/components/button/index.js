import { ButtonDiv } from "./style";


const Button = ({children, onClick, background, color, width, type})=>{
    return <ButtonDiv 
            background={background} 
            color={color} 
            onClick={onClick}
            width={width}
            type={type}>
        {children}
    </ButtonDiv>
}

export default Button