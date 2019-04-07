import React from 'react'
import TrueStoriesNavigation from '../components/trueStoriesNavigation'
import 'bulma/css/bulma.css'
import './trueStories.css'
import JocelinImage from '../images/jocelin.jpg'

const jocelin = () => {
  return (
    <div>
      <TrueStoriesNavigation />
      <div className="trueStoriesContainer">
        <div className="trueStoriesImageContainer">
          <figure className="image is-square">
            <img src={JocelinImage} alt="Jocelin" />
          </figure>
        </div>
        <div className="info">
          <h1 className="textAlign">Jocelin</h1>
          <p className="trueStoriesText">
            Jocelin is only 6 years old but has experienced more terror than most of us experience in our lifetime. When
            she was only 4 years old a farmer found her wandering in the remote hills of Juarez. She was naked, dirty,
            hungry, crying and afraid. The farmer called the authorities and she was brought to DIF, Mexico's version of
            Child Protective Services. DIF social workers had Jocelin examined and it was confirmed that she had been
            savagely raped.
          </p>

          <p className="trueStoriesText">
            After further investigation authorities discovered two other children at Jocelin's home, a girl and a boy,
            aged 5 and 6, alone at the house. Their mother worked down the street and it was her practice to leave her
            children for days at a time, putting the 6-year-old brother in charge.
          </p>

          <p className="trueStoriesText">
            Jocelin had been kidnapped from the house several days before by a male "friend" of the mother. The two
            children were relocated to Emmanuel. Jocelin, who had been so traumatized by the experience, lost her
            ability to speak since being found. She was placed in a special home for traumatized children in order that
            she could receive therapy. She was totally closed off, unwilling to communicate or even acknowledge the
            presence of others except in one circumstance.
          </p>
          <p className="trueStoriesText">
            Once a week Jocelin's siblings would visit her. It was during these weekly visits that Jocelin would come to
            life, hugging and talking with her sister and brother. After joining her brother and sister at Emmanuel,
            Jocelin has turned into a real spitfire, very loving and affectionate, but still very uneasy if something in
            her world seems out of line. She continues to grow through the love and affection from her peers and the
            caring teachers around her daily.
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

export default jocelin
