import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/Header'

import bountyPhoto from '../assets/images/photos/bounty-1-team-photo.jpg';

import samvel from '../assets/images/profile/samvel-martirosyan.png';
import vaagn from '../assets/images/profile/vaagn-toukharian.png';
import karen from '../assets/images/profile/karen-vardanyan.jpg';

import serviceTitan from '../assets/images/logos/servicetitan.png';
import grantThornton from '../assets/images/logos/grant-thornton.png';

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
        <Helmet title="ArmBounty.com :: Bug Bounty: e-Gov" />

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
                <p>Երկրորդ մրցույթը կմեկնարկի անմիջապես ArmSec 2019 կոնֆերանսից հետո նեյեմբերի 23-ին ժամը 18:00 և կտևի 20 ժամ:
                </p>
                <p>Հաղթող թիմերի համար նախատեսված է մրցանակ: Մրցանակային ֆոնդը կազմում է 2000 ԱՄՆ դոլար: Կլինեն նաև այլ անակնկալ մրցանակներ:
                </p>
                <p>
                  <a href="https://forms.gle/VQmmdNaRTjEAFiDW7"
                    class="button special">
                    Գրանցվել
                  </a>
                </p>
              </div>
            </div>
          </section>
          <section id="intro" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Հովանավորներ</h2>
                </header>
                <a href="https://servicetitan.com">
                  <span className="image">
                    <img
                      src={serviceTitan}
                      alt="ServiceTitan" />
                  </span>
                </a>
                <a href="https://www.grantthornton.am/">
                  <span className="image">
                    <img
                      src={grantThornton}
                      alt="Grant Thornton" />
                  </span>
                </a>
              </div>
            </div>
          </section>

          <section id="second" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Առաջին Հաքաթոնը</h2>
                </header>
                <p>
                Ուրախ ենք հայտարարել, որ Հունիսի 29ին կայացավ առաջին հաքաթոնը, որի շրջանակներում հայ երիտասարդների՝ «Սպիտակ գլխարկով հաքերների» կատարած աշխատանքը թույլ տվեց գտնել Հայաստանում գործող պետական էլեկտրոնային կառավարման համակարգի թերությունները։
                </p>
                <p>
                  <span className="image main">
                    <img src={bountyPhoto} alt=""/>
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Կարծիքներ</h2>
            </header>
            <ul className="features">
              <li>
                <img className="icon major style1"
                  src={karen}
                  alt="Կարեն Վարդանյան"/>
                <h3>ԱՏԶՄ գործադիր տնօրեն՝<br/>Կարեն Վարդանյան</h3>
                <p>«Մեր երիտասարդության ներուժը մեր երկրի անվտանգության ամենահավաստի երաշխիքն է»</p>
              </li>
              <li>
                <img className="icon major style1"
                  src={vaagn}
                  alt="Վահագն Թուխարյան"/>
                <h3>OWASP Armenia-ի համահիմնադիր՝<br/> Վահագն Թուխարյան</h3>
                <p>«Չկան խոցելի կամ անխոցելի էլ. Կառավարման համակարգեր, կան չտեստավորված կամ տեստավորված համակարգեր»</p>
              </li>
              <li>
                <img className="icon major style1"
                  src={samvel}
                  alt="Կարեն Վարդանյան"/>
                <h3>ArmSec Հիմնադրամի համահիմնադիր՝<br/>Սամվել Մարտիրոսյան</h3>
                <p>«Պետական համակարգը ներքին ուժերով ամբողջությամբ ապահով լինել չի կարող, միայն համայնք - պետություն համագործակցությունն է, որ կարող է իրական անվտանգություն ապահովել»</p>
              </li>
            </ul>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
