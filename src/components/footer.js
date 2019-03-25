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
          <p>707-483-2939 • brant@aac-mail.org • 1535 Farmers Lane #200 Santa Rosa, CA 95405</p>
          <p> ©2019 Abused Children's Fund. All Rights Reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer
