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