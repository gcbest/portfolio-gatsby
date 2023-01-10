import React from "react"

import SEO from "../components/seo"
import About from "../components/about"
import Services from "../components/services"
import Contact from '../components/contact';
import Main from '../components/main';
import Layout from '../components/layout';
import Works from "../components/works"
// import Preloader from '../components/preloader';

const IndexPage = () => {
  let keywords = [`godfrey`, `best`, `software`, `engineer`, 'react', 'nextjs', 'gatsby']

  return (
    <div>
      <SEO title="Godfrey Best" keywords={keywords} />
      <Layout>
        {/* <Preloader/> */}
        <Main/>
        <About />
        <Services />
        {/* <Works /> */}
        <Contact />
      </Layout>
    </div>
  )
}

export default IndexPage
