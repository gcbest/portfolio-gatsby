import React from 'react'

function Card({ image, alt, description, tags }) {
    // return (
    //     <figure className="card">
    //         <img src={image} alt={alt} />
    //         <figcaption>{description}</figcaption>
    //         <figcaption>{tags.map(t => t.name)}</figcaption>
    //     </figure>
    // )
    return (
        <figure className="card">
            <img src={image} alt={alt} />
            <figcaption>{description}</figcaption>
            <figcaption>{tags.map(t => t.name)}</figcaption>
        </figure>
    )
}

export default Card;
