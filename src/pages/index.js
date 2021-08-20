import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="This is a dope ass whale."
        src="https://lh3.googleusercontent.com/4eKGcDIpzGTPHebu_WyR-Ak-4UKhXhR4oOCLltrZ5lp73CLS0bl281joy6pY6R-_q7-uWRWMrTVC4qcOKJvkTM0zQ43UeiFsk_j-59E=w600"
      />
    </Layout>
  )
}

export default IndexPage