import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './header.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
    }
  }
  render() {
    const handleClick = () => {
      this.setState({ toggle: !this.state.toggle })
    }
    const handleItemsClick = () => {
      this.setState({ toggle: false })
    }
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item navPrimary" to="/">
            Abused Children's Fund
          </Link>
          <div
            onClick={handleClick}
            role="button"
            className={this.state.toggle ? 'navbar-burger is-active' : 'navbar-burger'}
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div className={this.state.toggle ? 'navbar-menu is-active' : 'navbar-menu'} id="navMenu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/about">
                About
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/mission-statment">
                  Mission Statment
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/where-we-serve">
                  Where We Serve
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/annual-report">
                  Annual Report
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/haiti">
                Programs
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/haiti">
                  Haiti
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/philippines">
                  Philippines
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/uganda">
                  Uganda
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/mexico">
                  Mexico
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/sexual-trafficing">
                  Sexual Trafficing
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/imagine">
                  Imagine
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/esmeralda-and-omar">
                True Stories
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/esmeralda-and-omar">
                  Esmeralda and Omar
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/rolando">
                  Rolando
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/jocelin">
                  Jocelin
                </Link>
                <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/lucia">
                  Lucia
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link onClick={handleItemsClick} className="navbar-item navSecondary" to="/Support">
                Support
              </Link>
              {/* <div className="navbar-dropdown is-boxed">
                 <a
                  onClick={handleItemsClick}
                  href="https://www.givedirect.org/donate/?cid=11851"
                  target="_blank"
                  className="navbar-item navSecondary"
                >
                  Donate
                </a>
                 <a onClick={handleItemsClick} className="navbar-item navSecondary">
                  Fundraising
                </a>
                <a onClick={handleItemsClick} className="navbar-item navSecondary">
                  Workplace Giving
                </a>
                 <a onClick={handleItemsClick} className="navbar-item navSecondary">
                  Contact
                </a>
              </div> */}
            </div>
            <a
              href="https://www.givedirect.org/donate/?cid=11851"
              target="_blank"
              onClick={handleItemsClick}
              className="navbar-item navSecondary"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
