import React from 'react'
import ProgramsNavigation from '../components/programsNavigation'
import 'bulma/css/bulma.css'
import './programPages.css'
import ImagineImage from '../images/imagine.jpg'

const Imagine = () => {
  return (
    <div>
      <ProgramsNavigation />
      <div>
        <div className="imagesContainer">
          <div className="ugaMobileContainer ">
            <img id="mainImage" src={ImagineImage} />
          </div>
          <h1>Imagine</h1>
          <div id="pageText">
            <p className="programText">
              Imagine that one day, in great desperation and need, your parents decided to sell you or a sibling in
              order to feed and support the rest of the family. Sadly, a young virgin girl is worth three years of an
              average salary in Cambodia and many times, selling their daughter is the only option the parents feel they
              can resort to.
            </p>
            <p className="programText">
              Or, instead of being sold, imagine someone you love being kidnapped, but instead of being held for ransom,
              the innocent victim will be ruthlessly raped by a dozen men on an average "business" day. Escape is grim,
              the prison these people have constructed is dark and cold, and the outside world is distant and alienated
              by the victims "dirtiness" after losing their virginity, despite the atrocious circumstances.
            </p>
            <p className="programText">
              Abused Children's Fund is working with groups within Cambodia dedicated to the reintegration and
              rehabilitation of girls who have been sexually trafficked. With your support we can continue to bring
              comfort to the women who have been rescued from their treacherous captivity.
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

export default Imagine
