import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

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

  render() {

    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Bug Bounty: e-Gov</h2>
                </header>
                <p>UATE-ն և ArmSec Հիմնադրամը հայտարարում են ՀՀ-ում գործող պետական էլ. կառավարման համակարգերի տեղեկատվական անվտանգության խոցելիությունների հայտնաբերման մրցույթների շարք:
                </p>
                <p>
                Առաջին մրցույթը կմեկնարկի հունիսի 28-ին ժամը 18:00 և կտևի 20 ժամ:
                </p>
                <p>
                Հաղթող թիմերի համար նախատեսված է մրցանակ: Մրցանակային ֆոնդը կազմում է 1000 ԱՄՆ դոլար: Կլինեն նաև այլ անակնկալ մրցանակներ:
                </p>
                <p>
                «Մեր երիտասարդության ներուժը մեր երկրի անվտանգության ամենահավաստի երաշխիքն է» - կարծում է UATE տնօրեն Կարեն Վարդանյանը:
                </p>
                <p>
                «Չկան խոցելի կամ անխոցելի էլ. Կառավարման համակարգեր, կան չտեստավորված կամ տեստավորված համակարգեր» - համոզված է OWASP Armenia-ի  համահիմնադիր Վահագն Թուխարյանը:
                </p>
                <p>
                «Պետական համակարգը ներքին ուժերով ամբողջությամբ ապահով լինել չի կարող, միայն համայնք - պետություն համագործակցությունն է, որ կարող է իրական անվտանգություն ապահովել» - ասաց ArmSec Հիմնադրամի համահիմնադիր Սամվել Մարտիրոսյանը:
                </p>
                <ul className="actions">
                  <li>
                    <a target="_blank"
                      href="https://forms.gle/aYRbF3914qLzfymy9"
                      className="button special">Գրանցվել</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
