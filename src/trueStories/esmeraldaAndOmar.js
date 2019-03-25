import React from 'react'
import TrueStoriesNavigation from '../components/trueStoriesNavigation'
import 'bulma/css/bulma.css'
import './trueStories.css'
import EsmeraldaImage from '../images/esmeralda.jpg'

const esmeraldaAndOmar = () => {
  return (
    <div>
      <TrueStoriesNavigation />
      <div className="trueStoriesContainer">
        <div className="trueStoriesImageContainer">
          <figure className="image is-square">
            <img src={EsmeraldaImage} />
          </figure>
        </div>
        <div className="info">
          <h1>Esmeralda And Omar</h1>
          <p className="trueStoriesText">
            When you think of the fantasy play of a four-year-old girl, you usually think of playing house or princess.
            When Esmeralda came to Emmanuel Children's Home, her fantasy world was full of adult sexual encounters and
            violence. She posed her dolls in sexually explicit ways and wanted to "play" with her little friends in that
            way as well.
          </p>

          <p className="trueStoriesText">
            Her older brother, Omar, draws very well, but the content of his pictures showed a dark and violent world.
            He suffered from headaches and was often anxious. He told us that he often had nightmares where people were
            being chased by monsters.
          </p>

          <p>
            Thankfully these innocent children were rescued from their former prison of horrors where raw pornography
            and unthinkable sexual abuse, among other despicable acts consumed their lives on a daily basis. The
            children now find comfort and happiness at Emmanuel Children's Home where they currently are playing healthy
            games with other children and drawing beautiful and uplifting pictures.
          </p>
          <h3>Esmeralda's UCAN Experience:</h3>
          <p>
            "It was really fun and besides overcoming our fears we practiced values like, honesty, respect and unity. We
            learned about how to decide what we want and who we want to be and how to do everything possible in order to
            accomplish our dreams and goals. UCAN was the best thing that has ever happened to me."
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

export default esmeraldaAndOmar
