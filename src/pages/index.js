import React from 'react'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Nav from '../components/nav'
import Features from '../components/features'
import Section from '../components/section'
import Intro from '../components/intro'

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
        <Helmet title="ArmBounty.com :: Bug Bounty" />
        <Header title="ArmBounty" />
        <div id="main">
          <Nav links={[{
            label: "Սկիզբ",
            elem: "intro"
          }, {
            label: "e-Gov",
            elem: "2020-first-bounty"
          }, {
            label: "Կարծիքներ",
            elem: "features"
          }, {
            label: "2019",
            to: "/2019"
          }]} scrollspy={['intro', 'features']} />
          <Intro intro={this.props.data.intro.edges}
            nav={[
              <a href="https://www.facebook.com/events/922080838190066/">
                <img src="https://img.icons8.com/color/40/000000/facebook-new.png" />
              </a>,
              <a href="https://forms.gle/dPYUEHnpdgTgLawJ9" className="button special">
                Գրանցվել
              </a>
            ]} />
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
          frontmatter {
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
    sections: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {
        fileAbsolutePath: {regex: "/sections\/2020/"}
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

