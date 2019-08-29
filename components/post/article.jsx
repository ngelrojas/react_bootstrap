import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './scss/article.scss'


const Article = () => { 
    
    const [heart_on, heart_off] = useState(true, false)

    function handleClickHeart(e){
        e.preventDefault() 
        console.log('click here liked', heart_on) 
    }
    function handleClickShare(e){
        e.preventDefault()
        console.log('clicke here shared')
    }
    return(
        <article className="main-post">
            <figure>
                <img src=" https://picsum.photos/id/237/300/200 " className="img-responsive"  alt="title of article " />
            </figure>
            <div className="body-article">
                <div className="head-article">
                    <h3>Title Post about the interesting article</h3>
                </div>
                <div className="content-article">
                    <p>This is a little excerpt for about this article, this excerpt has to 20 words or less or a little more...</p>
                </div>
                <div className="footer-article">
                    <ul>
                        <li>
                            <Link to="#" onClick={handleClickShare}>
                                <i className="fa fa-share-alt"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={handleClickHeart}>
                                <i className="fa fa-heart"></i>
                            </Link>    
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-angle-right"></i>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </article>
    )
}

export default Article
