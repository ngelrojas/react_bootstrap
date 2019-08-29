import React, {useState} from 'react'
import Article from '../post/article.jsx'
import './scss/home.scss'


const Home = () => {
    
    const [articles_list] = useState([])

    const renderList = () =>(
        <div>
        {
            articles_list.map(art => <Article />) 
        }
        </div>
         
    )

    return(  
        <main>
            <section className="home__section-articles">
                        
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </section>
        </main> 
    )
}
export default Home


