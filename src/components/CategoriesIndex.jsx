import { Link } from "react-router-dom";

export default function CategoryIndex(){
    const categoriesArray = ['Technology', 'Science', 'Art', 'History', 'Sports'];
    return(
        <>
            <h1>Categories</h1>
            <ul>
                {
                    categoriesArray.map((category, index) => <li key={category+index}><Link to={category}>{category}</Link></li>)
                }
            </ul>
        </>
    )
}