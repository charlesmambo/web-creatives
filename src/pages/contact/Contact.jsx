import React from 'react';
import '../contact/Contact.css';
import EMAIL from '../../assets/email.svg';
import PHONE from '../../assets/phone.svg';
import CTC from '../../assets/ctc.svg';
import { CgTouchpad } from 'react-icons/cg';
import PrimaryBtn from '../../components/btn/primaryBtn';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className="contact-content">
            <h2>Let’s move <br /> the needle</h2>
            <ul>
                <li>
                    <img src={EMAIL} alt="" />
                    webbcreativesagency@gmail.com
                </li>
                <li>
                     <img src={PHONE} alt="" />
                    +27 629 571 202
                </li>
            </ul>

            <img src={CTC} alt="" className="ctc-img" />
        </div>

        <form action="">
            <div className="ctc-inputs">
                <div className="form-control">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Tumelo'/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Company</label>
                    <input type="text" placeholder='ABSA Bank'/>
                </div>
            </div>
            <div className="ctc-inputs">
                <div className="form-control">
                    <label htmlFor="">Your email</label>
                    <input type="text" placeholder='tumelo@absabank.com'/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Your phone</label>
                    <input type="text" placeholder='Your phone number'/>
                </div>
            </div>

            <div className="interests-wrapper">
                <p>I’m interested in..</p>
                <div className="interests">
                    <p>Website design</p>
                    <p>UI/UX</p>
                    <p>UX Audit</p>
                    <p>Branding</p>
                    <p>Landing Page</p>
                    <p className='ng'>NextGen</p>
                </div>
            </div>

            <div className="textarea-wrapper">
                <p>Tell us more about your project.</p>
                <textarea name="" id="" placeholder='Write the message here...'></textarea>
                <button className='ctc-btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Contact