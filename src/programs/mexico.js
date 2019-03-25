import React from 'react'
import ProgramsNavigation from '../components/programsNavigation'
import 'bulma/css/bulma.css'
import './programPages.css'
import MexicoImage from '../images/mexico1.png'

const Mexico = () => {
  return (
    <div>
      <ProgramsNavigation />
      <div>
        <div className="imagesContainer">
          <div className="ugaMobileContainer">
            <img id="mainImage" src={MexicoImage} />
          </div>
          <h1 className="mexMobileTextSize">Orphan & School Programs</h1>
          <div id="pageText">
            <p className="programText">
              Hundreds of abandoned children wander the streets of Mexico alone, not knowing where their next bite of
              food will come from. Hundreds of thousands of Mexican children are orphaned or abandoned.{' '}
            </p>
            <p className="programText">
              Hogar de Ninos was created by Rev. Josue Lopez in 1961 to be a safe place for over 100 of these homeless,
              neglected, and deserted children in Juarez, Mexico's most dangerous city.{' '}
            </p>
            <p className="programText">
              Police find children living like human refuse on the dirty, crime-ridden streets in Juarez. They bring
              them to Hogar de Ninos because they know they will be will-cared for there.{' '}
            </p>
            <p className="programText">
              Other children find their way to the Home" when their families can no longer care for them. Sometimes
              their parents have turned to alcohol or drugs; sometimes they struggle and are not able to provide
              adequate food and shelter for their children.{' '}
            </p>
            <p className="programText">
              The home offers these children nutritious meals, a warm bed, and the basic needs in personal hygiene and
              development. The children can mature physically as well as spiritually. In addition to this and education,
              the children receive medical care at their medical and dental clinic.{' '}
            </p>
            <p id="bottomMargin" className="programText">
              The people at Hogar de Ninos focus each day to give the children a sense of destiny, a sense of future.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
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

export default Mexico
