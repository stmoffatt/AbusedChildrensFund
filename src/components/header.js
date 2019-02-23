import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './header.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Abused Children's Fund
          </Link>
          <div role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to="/mission-statment">
                  Mission Statment
                </Link>
                <Link className="navbar-item" to="/where-we-serve">
                  Where We Serve
                </Link>
                <Link className="navbar-item" to="/annual-report">
                  Annual Report
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/programs">
                Programs
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to="/haiti">
                  Haiti
                </Link>
                <Link className="navbar-item" to="/philippines">
                  Philippines
                </Link>
                <Link className="navbar-item" to="/uganda">
                  Uganda
                </Link>
                <Link className="navbar-item" to="/mexico">
                  Mexico
                </Link>
                <Link className="navbar-item" to="/sexual-trafficing">
                  Sexual Trafficing
                </Link>
                <Link className="navbar-item" to="/imagine">
                  Imagine
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/true-stories">
                True Stories
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to="/esmeralda-and-omar">
                  Esmeralda and Omar
                </Link>
                <Link className="navbar-item" to="/rolando">
                  Rolando
                </Link>
                <Link className="navbar-item" to="/jocelin">
                  Jocelin
                </Link>
                <Link className="navbar-item" to="/lucia">
                  Lucia
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-item">Support</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item">Donate</a>
                <a className="navbar-item">Fundraising</a>
                <a className="navbar-item">Workplace Giving</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>
            <a className="navbar-item">Donate</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
