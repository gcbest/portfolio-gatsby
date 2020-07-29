import React from 'react'
import Card from './card'
import {TAGS} from '../utils'

const {typescript, graphql, react, postgres, node, gatsby, netlify, nextjs, serverless, styledComponents, hasura, pwa, tailwind, jest, svelte, sass} = TAGS;
const googleDriveURL = 'https://drive.google.com/uc?export=view&id='
const eatItTags = [typescript, graphql, react, postgres, node];
const eatItProps = {image: `${googleDriveURL}1_DKtImlNouGvOCdfBjCvh1M86hQUHru4`, title: 'Eat It!', links: {site: 'https://eat--it.herokuapp.com/', github: 'https://github.com/gcbest/eat-it'}, description: 'Find new recipes and track your shopping list all in one place!', tags: eatItTags};

const practicalPsychTags = [gatsby, react, netlify];
const practicalPsychProps = {image: `${googleDriveURL}1k1k_Lz7XZaTzC6PdzqAO1pNwz77f2TDx`, title: 'Practical Psychology Consultancy', links: {site: 'https://www.practicalpsychologyconsultancy.com/', github: 'https://github.com/gcbest/roxane2-gatsby'}, description: 'Providing focused solutions to improve and enhance workers’ well-being, performance, and productivity', tags: practicalPsychTags};

const nBackTags = [nextjs, serverless, styledComponents, hasura, pwa, tailwind, jest];
const nBackProps = {image: `${googleDriveURL}1UqKAjwwsj10LQiTg0oNYzAUALghjlkF3`, title: 'N-Back', links: {site: '#', github: 'https://github.com/gcbest/nback'}, description: 'Improve your working memory one game at a time', tags: nBackTags};

const readCompPlusTags = [svelte, sass];
const readCompPlusProps = {image: 'https://hasura.io/blog/content/images/2019/05/Svelte_blog.png', title: 'Read Comp Plus', links: {site: '#', github: 'https://github.com/gcbest/read-comp-plus'}, description: 'Improve your reading speed and comprehension', tags: readCompPlusTags}

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
      {/* <Card {...readCompPlusProps}/>
      <Card {...readCompPlusProps}/>
      <Card {...readCompPlusProps}/>
      <Card {...readCompPlusProps}/> */}

        {/* <div classname="container">
          <div classname="row">
            <div classname="col-sm-12">
              <div classname="section-title">
                <h2>Take a look at my recent works</h2>
              </div>
            </div>
          </div>
          <div classname="row">
            <ul classname="work">
              <li classname="filter active" data-filter="all">all</li>
              <li classname="filter" data-filter=".webdesign">web design</li>
              <li classname="filter" data-filter=".development">development</li>
            </ul>
          </div>
          <div classname="work-inner">
            <div classname="row work-posts">
              <div classname="col-md-4 col-sm-6 mix graphic works">
                <div classname="work-title">
                  <h4>Find-A-Spot <span>Web Development</span></h4>
                  <a href="https://findaspot.herokuapp.com/" classname="work-link" target="_blank" rel="noreferrer">Go To Site</a>
                </div>
                <div classname="item">
                  <a href="images/portfolio/work-4.jpg" classname="image-popup">
                    <img src="images/portfolio/work-4.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div classname="col-md-4 col-sm-6 mix webdesign works">
                <div classname="work-title">
                  <h4>LitterBot <span>Web Development</span></h4>
                  <a href="https://litterbot.herokuapp.com/" classname="work-link" target="_blank" rel="noreferrer">Go to Site</a>
                </div>
                <div classname="item">
                  <a href="images/portfolio/work-1.jpg" classname="image-popup">
                    <img src="images/portfolio/work-1.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div classname="col-md-4 col-sm-6 mix development works">
                <div classname="work-title">
                  <h4>Morning Message <span>Web Development</span></h4>
                  <a href="http://morning-message.herokuapp.com/" classname="work-link" target="_blank" rel="noreferrer">Go to Site</a>
                </div>
                <div classname="item">
                  <a href="images/portfolio/work-5.jpg" classname="image-popup">
                    <img src="images/portfolio/work-5.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div classname="col-md-4 col-sm-6 mix webdesign development works">
                <div classname="work-title">
                  <h4>SnapSnax <span>Web Development</span></h4>
                  <a href="https://snap-snax.herokuapp.com/" classname="work-link" target="_blank" rel="noreferrer">Go to Site</a>
                </div>
                <div classname="item">
                  <a href="images/portfolio/work-2.jpg" classname="image-popup">
                    <img src="images/portfolio/work-2.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div classname="col-md-4 col-sm-6 mix webdesign works">
                <div classname="work-title">
                  <h4>Icebox <span>Web Design</span></h4>
                  <a href="https://iceboxent.herokuapp.com/" classname="work-link" target="_blank" rel="noreferrer">Go to Site</a>
                </div>
                <div classname="item">
                  <a href="images/portfolio/work-3.jpg" classname="image-popup">
                    <img src="images/portfolio/work-3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div classname="col-md-4 col-sm-6 mix development works">
                <div classname="work-title">
                  <h4>Fave Haunts <span>Web / Development</span></h4>
                  <a href="http://www.favehaunts.com" classname="work-link" target="_blank" rel="noreferrer">Go to Site</a>
                </div>
                <div classname="item">
                  <a href="images/portfolio/favehaunts.jpg" classname="image-popup">
                    <img src="images/portfolio/favehaunts.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}


      </section>
)

export default Works;
