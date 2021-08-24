import { ImageBoxDiv } from "./style";


const ImageBox = ({children, width})=>{
    return <ImageBoxDiv width={width}>
        {children}
    </ImageBoxDiv>
}

export default ImageBox