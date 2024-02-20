import { useParams } from "react-router-dom"
import { posts } from "../assets/posts";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

export default function Category(){
    const {slug} = useParams()
    const [post, setPost] = useState()
    
    useEffect(()=>{
        setPost(posts.filter(post => post.category === slug))
    },[])

    console.log("Check",post)
    
    return (
        <section>
            <h1>{slug}</h1>
            {
                post?.map(item => <PostCard key={item.id} title={item.title} category={item.category} ingress={item.ingress} id={item.id}/>)
            }
        </section>

        
    )
}