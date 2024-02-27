import { useState } from "react";
import { Link } from "react-router-dom";
export default function CategoryIndex({content, setQuery}){
    console.log(content)
    const[search, setSearch] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault() // avoides page refresh on submit
        setQuery(search)
    }

    const handleChange= (event)=>{
        // whatever the user writes inside the input field (#search) will be retrived
        setSearch(event.target.value) // retrives the value of the target
    }
    console.log("Search", search)
    return(
        <>
            <h1>Characters</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search for character</label>
                <input type="text" id="search" placeholder="Rick..." onChange={handleChange}/>
                <input type="submit" value="Søk" />
            </form>
            <ul className="category-list">
                {
                    content?.map(item => <li key={item.id}><Link to={item.name}>{item.name}</Link></li>)

                }
            </ul>
        </>
    )
}