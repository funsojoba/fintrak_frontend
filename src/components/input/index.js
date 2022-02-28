import { InputDiv } from "./style";


const Input = (props)=>{
    const {onChange, type, name, value, placeholder, onBlur, width, mb, readOnly, id, min, max} = props
    return <InputDiv 
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            width={width}
            mb={mb}
            min={min}
            max={max}
            readOnly={readOnly}
            id={id}>

    </InputDiv>
}

export default Input