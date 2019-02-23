import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import 'react-responsive-carousel/lib/styles/main.css'
import { onChange, onClickItem, onClickThumb } from 'react-responsive-carousel/lib/components/Carousel.js'
import './home.css'
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
            <img
              className="carouselImage"
              src="https://cdn.audubon.org/cdn/farfuture/VaAekJa0h002XqSGU4cboQRRwALdbv-RH2nHcb4c-Ok/mtime:1497971335/sites/default/files/styles/hero_image/public/web_hummingbird-ruby-throated-male-perched-on-butterfly-weed-d-yl5t5153.jpg?itok=1L-8PI5p"
            />
          </div>
          <div>
            <img
              className="carouselImage"
              src="https://cdn.audubon.org/cdn/farfuture/HTsu2RV2jHvTOc-souYiyhk8N7P-ID63dcqeBl7hqE0/mtime:1497975973/sites/default/files/styles/hero_image/public/sfw_pigeon_ryanberkley.jpg?itok=ZU1l1W9v"
            />
          </div>
          <div>
            <img
              className="carouselImage"
              src="https://cdn.audubon.org/cdn/farfuture/I3LY23SocvdMRHkNU6azggFvXri0abo5LbKtiSzLIoA/mtime:1498041054/sites/default/files/styles/hero_image/public/web_28468608866_42796d8cca_o-2.jpg?itok=YDaMz-RD"
            />
          </div>
          <div>
            <img
              className="carouselImage"
              src="http://ny.audubon.org/sites/g/files/amh406/f/styles/hero_image/public/bobolink_in_flight_tim_lenz.jpg?itok=j5ZBAbWl"
            />
          </div>
          <div>
            <img
              className="carouselImage"
              src="http://nm.audubon.org/sites/g/files/amh686/f/styles/hero_image/public/photographer_with_cranes_flickr_creative_commons_john_fowler.jpg?itok=16pDkurC"
            />
          </div>
          <div>
            <img className="carouselImage" src="https://i.redd.it/f63udfw1n5101.jpg" />
          </div>
        </Carousel>
        <div className="container">
          <h1 id="headerChange">Programs</h1>
          <div className="content">
            <div className="columns">
              <div className="column">
                <div className="imageContainerLeft">
                  <img
                    className="image"
                    src="https://stlucieaudubon.org/hartBeat/Images/2014/140130TricoloredHeron.jpg"
                  />
                </div>
                <div className="descriptionLeft">
                  <h1>First column</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod
                    augue et, faucibus diam.
                  </p>
                  <a>Learn More </a>
                </div>
              </div>
              <div className="column">
                <div className="imageContainerRight">
                  <img className="image" src="https://farm3.staticflickr.com/2629/32129883953_eb089902e3_b.jpg" />
                </div>
                <div className="descriptionRight">
                  <h1>Second column</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod
                    augue et, faucibus diam.
                  </p>
                  <a>Learn More </a>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="imageContainerLeft">
                  <img className="image" src="https://farm3.staticflickr.com/2629/32129883953_eb089902e3_b.jpg" />
                </div>
                <div className="descriptionLeft">
                  <h1>Third column</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod
                    augue et, faucibus diam.
                  </p>
                  <a>Learn More </a>
                </div>
              </div>
              <div className="column">
                <div className="imageContainerRight">
                  <img
                    className="image"
                    src="https://stlucieaudubon.org/hartBeat/Images/2014/140130TricoloredHeron.jpg"
                  />
                </div>
                <div className="descriptionRight">
                  <h1>Fourth column</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod
                    augue et, faucibus diam.
                  </p>
                  <a>Learn More </a>
                </div>
              </div>
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
}

export default Home
