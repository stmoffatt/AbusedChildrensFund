import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './navigation.css'

const menu = [
  {
    name: 'Esmeralda and Omar',
    to: '/esmeralda-and-omar',
  },
  {
    name: 'Rolando',
    to: '/rolando',
  },
  {
    name: 'Jocelin',
    to: '/jocelin',
  },
  {
    name: 'Lucia',
    to: '/lucia',
  },
]

function header(headerText) {
  if (headerText == 'esmeralda-and-omar') {
    return 'Esmeralda and Omar'
  } else {
    return headerText.charAt(0).toUpperCase() + headerText.slice(1)
  }
}

const renderMenu = () =>
  menu.map(item => {
    return (
      <li key={item.name} className="list">
        <NavLink to={item.to} activeClassName="activeLink" className="link">
          {item.name}
        </NavLink>
      </li>
    )
  })

class trueStoriesNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      headerTexts: window.location.pathname.slice(1),
    }
  }

  componentDidUpdate(prevState) {}

  render() {
    const dropdownClass = this.state.clicked ? 'dropdown is-active' : 'dropdown'
    console.log(this.state)
    return (
      <div className="programsNavBarContainer">
        <div className="navContainer">
          <h1 id="programHeader">{header(this.state.headerTexts)}</h1>
          <ul className="listContainer">{renderMenu()}</ul>
          <div className="dropdownContainer">
            <div
              className={dropdownClass}
              onClick={e => {
                e.preventDefault()
                this.setState({ clicked: !this.state.clicked })
              }}
            >
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span id="dropdownButton">{header(this.state.headerTexts)}</span>
                  <span className="icon is-small">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <NavLink to="/esmeralda-and-omar" activeClassName="is-active" className="dropdown-item">
                    Esmeralda and Omar
                  </NavLink>
                  <NavLink to="/jocelin" activeClassName="is-active" className="dropdown-item">
                    Jocelin
                  </NavLink>
                  <NavLink to="/lucia" activeClassName="is-active" className="dropdown-item">
                    Lucia
                  </NavLink>
                  <NavLink to="/rolando" activeClassName="is-active" className="dropdown-item">
                    Rolando
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default trueStoriesNavigation
