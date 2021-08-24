import { InputDiv } from "./style";


const Input = ({onChange, type, name, value, placeholder, onBlur, width, mb})=>{
    return <InputDiv 
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            width={width}
            mb={mb}>

    </InputDiv>
}

export default Input