import React from 'react'
import ProgramsNavigation from '../components/programsNavigation'
import 'bulma/css/bulma.css'
import './programPages.css'

const SexualTrafficing = () => {
  return (
    <div>
      <ProgramsNavigation />
      <div>
        <div className="imagesContainer">
          <img id="mainImage" src="https://d1ia71hq4oe7pn.cloudfront.net/photo/67471171-1280px.jpg" />
          <div id="pageText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue et,
              faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet,
              euismod augue et, faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
              nisi imperdiet, euismod augue et, faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu nisi imperdiet, euismod augue et, faucibus diam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue et, faucibus diam. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue et, faucibus diam. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue et,
              faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet,
              euismod augue et, faucibus diam.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="buttonContainer">
          <a className="button is-black is-large is-fullwidth">Donate Today</a>
        </div>
      </div>
    </div>
  )
}

export default SexualTrafficing
