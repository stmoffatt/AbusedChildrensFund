import React from 'react'
import ProgramsNavigation from '../components/programsNavigation'
import 'bulma/css/bulma.css'
import './programPages.css'
import UgandaImage from '../images/uganda2.png'

const Uganda = () => {
  return (
    <div>
      <ProgramsNavigation />
      <div>
        <div className="imagesContainer">
          <div className="ugaMobileContainer">
            <img id="mainImage" src={UgandaImage} />
          </div>
          <h1 className="ugaTextSize">Street Children Ministry</h1>
          <div id="pageText">
            <p className="programText">
              With God's Love, ACF focuses on helping children who are on the streets because of hardships and lack of a
              home after having been orphaned or abandoned. These children do not want the street life, but a caring,
              loving environment.
            </p>
            <p className="programText">
              Through SCM, ACF helps the disadvantaged youths through formal education or vocational training. They
              teach practical life skills to become self-sustaining productive members of society. Their main focus is
              on providing a better way of living, a sense of direction with values and disposition of loving God and
              neighbors.
            </p>
            <p id="bottomMargin" className="programText">
              Homes are created where compassionate adults live with the children and share their day-to-day experiences
              with them, serving as a role model. The children are taught in a classroom setting by their mentor and
              they see their mentor embody these principles in home life and through community service projects.
              Although the children are victims of AIDS, poverty or other problems, part of each day is given to
              community service, so they can transcend the feeling of being victims themselves.
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

export default Uganda
