import React from 'react';

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

function OneContact(props) {

    const filteredContact = contacts.find((contact) => contact.lastName.toString() === props.match.params.name);

    return <div>
        <p>First name: {filteredContact.firstName}</p>
        <p>Last name: {filteredContact.lastName}</p>
        <p>Phone: {filteredContact.phone}</p>
    </div >
}

export default OneContact;