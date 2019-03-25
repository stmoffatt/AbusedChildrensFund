import React from 'react'
import 'bulma/css/bulma.css'
import './whereWeServe.css'

const WhereWeServe = () => {
  return (
    <div className="whereWeServeContainer">
      <h1 id="headerChange" className="whereWeServeMobileSize textAlign">
        Where We Serve
      </h1>
      <div className="content">
        <div className="columns">
          <div className="column">
            <div className="descriptionLeft">
              <h1>Philippines</h1>
              <div id="philippinesImageContainer">
                <img
                  id="philippinesImage"
                  src="http://www.abusedchildrensfund.org/images/annual-report/philippines.png"
                  alt="Philippines"
                />
              </div>
              <p>
                This year our team, led by our Director of Operations Campbell Kelley, went on a relief mission to our
                partners in the Philippines where we helped provide over $5,000,000 of medical aid! He also worked at
                the feeding program in the smoky mountain community in Manila where thousands of children go hungry,
                hunt for garbage all day to sell for the price of a meal and are without any education. “When we think
                of poverty, hunger and abuse, normally we think of Africa, where we also provide support, but the fact
                is that tens of thousands of children are sexually trafficed in the Philippines alone. And thousands of
                children live off of one meal a day that might cost around eleven cents. We at ACF are making a
                difference in these children’s lives and I’m proud to be a part of our team.”
              </p>
            </div>
          </div>
          <div className="column">
            <div className="descriptionRight">
              <h1>Mexico</h1>
              <div id="mexicoImageContainer">
                <img
                  id="mexicoImage"
                  src="http://www.abusedchildrensfund.org/images/annual-report/mexico.png"
                  alt="Mexico"
                />
              </div>
              <p>
                “The work and help of Abused Children’s Fund has helped save and rescue the lives of many children here
                in Juarez, Mexico. Before children were abused and living on the streets, they now have a safe place to
                live and even an education. ACF is helping to change the cycle of abuse and poverty here in our
                community. We cannot thank the donors enough for their support. Without you these children could not be
                helped!”
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="descriptionLeft">
              <h1>United States</h1>
              <div id="unitedImageContainer">
                <img
                  id="unitedStatesImage"
                  src="http://www.abusedchildrensfund.org/images/annual-report/usa.png"
                  alt="United States"
                />
              </div>
              <p>
                In the U.S. with your support, we succeeded with rescuing children from dangerous living situations here
                in our own community. “Your work has helped us so much. Providing not only emotional support and care
                for our family but also financial support to help with the costs of school supplies, food and clothes
                for our adopted children. We can’t thank you enough.”
              </p>
            </div>
          </div>
          <div className="column">
            <div className="descriptionRight">
              <h1>Jamaica</h1>
              <div id="jamaicaImageContainer">
                <img
                  id="jamaicaImage"
                  src="http://www.abusedchildrensfund.org/images/annual-report/jamaica.png"
                  alt="Jamaica"
                />
              </div>
              <p>
                In 2013 ACF began supporting the mission of several orphanages in Jamaica to reach out to abused
                children and provide them with food, shelter and even an education. The incredible work that was started
                decades ago by dedicated individuals has produced amazing stories of hope and care for abused children.
                Our partners provide care for mentally challenged children in their community. With your help, we are
                making a difference in their lives!
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="descriptionLeft">
              <h1>Belize</h1>
              <div id="belizeImageContainer">
                <img
                  id="belizeImage"
                  src="http://www.abusedchildrensfund.org/images/annual-report/belize.png"
                  alt="Belize"
                />
              </div>
              <p>
                ACF continues to support our partners in Belize who run a Christian academy for children in a rural
                village. The children are also provided with a daily meal and are learning more every day about how they
                can one day change the world.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="descriptionRight">
              <h1>Uganda</h1>
              <div id="ugandaImageContainer">
                <img
                  id="ugandaImage"
                  src="http://www.abusedchildrensfund.org/images/annual-report/uganda.png"
                  alt="Uganda"
                />
              </div>
              <p>
                With your priceless support we continued working with our partners to help rescue and feed children
                living on the streets in Kampala, Uganda. We also support our local orphanage where many rescued street
                children now live.
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="descriptionLeft">
              <h1>South Africa</h1>
              <div id="southImageContainer">
                <img
                  id="southAfricaImage"
                  src="http://www.abusedchildrensfund.org/images/annual-report/safrica.png"
                  alt="South Africa"
                />
              </div>
              <p>
                We’ve continued to help abused and vulnerable children living in dangerous “townships” receive therapy,
                care and food in South Africa.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="descriptionRight" />
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

export default WhereWeServe
