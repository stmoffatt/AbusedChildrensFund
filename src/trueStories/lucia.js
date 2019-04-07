import React from 'react'
import TrueStoriesNavigation from '../components/trueStoriesNavigation'
import 'bulma/css/bulma.css'
import './trueStories.css'
import LuciaImage from '../images/lucia.jpg'

const lucia = () => {
  return (
    <div>
      <TrueStoriesNavigation />
      <div className="trueStoriesContainer">
        <div className="trueStoriesImageContainer">
          <figure className="image is-square">
            <img src={LuciaImage} alt="Lucia" />
          </figure>
        </div>
        <div className="info">
          <h1 className="textAlign">Lucia</h1>
          <p className="trueStoriesText">
            Lucia was born in southern Mexico and came to the city of Juarez when she was 8 years old. Her mother died
            when she was 10 and she and her 8 siblings were left in the care of her father. She is child number 7, and
            the oldest daughter.
          </p>

          <p className="trueStoriesText">
            Lucia is bright, brave and beautiful and does very well in school. When her schoolwork started to slip and
            she became withdrawn, her teacher asked her if there was anything wrong. Lucia told her that her father was
            molesting her. The teacher helped her go to the authorities; the father went to jail; and Lucia and her two
            younger siblings came to Emmanuel Children's Home
          </p>
          <p className="trueStoriesText">
            All three have thrived here, and are an integral part of everything that Emmanuel Children's Home has to
            offer. They excel in school, participate in sports and dance. Through Lucia's bravery by confessing what was
            happening, she and her siblings have a safe, nurturing environment in which to grow.
          </p>
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
    </div>
  )
}

export default lucia
