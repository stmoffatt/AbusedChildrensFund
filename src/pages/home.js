import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import 'react-responsive-carousel/lib/styles/main.css'
import { onChange, onClickItem, onClickThumb } from 'react-responsive-carousel/lib/components/Carousel.js'
import { Link } from 'react-router-dom'
import './home.css'
import Header1 from '../images/header1.jpg'
import Header2 from '../images/header2.jpg'
import Header3 from '../images/header3.jpg'
import HaitiImage from '../images/Haiti3.jpeg'
import Uganda2Image from '../images/uganda3.jpeg'
import MexicoImage from '../images/mexico.jpeg'
import PhilippinesImage from '../images/philippines1.jpg'

var Carousel = require('react-responsive-carousel').Carousel

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
        >
          <div>
            <img className="carouselImage" src={Header1} alt="Header1" />
          </div>
          <div>
            <img className="carouselImage" src={Header2} alt="Header2" />
          </div>
          <div>
            <img className="carouselImage" src={Header3} alt="Header3" />
          </div>
        </Carousel>
        <div className="container">
          <h1 id="headerChange">Programs</h1>
          <div className="content">
            <div className="columns">
              <div className="column">
                <div className="imageContainerLeft">
                  <img className="image" src={HaitiImage} alt="UgandaImage" />
                </div>
                <div className="descriptionLeft">
                  <h1>Haiti</h1>
                  <p>
                    Abused Children's Fund delivered around $500,00 worth of medical supplies, clothing, shoes and other
                    emergency equipment to the desperate country of Haiti.
                  </p>
                  <Link to="/haiti">Learn More </Link>
                </div>
              </div>
              <div className="column">
                <div className="imageContainerRight">
                  <img className="image" src={PhilippinesImage} alt="PhilippinesImage" />
                </div>
                <div className="descriptionRight">
                  <h1>Philippines</h1>
                  <p>
                    Through work with our partners, ACF has provided essential medicines, supplies, professional
                    services and most importantly caring full-time staff and volunteers who work directly with poor
                    children.
                  </p>
                  <Link to="/philippines">Learn More </Link>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="imageContainerLeft">
                  <img className="image" src={Uganda2Image} alt="Uganda2Image" />
                </div>
                <div className="descriptionLeft">
                  <h1>Uganda</h1>
                  <p>
                    Through SCM, ACF helps the disadvantaged youths through formal education or vocational training.
                    They teach practical life skills to become self-sustaining productive members of society.
                  </p>
                  <Link to="/uganda">Learn More </Link>
                </div>
              </div>
              <div className="column">
                <div className="imageContainerRight">
                  <img className="image" src={MexicoImage} alt="MexicoImage" />
                </div>
                <div className="descriptionRight">
                  <h1>Mexico</h1>
                  <p>
                    Hundreds of abandoned children wander the streets of Mexico alone, not knowing where their next bite
                    of food will come from. Hundreds of thousands of Mexican children are orphaned or abandoned.
                  </p>
                  <Link to="/mexico">Learn More </Link>
                </div>
              </div>
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
}

export default Home
