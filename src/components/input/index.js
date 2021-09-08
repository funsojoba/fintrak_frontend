import { InputDiv } from "./style";


const Input = ({onChange, type, name, value, placeholder, onBlur, width, mb, readOnly})=>{
    return <InputDiv 
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            width={width}
            mb={mb}
            readOnly={readOnly}>

    </InputDiv>
}

export default Input