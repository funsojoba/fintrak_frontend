import styled, {css} from "styled-components";

export const InputDiv = styled.input`
    border:none;
    background:#f5f5f5;
    color:#000;
    padding:10px 15px;
    border-radius: 10px;
    width: ${props => props.width ? props.width : 'auto'};
    outline: none;
    margin-bottom: ${props => props.mb ? props.mb : '0'};
    position:relative;

};

`

export const InputWrapper = styled.div`
    position:relative;

    .toggleEye{
        position:absolute;
        right:15px;
        top:10px; 
        cursor:pointer;
        display:none;
    }

    ${({password}) => password && css`
        .toggleEye{
            display:block;
        }
    `}

`
