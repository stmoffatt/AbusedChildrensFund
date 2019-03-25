import React from 'react'
import ProgramsNavigation from '../components/programsNavigation'
import 'bulma/css/bulma.css'
import './programPages.css'
import PhilippinesImage from '../images/philippines2Image.png'

const Philippines = () => {
  return (
    <div>
      <ProgramsNavigation />
      <div>
        <div className="imagesContainer">
          <div className="philMobileContainer">
            <img id="mainImage" src={PhilippinesImage} alt="Philippines" />
          </div>
          <h1 className="philMobileTextSize">Care For Abused Children</h1>
          <div id="pageText">
            <p className="programText">
              This child protection project has established a model child welfare and protection system for Filipino
              children in especially difficult circumstances. Through work with our partners, ACF has provided essential
              medicines, supplies, professional services and most importantly caring full-time staff and volunteers who
              work directly with poor children. Victims of sexual abuse are now living in a loving, therapeutic
              supportive home life environment that promotes healing and the hope of re-integration into normal life.
            </p>
            <p className="programText">
              After several of our ACF board members visited projects dedicated to rescuing, sheltering, feeding and
              educating children who had been abused our partners have a very special place in the ACF Family. They
              continue to inspire everyone they work beside with their steadfast dedication, determination, discipline
              and diligence.
            </p>
            <p className="programText">
              Without the Donors of Abused Children’s Fund many Filipino children who have been taken care of, fed,
              housed, rescued and shown the mercy of God’s love might be otherwise still out on the merciless streets in
              Manila or worse, enslaved. Thanks to Donors like you, these children now have hope for a bright life and
              exciting future!
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

export default Philippines
