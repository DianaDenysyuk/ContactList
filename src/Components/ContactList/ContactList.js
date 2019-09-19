import React from 'react';

import ContactListItem from '../ContactListItem/ContactListItem'

const ContactList = ({ persons, onFavoriteChange }) =>{

    const newItem = persons.map((item) =>{
        return <ContactListItem 
        name={item.name} 
        desc={item.desc} 
        gender={item.gender} 
        avatar={item.avatar} 
        id={item.id}
        favorite={item.favorite}
        onFavoriteChange={() => onFavoriteChange(item.id)} />
    });

    return(
        <div className="col-md-10 offset-md-1 row-block">
            <ul id="sortable">
                {newItem}          
            </ul>
        </div>
    );
};
export default ContactList;
