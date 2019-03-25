import React from 'react'
import ProgramsNavigation from '../components/programsNavigation'
import 'bulma/css/bulma.css'
import './programPages.css'
import SexualTrafficingImage from '../images/sexual-trafficing-main.jpg'

const SexualTrafficing = () => {
  return (
    <div>
      <ProgramsNavigation />
      <div>
        <div className="imagesContainer">
          <div className="sexMobileContainer">
            <img id="mainImage" src={SexualTrafficingImage} />
          </div>
          <h1 className="sexMobileTextSize">Aid for Trafficked Children </h1>
          <div id="pageText">
            <p className="programText">
              Although typically when we talk or think about human trafficking, we imagine a far away country like South
              Africa, Russia, China or even closer Mexico, but this problem occurs on a large scale right here at home
              in the United States.{' '}
            </p>
            <p className="programText">
              Abused Children's Fund (ACF) is proud to be partnering and teaming up with several different organizations
              around the country campaigning for a new look at and possible solutions of sexual trafficking within the
              borders of the United States.{' '}
            </p>
            <p className="programText">
              The beginning stages of this project include researching and recording the gray and unexplored areas of
              human trafficking throughout the US. This initial research will be followed by a campaign to spread
              awareness and then proposing and initiating various ways to cease one of America's worst and least talked
              about problems.{' '}
            </p>
            <p className="programText">
              An estimated 17,000 people and children are trafficked into the United States every year. Although
              authorities don't yet have a precise number, the estimate of American citizens trafficked within the
              United States is said to be even higher.{' '}
            </p>
            <p className="programText">
              Beyond just collecting information to spread awareness, ACF and its partners plan to improve and make
              easier the transition for the sexually trafficked children back into regular society by putting them into
              contact with currently existing rehabilitation centers in the United States.{' '}
            </p>
            <p className="programText">
              If you wish to aid in our collaborative effort to bring an end to sexual trafficking in the US, please go
              to our "How to Help" page. We thank you for helping us aid the uncared for and abused children of today.{' '}
            </p>
            <h3>Goals to the "US Mapping" project include:</h3>
            <div>
              <h4 style={{ display: 'inline', 'margin-right': '5px' }}>Prevention:</h4>
              <p className="programText" style={{ display: 'inline' }}>
                Through heightened awareness and collabrative efforts, etc.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'inline', 'margin-right': '5px' }}>Legal Advocacy:</h4>
              <p className="programText" style={{ display: 'inline' }}>
                assistance from law enforcement services, etc.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'inline', 'margin-right': '5px' }}>Support Services:</h4>
              <p className="programText" style={{ display: 'inline' }}>
                {' '}
                Rehabilitation centers, emergency response, etc.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'inline', 'margin-right': '5px' }}>Research and Awareness:</h4>
              <p className="programText" style={{ display: 'inline' }}>
                {' '}
                lobbying and educational programs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ 'margin-top': '10px' }} className="container">
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
    </div>
  )
}

export default SexualTrafficing
