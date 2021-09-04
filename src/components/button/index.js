import { ButtonDiv } from "./style";


const Button = ({children, onClick, background, color, width, type, padding})=>{
    return <ButtonDiv 
            background={background} 
            color={color} 
            onClick={onClick}
            width={width}
            type={type}
            padding={padding}>
        {children}
    </ButtonDiv>
}

export default Button