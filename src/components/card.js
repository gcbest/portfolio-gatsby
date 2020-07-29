import React from 'react'
import externalLinkAlt from '@iconify/icons-fa-solid/external-link-alt';
import githubIcon from '@iconify/icons-mdi/github';
import Tag from './tag'
import StyledBtn from './styledBtn';
import StyledIcon from './styledIcon';
import styles from './card.module.css';

function Card({ image, title, links, description, tags=[] }) {
    return (
        <figure className={styles.card}>
            <div className={styles.imageArea}>
                <a href={links.site} target="_blank" rel="noopener noreferrer"><img src={image} alt={title} className={styles.image} /></a>
            </div>
            <hr/>
            <figcaption><h3>{title}</h3></figcaption>
            <figcaption>
                <a href={links.site} target="_blank" rel="noopener noreferrer"><StyledBtn>View Site <StyledIcon icon={externalLinkAlt} width="1.5rem" height="1.5rem"/></StyledBtn></a>
                <a href={links.github}><StyledBtn>View Code <StyledIcon icon={githubIcon} width="2rem" height="2rem" /></StyledBtn></a>
                </figcaption>
            <figcaption className={styles.description}>{description}</figcaption>
            <figcaption className={styles.tagsArea}>
                {tags.length > 0 && tags.map(({name, logo, bgColor}) => <Tag name={name} logo={logo} bgColor={bgColor} /> )}
            </figcaption>
        </figure>
    )
}

export default Card;


