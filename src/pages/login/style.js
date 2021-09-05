import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    height: 100vh;
    box-sizing:border-box;

    @media only screen and (max-width:750px){
        height: 100%;
    }
`

export const ContainerContent = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background: url(${props => props.background ? props.background : 'none'});
    background-size: cover;
    background-position: center;
    
    @media only screen and (max-width:750px){
        display: ${props => props.smDisplay ? props.smDisplay : 'flex'};
        height:100vh;
    }
`
export const FormDiv = styled.form`
    width: 100%;
    padding:20px;
`

export const Label = styled.label`
    display:block;
    text-align:left;
    color:#666;
`

export const FormContent = styled.div`
    margin-bottom: 20px;
`
