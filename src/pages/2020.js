import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Nav from '../components/nav'
import Features from '../components/features'
import Section from '../components/section'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  renderSections = (sections) => {
    return sections.map((edge) => {
      return <Section key={edge.node.id}
        section={edge.node.frontmatter}
        text={edge.node.html} />
    });
  }

  render() {
    return (
      <Layout>
        <Helmet title="ArmBounty.com :: 2020 Bug Bounties" />
        <Header title="ArmBounty | 2020" />
        <div id="main">
          <Nav links={[{
            label: "ArmSec 2019",
            elem: "armsec-2019"
          }, {
            label: "ArmSec 2020",
            elem: "first-bounty",
          }, {
            label: "Կարծիքներ",
            elem: "features"
          }]} scrollspy={['intro', 'features']} />
          {this.renderSections(this.props.data.sections.edges)}
          <Features features={this.props.data.features.edges} />
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    intro: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/intro.md/"}
      }
      limit: 1
    ) {
      edges {
        node {
          html
        }
      }
    },
    sections: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {
        fileAbsolutePath: {regex: "/sections\/2019/"}
      }
      limit: 10
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            id
            title
            date
            photo {
              childImageSharp {
                fluid(maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            sponsors {
              name
              url
              logo {
                childImageSharp {
                  fluid(maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    },
    features: allMarkdownRemark(
      sort: {order: ASC, fields: [fileAbsolutePath]}
      filter: {
        fileAbsolutePath: {regex: "/features/"}
      }
      limit: 10
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            name
            text
            photo {
              childImageSharp {
                fluid(maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

