import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <h1>
            <strong>Abused Children's Fund</strong>
          </h1>
          <p>Phone Number • Email • Location</p>
          <p> ©2018 Abused Children's Fund. All Rights Reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer
