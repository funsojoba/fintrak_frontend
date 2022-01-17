import { ButtonDiv } from "./style";
import Loader from "react-spinners/SyncLoader";


const Button = ({children, onClick, background, color, width, type, padding, border, disabled, sm, isLoading})=>{
    return <ButtonDiv 
            background={background} 
            color={color} 
            onClick={onClick}
            width={width}
            type={type}
            padding={padding}
            border={border}
            disabled={disabled}
            isLoading={isLoading}
            sm={sm}>
        {isLoading ? <Loader color="#fff"/> : children}
    </ButtonDiv>
}

export default Button