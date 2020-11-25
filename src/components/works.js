import React from 'react'
import Card from './card'
import { TAGS } from '../utils'

const { typescript, graphql, react, postgres, node, gatsby, netlify, nextjs, serverless, styledComponents, hasura, pwa, tailwind, jest, svelte, sass, awsAPIGateway, awsDynamoDB, awsCognito, awsLambda } = TAGS;
const eatItTags = [typescript, graphql, react, postgres, node];
const eatItProps = { image: `https://i.imgur.com/2SzNHY0.png`, title: 'Eat It!', links: { site: 'https://eat--it.herokuapp.com/', github: 'https://github.com/gcbest/eat-it' }, description: 'Find new recipes and track your shopping list all in one place!', tags: eatItTags };

const practicalPsychTags = [gatsby, react, netlify];
const practicalPsychProps = { image: `https://i.imgur.com/xe6iZIP.png`, title: 'Practical Psychology Consultancy', links: { site: 'https://www.practicalpsychologyconsultancy.com/', github: 'https://github.com/gcbest/roxane2-gatsby' }, description: 'Providing focused solutions to improve and enhance workers’ well-being, performance, and productivity', tags: practicalPsychTags };

const nBackTags = [nextjs, serverless, styledComponents, hasura, pwa, tailwind, jest, react];
const nBackProps = { image: `https://i.imgur.com/5Tcualy.png`, title: 'N-Back', links: { site: 'https://nback.vercel.app/', github: 'https://github.com/gcbest/nback' }, description: 'Improve your working memory one game at a time', tags: nBackTags };

const readCompPlusTags = [svelte, typescript, tailwind, sass];
const readCompPlusProps = { image: `https://i.imgur.com/tvOMYMm.png`, title: 'Read Comp Plus', links: { site: 'https://read-comp-plus.vercel.app/', github: 'https://github.com/gcbest/read-comp-plus' }, description: 'Improve your reading speed and comprehension', tags: readCompPlusTags }

const dailyJournalTags = [react, typescript, pwa, awsAPIGateway, awsCognito, awsDynamoDB, awsLambda];
const dailyJournalProps = { image: `https://i.imgur.com/jAHuKjq.png`, title: 'Daily Mastermind', links: { site: '#', github: 'https://github.com/gcbest/' }, description: 'Keep track of what matters to you', tags: dailyJournalTags }

const Works = () => (
  <section id="works" className="section-padding">
    <div className="section-title">
      <h2>Recent Works</h2>
    </div>

    <div className="work"
      // data-sal="fade"
      // data-sal-duration="500"
      // data-sal-easing="easeInQuad"
      >
      {/* Read Comp Plus */}
      <Card {...readCompPlusProps} />

      {/* Eat It */}
      <Card {...eatItProps} />

      {/* Practical Psychology */}
      <Card {...practicalPsychProps} />

      {/* NBack */}
      <Card {...nBackProps} />

      {/* Coming Soon */}
      {/* Journal */}
      <Card {...dailyJournalProps} />
    </div>
  </section>
)

export default Works;
