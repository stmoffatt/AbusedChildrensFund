import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './navigation.css'

const menu = [
  {
    name: 'Haiti',
    to: '/haiti',
  },
  {
    name: 'Philippines',
    to: '/philippines',
  },
  {
    name: 'Uganda',
    to: '/uganda',
  },
  {
    name: 'Mexico',
    to: '/mexico',
  },
  {
    name: 'Sexual Trafficing',
    to: '/sexual-trafficing',
  },
  {
    name: 'Imagine',
    to: '/imagine',
  },
]

function header(headerText) {
  if (headerText == 'sexual-trafficing') {
    return 'Sexual Trafficing'
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

class ProgramsNavigation extends Component {
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
                  <NavLink to="/haiti" activeClassName="is-active" className="dropdown-item">
                    Haiti
                  </NavLink>
                  <NavLink to="/philippines" activeClassName="is-active" className="dropdown-item">
                    Philippines
                  </NavLink>
                  <NavLink to="/uganda" activeClassName="is-active" className="dropdown-item">
                    Uganda
                  </NavLink>
                  <NavLink to="/mexico" activeClassName="is-active" className="dropdown-item">
                    Mexico
                  </NavLink>
                  <NavLink to="/sexual-trafficing" activeClassName="is-active" className="dropdown-item">
                    Sexual Trafficing
                  </NavLink>
                  <NavLink to="/imagine" activeClassName="is-active" className="dropdown-item">
                    Imagine
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

export default ProgramsNavigation
