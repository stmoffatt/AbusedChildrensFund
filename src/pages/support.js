import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './about.css'
import MailForm from '../images/donationform.pdf'
import MemorialForm from '../images/memorialgift.pdf'
import SpecialForm from '../images/specialoccasiongift.pdf'

class Support extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1> How To Help</h1>
        <div>
          <p className="aboutText">
            Please Join Abused Children’s Fund in our fight against Child Abuse and Child Sexual Trafficking and in the
            wonderful work to help heal the children with loving compassion. Abused Children’s Fund has had an overhead
            of less than 3% for the past two years. We work hard to stretch our Donor’s dollars as far as possible. On
            behalf of children everywhere thank you for joining our unique family. A family dedicated to helping restore
            the broken dreams and lives of children and the dream of preventing more children from being hurt.
          </p>
          <h4>Donate By Mail</h4>
          <p>Please download the form. After you've completed the information, mail to: </p>
          <p>Abused Children's Fund 1535</p>
          <p>Farmers Lane #200 Santa Rosa, CA 95405</p>
          <a href={MailForm} target="_blank">
            Mail Form
          </a>
          <h4>Monthly Giving</h4>
          <p>
            Your donation dollars will go even further when you sign up for the monthly giving program. You make a
            monthly commitment for a period of time through your checking account or credit card, providing us with
            authorization to process your gift automatically.{' '}
          </p>
          <h4>Special Occasion Gifts</h4>
          <p>
            Commemorate an occasion with a life-saving gift that is guaranteed to make a difference to a needy child. A
            special occasion gift donation is a wonderful solution for any gift-giving opportunity.{' '}
          </p>
          <a href={SpecialForm} target="_blank">
            Special Occasion Form
          </a>
          <h4>Memorial Gifts</h4>
          <p>
            Dedicate a donation in the memory of a loved one. The gift of life will continue on by helping others in
            need.
          </p>
          <a href={MemorialForm} target="_blank">
            Memorial Form
          </a>
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
}

export default Support
