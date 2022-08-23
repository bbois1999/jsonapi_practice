import { FC, ReactNode, useEffect, useState } from "react"
import axios from 'axios'
import { Box, styled } from "@mui/material"
import TablePostsTemplate from "../src/table";
import { useRouter } from "next/router";


interface IComment{
    postId: number
    id: number
    name: string
    email: string
    body: string
}

const CommentPage = () => {

    const router = useRouter()

    return(
        <h1>Comment {router.query.id}</h1>
    )
}