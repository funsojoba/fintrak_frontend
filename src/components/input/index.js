import { InputDiv } from "./style";


const Input = ({onChange, type, name, value, placeholder, onBlur, width, mb, readOnly, id})=>{
    return <InputDiv 
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            width={width}
            mb={mb}
            readOnly={readOnly}
            id={id}>

    </InputDiv>
}

export default Input