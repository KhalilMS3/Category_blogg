import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Episode from "./Episode";

export default function Category({currentId}){
    const {slug} = useParams()
    const [post, setPost] = useState()

    /**
     * when fetching, use always async() func
     * response and data er default var-s to be used 
     */
    const getCharacter = async() =>{
        fetch(`https://rickandmortyapi.com/api/character/${currentId}`)
        .then(reponse => reponse.json())
        .then(data => setPost(data))
        .catch(error => console.error(error))
    }
    
   

    useEffect(()=>{
        getCharacter()
    },[])

    console.log("Check",post)
    
    return (
        <section>
            <h1>{post?.name}</h1>
            <img src={post?.image} alt={post?.name} />
            <ul>
                {
                    post?.episode?.map((item, i) => <li key={i}><Episode name={item}/></li>)
                }
            </ul>
                {/*post?.map(item => <PostCard key={item.id} title={item.title} category={item.category} ingress={item.ingress} id={item.id}/>)*/}
        </section>

        
    )
}