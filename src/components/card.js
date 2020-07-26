import React from 'react'

function Card({ image, alt, description, tags=[] }) {
    // return (
    //     <figure className="card">
    //         <img src={image} alt={alt} />
    //         <figcaption>{description}</figcaption>
    //         <figcaption>{tags.map(t => t.name)}</figcaption>
    //     </figure>
    // )
    return (
        <figure className="card">
            <img src='https://hasura.io/blog/content/images/2019/05/Svelte_blog.png' alt='Svelte FTW' />
            <figcaption>Eat It!</figcaption>
            <figcaption>{tags.length > 0 && tags.map(t => t.name)}</figcaption>
        </figure>
    )
}

export default Card;
