import { ButtonDiv } from "./style";


const Button = ({children, onClick, background, color, width, type, padding, border, disabled, sm})=>{
    return <ButtonDiv 
            background={background} 
            color={color} 
            onClick={onClick}
            width={width}
            type={type}
            padding={padding}
            border={border}
            disabled={disabled}
            sm={sm}>
        {children}
    </ButtonDiv>
}

export default Button