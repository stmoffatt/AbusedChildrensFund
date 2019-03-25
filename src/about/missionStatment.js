import React from 'react'
import 'bulma/css/bulma.css'
import './missionStatment.css'

const MissionStatment = () => {
  return (
    <div className="aboutContainer">
      <h1 className="textAlign" id="missionStatementMobile">
        Mission Statement
      </h1>
      <div>
        <p className="aboutText">
          As Christians we have come together to follow Christ's teaching of helping the most vulnerable children around
          the world. Abused Children's Fund provides basic human needs to children, women, families and communities,
          particularly, but not limited to, those affected by suffering, poverty, poor health, insufficient education
          and by being victim of human trafficking. This is accomplished by providing or supporting programs that
          deliver food, clean water, health care, abused or abandoned children's care and housing, educational and
          vocational training and mentoring, and by equipping individuals with the means to transition to sustaining
          their own lives through business enterprises.
        </p>
        <p>
          We work with our Christian partners around the world to help achieve our goals and fulfill Christ's calling.
          We thank you for you support and partnership to battle the perverse crimes afflicted on children everyday
          around the world. Today, because of our help together with our donors many children are safer, healthier,
          happier and know first hand of Christ's love for them!
        </p>
      </div>
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
  )
}

export default MissionStatment
