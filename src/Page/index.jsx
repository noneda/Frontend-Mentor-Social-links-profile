import Picture from "../assets/images/avatar.jpeg"

const App = () => {
    const data = [
        {data: "GitHub"},
        {data : "Frontend Mentor"},
        {data : "LinkedIn"},
        {data : "Twitter"},
        {data :"Instagram"}    
    ];
    return(
<>
<main>
    <article>
        <figure>
            <img src={Picture} alt="Avatar" />
            <figcaption>Jessica Randall </figcaption>
        </figure>
        <section id="data">
            <h3>London, United Kingdom</h3>
            <h4>"Front-end Developer and avid reader."</h4>
        </section>
        <section id="buttoms">
        {
            data.map((item, index) => (
                <button key={index}>{item.data}</button>
            ))
        }
        </section>
    </article>
</main>
</>
    )
}


export default App;