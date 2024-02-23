
export default function Home({content}){
    console.log("Home", content)
    return(
        <section>
            <h1>Home</h1>
            <section className="characters-cards">
                
            {
                content?.map(item => 
                <article key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <span className={`status-box ${item.status === "Alive" ? "Alive" : "Dead"}`}></span>
                    <h3>{item.name}</h3>
                    <p>{item.status} - {item.species}</p>
                </article>)
            }
            </section>
        </section>
    )
}