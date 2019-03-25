import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './about.css'

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1> About Us</h1>
        <div>
          <p className="aboutText">
            Abused Children’s Fund in a Family with one mission and goal, to help children around the world who are
            suffering from sexual and physical abuses as well as helping disadvantaged children around the world.
          </p>
          <p className="aboutText">
            Here at Abused Children’s Fund we work endlessly towards our mission of saving children who have been
            physically and sexually abused or simply forgotten by the rest of the world. Each year we dedicate ourselves
            to accomplishing our goals of feeding, sheltering, rescuing and saving the lives of children all around the
            world. Whether by donating to the Organization or Simply caring enough to investigate this epidemic YOU are
            no longer a stranger to our organization but a crucial partner and investor.
          </p>
          <p className="aboutText">
            With millions of children sexually trafficked and abused every year our work together has become one of the
            most important and necessary on the planet! This crisis of crimes cannot continue and with your help we plan
            on doing everything within our power to stop these crimes and help rehabilitate the children who have been
            rescued.
          </p>
          <p>
            Thank you for believing in us and joining our cause to bring Aid to Abused Children. Abused Children’s Fund
            was first established in 1995. For years we have gathered around our partners and Donors to make one dream
            come true. That children everywhere will be given freedom from any slavery they may be confined to and that
            any children suffering any type of abuse will be rescued from their situation.
          </p>
        </div>
        <div className="buttonContainer">
          <a
            href="https://www.givedirect.org/donate/?cid=11851"
            target="_blank"
            className="button is-black is-large is-fullwidth"
          >
            Donate Today
          </a>
        </div>
      </div>
    )
  }
}

export default About
