import styled from "styled-components";


const ImgDiv = styled.img`
    width:100%;
`

const Img = ({alt, src})=>{
    return <ImgDiv alt={alt} src={src} />
}

export default Img