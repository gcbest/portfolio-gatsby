import React from 'react'
import Card from './card'
import {TAGS} from '../utils'

const {typescript, graphql, react, postgres, node, gatsby, netlify, nextjs, serverless, styledComponents, hasura, pwa, tailwind, jest, svelte, sass} = TAGS;
const googleDriveURL = 'https://drive.google.com/uc?export=view&id='
const eatItTags = [typescript, graphql, react, postgres, node];
const eatItProps = {image: `${googleDriveURL}1_DKtImlNouGvOCdfBjCvh1M86hQUHru4`, title: 'Eat It!', links: {site: 'https://eat--it.herokuapp.com/', github: 'https://github.com/gcbest/eat-it'}, description: 'Find new recipes and track your shopping list all in one place!', tags: eatItTags};

const practicalPsychTags = [gatsby, react, netlify];
const practicalPsychProps = {image: `${googleDriveURL}1k1k_Lz7XZaTzC6PdzqAO1pNwz77f2TDx`, title: 'Practical Psychology Consultancy', links: {site: 'https://www.practicalpsychologyconsultancy.com/', github: 'https://github.com/gcbest/roxane2-gatsby'}, description: 'Providing focused solutions to improve and enhance workers’ well-being, performance, and productivity', tags: practicalPsychTags};

const nBackTags = [nextjs, serverless, styledComponents, hasura, pwa, tailwind, jest, react];
const nBackProps = {image: `${googleDriveURL}1UqKAjwwsj10LQiTg0oNYzAUALghjlkF3`, title: 'N-Back', links: {site: '#', github: 'https://github.com/gcbest'}, description: 'Improve your working memory one game at a time', tags: nBackTags};

// const readCompPlusTags = [svelte, sass];
// const readCompPlusProps = {image: 'https://hasura.io/blog/content/images/2019/05/Svelte_blog.png', title: 'Read Comp Plus', links: {site: '#', github: 'https://github.com/gcbest/read-comp-plus'}, description: 'Improve your reading speed and comprehension', tags: readCompPlusTags}

const Works = () => (
    <section id="works" className="work section-padding">
      {/* Eat It */}
      <Card {...eatItProps}/>

      {/* Practical Psychology */}
      <Card {...practicalPsychProps}/>
      
      {/* NBack */}
      <Card {...nBackProps}/>
      
      {/* Coming Soon */}
      {/* Read Comp Plus */}
      {/* <Card {...readCompPlusProps}/> */}
    </section>
)

export default Works;
