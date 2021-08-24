import { InputDiv } from "./style";


const Input = ({onChange, type, name, value, placeholder, onBlur, width})=>{
    return <InputDiv 
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            width={width}>

    </InputDiv>
}

export default Input