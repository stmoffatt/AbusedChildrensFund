import React from 'react'
import TrueStoriesNavigation from '../components/trueStoriesNavigation'
import 'bulma/css/bulma.css'
import './trueStories.css'
import RolandoImage from '../images/rolando.jpg'

const rolando = () => {
  return (
    <div>
      <TrueStoriesNavigation />
      <div className="trueStoriesContainer">
        <div className="trueStoriesImageContainer">
          <figure className="image is-square">
            <img src={RolandoImage} />
          </figure>
        </div>
        <div className="info">
          <h1 className="textAlign">Rolando</h1>
          <p className="trueStoriesText">
            Rolando and his two brothers came to Emmanuel Children's Home when they were 5, 6 and 7 years old. Their
            father was left alone to care for his three sons after their mother left them. The boys' father was forced
            to leave in order to earn more money and left Rolando and his brothers with relatives. Rolando's father
            began to notice that he became very uncomfortable, even fearful, each time the father would leave to go to
            work. He finally learned that his brother, Rolando's uncle, was molesting Rolando. Their father was
            mortified and took the boys away. He knew he needed to find a safer place for his children.
          </p>

          <p>
            Emmanuel Children's Home was able to provide the three boys with a warm, nurturing environment. Rolando is
            now 13 years old, and attends junior high school. He loves living at Emmanuel and is now known there for his
            athletic abilities and helpful attitude with his teachers.
          </p>

          <h3>Rolando's UCAN Experience:</h3>
          <p>
            "At first when I got to UCAN I thought that everything was going to be easy, but I soon realized not
            everything was like I thought it was. When I got to the bridge on our outside adventure day I was scared and
            I didn’t want to do it. But with the encouragement of my friends and counselors I was able to conquer the
            bridge."
          </p>
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

export default rolando
