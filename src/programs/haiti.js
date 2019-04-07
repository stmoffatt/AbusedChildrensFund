import React from 'react'
import ProgramsNavigation from '../components/programsNavigation'
import 'bulma/css/bulma.css'
import './programPages.css'
import HaitiImage from '../images/Haiti1.jpg'
import Haiti2Image from '../images/haiti2.jpg'

const Haiti = () => {
  return (
    <div>
      <ProgramsNavigation />
      <div>
        <div className="imagesContainer">
          <div className="mobileContainer">
            <img id="mainImage" src={HaitiImage} alt="Haiti" />
          </div>
          <h1 className="mobileTextSize">Still In Need Of Our Help</h1>
          <div id="pageText">
            <p className="programText">What causes young children to bake and eat pies that are made of dirt? </p>
            <p className="programText">
              In Haiti, the world's economic crisis is estimated to cause 22 more children to die per hour in 2009 than
              in 2008. The number of children with malnutrition has doubled. Many fall asleep in totaled cars, dirty
              dumpsters, streets and any other place that they fall down on from exhaustion and starvation.{' '}
            </p>
            <p className="programText">
              Kids are becoming quite creative with their menus. Cookies, cakes and pies are frequently prepared snacks.
              The only slight difference between your birthday cake and what they eat is their main and only ingredient,
              mud.
            </p>
          </div>
          <img className="floatLeft margin-right" id="mainImage" src={Haiti2Image} alt="Haiti" />
          <div id="pageText">
            <p className="programText">
              Abused Children's Fund delivered around $500,00 worth of medical supplies, clothing, shoes and other
              emergency equipment to the desperate country of Haiti. As you already know, on January 12th Port-au-Prince
              was hit by a devastating 7.0 earth quake.{' '}
            </p>
            <p className="programText">
              Recently ACF has received another urgent request from our partners near Port-au-Prince. We are responding
              to this urgent request by ending thousands of "Love Bundles" to our partners on the ground just outside of
              Port-au-Prince to be delivered to the children. These packages are stuffed full of emergency supplies and
              much needed nutritional food. The love bundles include towels, soap, toothpaste and toothbrush, peanut
              butter and many more desperately needed items.{' '}
            </p>
            <p className="programText">
              Without your donations, ACF would not be able to send relief aid to the malnourished and abused children
              who have survived the quake. We are continuing our efforts to relieve the suffering, especially that of
              the neglected and orphaned children.{' '}
            </p>
            <p className="programText">
              ACF was one of the very first groups to deliver supplies to Earthquake victims and we continue to provide
              for the abused and neglected children of Haiti. Thank you for your time, your donations and your prayers
              for this hurting country and her orphaned children.{' '}
            </p>
            <p className="programText">
              On behalf of the Haitian children whom we have fed, thank you for saving lives!{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="buttonContainer">
          <a
            href="https://www.givedirect.org/donate/?cid=11851"
            target="_blank"
            rel="noopener noreferrer"
            className="button is-black is-large is-fullwidth"
          >
            Donate Today
          </a>
        </div>
      </div>
    </div>
  )
}

export default Haiti
