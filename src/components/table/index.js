import { TableDiv, TrDiv, TdDiv, TheadDiv, ThDiv } from "./style";


export const Table = ({children})=>{
    return <TableDiv>
        {children}
    </TableDiv>
}

export const Tr = ({children})=>{

   return <TrDiv>
        {children}
    </TrDiv>

}

export const Td = ({children})=>{
    return <TdDiv>{children}</TdDiv>
}

export const Thead = ({children})=>{
    return <TheadDiv>{children}</TheadDiv>
}
export const Th = ({children})=>{
    return <ThDiv>{children}</ThDiv>
}