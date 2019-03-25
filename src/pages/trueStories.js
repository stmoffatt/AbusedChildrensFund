import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './trueStories.css'

class TrueStories extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1 id="titleChange">True Stories</h1>
        </div>
        <div classname="body">
          <div className="columns">
            <div className="column is-three-fifths">
              <div className="imageContainer">
                <img className="image" src="https://stlucieaudubon.org/hartBeat/Images/2014/140315SwampHen.jpg" />
              </div>
            </div>
            <div className="column" id="descriptionId">
              <div className="description">
                <h3 className="columnTitle">First column</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue
                  et, faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi
                  imperdiet, euismod augue et, faucibus diam.
                </p>
                <a>Learn More </a>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-fifths">
              <div className="imageContainer">
                <img
                  className="image"
                  src="https://res.cloudinary.com/www-virgin-com/virgin-com-prod/sites/virgin.com/files/Articles/Richard%20Branson/animals/flamingos/marcobava_necker_flamingo_0.jpg"
                />
              </div>
            </div>
            <div className="column" id="descriptionId">
              <div className="description">
                <h3 className="columnTitle">Second column</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue
                  et, faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi
                  imperdiet, euismod augue et, faucibus diam.
                </p>
                <a>Learn More </a>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-fifths">
              <div className="imageContainer">
                <img
                  className="image"
                  src="https://2.bp.blogspot.com/-S1k9FYPNBJw/WiQWyRv9iBI/AAAAAAAAhO8/n4s5fSx8u-4aGHrBWz77vYe9_i3hfp-ygCLcBGAs/s1600/IMG_9315.jpg"
                />
              </div>
            </div>
            <div className="column" id="descriptionId">
              <div className="description">
                <h3 className="columnTitle">Third column</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue
                  et, faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi
                  imperdiet, euismod augue et, faucibus diam.
                </p>
                <a>Learn More </a>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-fifths">
              <div className="imageContainer">
                <img
                  className="image"
                  src="https://res.cloudinary.com/www-virgin-com/virgin-com-prod/sites/virgin.com/files/Articles/Richard%20Branson/animals/flamingos/marcobava_necker_flamingo_feeding_0.jpg"
                />
              </div>
            </div>
            <div className="column" id="descriptionId">
              <div className="description">
                <h3 className="columnTitle">Fourth column</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi imperdiet, euismod augue
                  et, faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi
                  imperdiet, euismod augue et, faucibus diam.
                </p>
                <a>Learn More </a>
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
      </div>
    )
  }
}

export default TrueStories
