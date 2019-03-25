import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Haiti from './programs/haiti'
import Philippines from './programs/philippines'
import Uganda from './programs/uganda'
import Mexico from './programs/mexico'
import SexualTrafficing from './programs/sexualTrafficing'
import Imagine from './programs/imagine'
import EsmeraldaAndOmar from './trueStories/esmeraldaAndOmar'
import Jocelin from './trueStories/jocelin'
import Lucia from './trueStories/lucia'
import Rolando from './trueStories/rolando'
import About from './pages/about'
import MissionStatment from './about/missionStatment'
import AnnualReport from './about/annualReport'
import WhereWeServe from './about/whereWeServe'
import Support from './pages/support'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Route exact path="/" render={props => <Home />} />

          <Route exact path="/haiti" render={props => <Haiti />} />
          <Route exact path="/philippines" render={props => <Philippines />} />
          <Route exact path="/uganda" render={props => <Uganda />} />
          <Route exact path="/mexico" render={props => <Mexico />} />
          <Route exact path="/sexual-trafficing" render={props => <SexualTrafficing />} />
          <Route exact path="/imagine" render={props => <Imagine />} />

          <Route exact path="/esmeralda-and-omar" render={props => <EsmeraldaAndOmar />} />
          <Route exact path="/jocelin" render={props => <Jocelin />} />
          <Route exact path="/lucia" render={props => <Lucia />} />
          <Route exact path="/rolando" render={props => <Rolando />} />
          <Route exact path="/about" render={props => <About />} />
          <Route exact path="/mission-statment" render={props => <MissionStatment />} />
          <Route exact path="/annual-report" render={props => <AnnualReport />} />
          <Route exact path="/where-we-serve" render={props => <WhereWeServe />} />
          <Route exact path="/support" render={props => <Support />} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
