import React from 'react'
import 'bulma/css/bulma.css'
import './annualReport.css'

const annualReport = () => {
  return (
    <div className="annualReportContainer">
      <div>
        <h1 className="textAlign">2014 - 2015 Annual Report</h1>
        <h3 className="textAlign">98% of total donations spent were allocated to life-saving programs</h3>
        <div className="circleBox">
          <svg id="programsCover" viewBox="0 0 32 32">
            <circle id="background" r="16" cx="16" cy="16" />
          </svg>
          <svg id="programsMain" viewBox="0 0 32 32">
            <circle id="programs" r="16" cx="16" cy="16" />
          </svg>
          <div className="donationAmount">
            <p>$3,296,688</p>
          </div>
          <div className="donationTitle">
            <p>Programs</p>
          </div>
        </div>
        <div className="circleBox">
          <svg id="managementCover" viewBox="0 0 32 32">
            <circle id="background" r="16" cx="16" cy="16" />
          </svg>
          <svg id="managementMain" viewBox="0 0 32 32">
            <circle id="management" r="16" cx="16" cy="16" />
          </svg>
          <div className="donationAmount">
            <p>$46,968</p>
          </div>
          <div className="donationTitle">
            <p>Management</p>
          </div>
        </div>
        <div className="circleBox">
          <svg id="fundraisingCover" viewBox="0 0 32 32">
            <circle id="background" r="16" cx="16" cy="16" />
          </svg>
          <svg id="fundraisingMain" viewBox="0 0 32 32">
            <circle id="fundraising" r="16" cx="16" cy="16" />
          </svg>
          <div className="donationAmount">
            <p>$19,715</p>
          </div>
          <div className="donationTitle">
            <p>Fundraising</p>
          </div>
        </div>
      </div>
      <h4 className="donationsReceived">Donations Received: $3,387,167 </h4>
      <h4 className="donationsSpent"> Total Donations Spent: $3,363,366</h4>
    </div>
  )
}

export default annualReport
