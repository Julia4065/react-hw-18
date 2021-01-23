import React, { Component } from 'react';
import Contact from './Contact'

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    id: 1
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    id: 2
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    id: 3
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    id: 4
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    id: 5
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    id: 6
}];


class Contracts extends Component {

    state = {
        contacts: contacts,
        search: '',
        isFemaleChecked: true,
        isMaleChecked: true,
        isNoneChecked: true,
        filteredContacts: contacts
    }

    handleSearchChange = event => {
        this.setState({ search: event.target.value });
        const filteredContacts = this.state.contacts.filter(el => {
            return el.lastName.includes(event.target.value);
        })
        this.setState({ filteredContacts: filteredContacts });
    }

    defineCheckboxesState = (event) => {
        const checkedOrNot = event.target.checked;
        const checkboxId = event.target.id;
        if (checkboxId === 'female-checkbox') this.setState({ isFemaleChecked: checkedOrNot });
        else if (checkboxId === 'male-checkbox') this.setState({ isMaleChecked: checkedOrNot });
        else this.setState({ isNoneChecked: checkedOrNot });
    }

    handleCheckbox = async (event) => {
        await this.defineCheckboxesState(event);

        let contactsFiltered = contacts.filter(
            (contact) =>
                (contact.gender === 'female' && this.state.isFemaleChecked) ||
                (contact.gender === 'male' && this.state.isMaleChecked) ||
                (contact.gender === undefined && this.state.isNoneChecked)
        );
        this.setState({ filteredContacts: contactsFiltered });
    }


    render() {
        return (
            <div className="all-filters">
                <p>Filter by last name: </p><input className="input-filter" value={this.state.search}
                    onChange={this.handleSearchChange} />
                <div className="checkboxes">
                    <p><input className="filters" type="checkbox" checked={this.state.isFemaleChecked} id="female-checkbox"
                        onChange={this.handleCheckbox} />Female</p>
                    <p><input className="filters" type="checkbox" checked={this.state.isMaleChecked} id="male-checkbox"
                        onChange={this.handleCheckbox} />Male</p>
                    <p><input className="filters" type="checkbox" checked={this.state.isNoneChecked} id="none-checkbox"
                        onChange={this.handleCheckbox} />Not detected</p>
                </div>

                {this.state.filteredContacts.map((contact, i) => <Contact contact={contact}
                    gender={contact.gender} key={i} />)};
            </div>
        )
    }
}

export default Contracts;