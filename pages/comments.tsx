import { FC, ReactNode, useEffect, useState } from "react"
import axios from 'axios'
import { Box, styled } from "@mui/material"
import TablePostsTemplate from "../src/table";

interface styledBoxProps {
    myColor: string
}

const StyledBox = styled(Box)<styledBoxProps>((props) => ({
    color: props.myColor,
  }));

interface IComment{
    postId: number
    id: number
    name: string
    email: string
    body: string
}

interface bodyCompProps{
    children: ReactNode
    header: string
}
const BodyComponent:FC<bodyCompProps> = (props) => {
    return(
        <>
            <h1>{props.header}</h1>
            {props.children}
            
        </>
    )
}

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        const getComments = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setComments(response.data)
        }
        getComments()
    })

    return(
        <>
        <p>zoink</p>
        <StyledBox myColor="red">
            dfa
        </StyledBox>
        <TablePostsTemplate
        headers={["postId", "id", "name", "email", "body"]}
        data={comments}
        keys={["postId", "id", "name", "email", "body"]}
      />
        </>
    )
}

export default Comments

/*
{comments.length>1 && comments.map(comment=> {
            return(
        <BodyComponent key={comment.id} header={comment.name}>
            <Box>{comment.body}</Box>
            <Box>{comment.email}</Box>
            <Box>{comment.id}</Box>
            <Box>{comment.name}</Box>
            <Box>{comment.postId}</Box>
            <br/>
        </BodyComponent>
        
            )
        })}
*/