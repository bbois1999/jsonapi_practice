import { Container, styled, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { rootShouldForwardProp } from "@mui/material/styles/styled"
import Table from "@mui/material/Table"
import { Dispatch, FC, SetStateAction } from "react"
import { Ipost } from '../pages/posts'




interface TableProps{
    headers: string[]
    data: any[]
    keys: string[]
}


const TableTemplate:FC<TableProps> = (props) => {
    const {data, headers, keys} = props
    
    return(
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map((header)=>{
                            return(
                                <TableCell key={header}>{header}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((x)=> (
                        <TableRow key={x.id}>
                           {keys.map((key)=> <TableCell key={key}>{x[key]}</TableCell> )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default TableTemplate