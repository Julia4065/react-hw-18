import React from 'react';
import './styles.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import contactimg from './img/contact-icon.png';
import male from './img/male.png';
import female from './img/female.png';
import none from './img/none.png';

class Contact extends React.Component {
    render() {
        let gender = this.props.contact.gender;

        if (this.props.contact.gender === 'male') {
            gender = male;
        } else if (this.props.contact.gender === 'female') {
            gender = female;
        } else {
            gender = none;
        }
        return (
            <Router>
                <div>
                    <Link to={`/contacts/${this.props.contact.lastName}`} >
                        <div id={this.props.contact.lastName} className="test">
                            <img className="contact-icon-img" src={contactimg} />
                            <p id="firstName">{this.props.contact.firstName} </p>
                            <p id="lastName">{this.props.contact.lastName} </p>
                            <p id="phone">{this.props.contact.phone}</p>
                            <img className="gender-img" src={gender} />
                        </div>
                    </Link>
                </div>
            </Router>
        )
    }
}

export default Contact;