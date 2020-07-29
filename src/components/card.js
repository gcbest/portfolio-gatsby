import React from 'react'
import Tag from './tag'

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
            {tags.length > 0 && tags.map(({name, logo, bgColor}) => <Tag name={name} logo={logo} bgColor={bgColor} /> )}
        </figure>
    )
}

export default Card;


