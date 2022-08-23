import { Box } from '@mui/material'
import axios from 'axios'
import react, { useEffect, useState } from 'react'
import TablePostsTemplate from "../src/table";

interface IAlbums{
    userId: string
    id: string
    title: string
}

const Albums = () => {
    const [albums, setAlbums] = useState<IAlbums[]>([])

    useEffect(() => {
        const getAlbums = async() => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
            setAlbums(response.data)
        }
    getAlbums()
}, [])


    return(
    <>
        <h1>villains bad and hess</h1>
        <TablePostsTemplate
        headers={["userId", "id", "title"]}
        data={albums}
        keys={["userId", "id", "title"]}
      />
        

    </>
    )
}

export default Albums

/*{albums.length>1 && albums.map(album => {
            return(
            // eslint-disable-next-line react/jsx-key
            <Box>
                <Box>{album.userId}</Box>
                <Box>{album.id}</Box>
               <Box>{album.title}</Box>
                <br/>
                <br/>
            </Box>
            )
        })}*/