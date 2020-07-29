import React from 'react'
import Tag from './tag'

function Card({ image, title, description, tags=[] }) {
    // return (
    //     <figure className="card">
    //         <img src={image} alt={alt} />
    //         <figcaption>{description}</figcaption>
    //         <figcaption>{tags.map(t => t.name)}</figcaption>
    //     </figure>
    // )
    return (
        <figure className="card">
            <img src={image} alt={title} />
            <figcaption><h3>{title}</h3></figcaption>
            <figcaption>{description}</figcaption>
            {tags.length > 0 && tags.map(({name, logo, bgColor}) => <Tag name={name} logo={logo} bgColor={bgColor} /> )}
        </figure>
    )
}

export default Card;


