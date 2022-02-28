import { InputDiv, InputWrapper } from "./style";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Input = (props)=>{
    const [toggleEye, setToggleEye] = useState(false)
    const {onChange, type, name, value, placeholder, onBlur, width, mb, readOnly, id, min, max, password} = props
    
    const changeToggle = ()=>{
        setToggleEye(!toggleEye)
    }
    return <InputWrapper password={password}>
            <InputDiv 
                    onChange={onChange}
                    type={toggleEye ? "text" : type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    width={width}
                    mb={mb}
                    min={min}
                    max={max}
                    readOnly={readOnly}
                    id={id}
                    >
                    </InputDiv>
    
        <div className="toggleEye" onClick={changeToggle}>
            {toggleEye ? <FaEyeSlash /> :  <FaEye/>}
        </div>
    </InputWrapper>
// FaEye  FaEyeSlash
}

export default Input