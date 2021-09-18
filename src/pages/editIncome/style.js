import styled, {css} from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;

    @media only screen and (max-width:850px){
        padding:5px;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding:20px;
`

export const Parent = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : "center"};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};

      ${({ column }) => column && css`
        @media only screen and (max-width:850px){
            padding:10px 15px;
        flex-direction: column-reverse;
        }
    `};

`

export const ParentChild = styled.div`
    flex: ${props => props.flex ? props.flex : "1"};
    padding:15px;
`

export const Category = styled.div`
    padding:5px;
    background:#fff;
    border-radius: 5px;
    margin-bottom:10px;
`

export const FormDiv = styled.form`
    width: 100%;
    padding:20px;
`
export const FormChild = styled.div`
    margin-bottom:10px;
`