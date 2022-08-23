import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import TablePostsTemplate from "../src/table";

export interface Ipost {
  userId: string;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Ipost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    getPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <p>zoink</p>
      <TablePostsTemplate
        headers={["userId", "id", "title", "body"]}
        data={posts}
        keys={["userId", "id", "title", "body"]}
      />
    </>
  );
};

export default Posts;

/* before table-izing
     {posts.length>1 && posts.map(post=> {
            return(
                <Box key={post.id}>
                    <Box>{post.userId}</Box>
                    <Box>{post.id}</Box>
                    {post.title}
                    {post.body}
                </Box>
                
            )
        })}
    */
