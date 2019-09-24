import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem'
import Search from "../Search/Search";

const ContactList = ({ persons, onFavoriteChange, onContactDelete, onSearch }) =>{

    const newItem = persons.map((item) =>{
        return (
        <ContactListItem 
        id={item.id}
        name={item.name} 
        desc={item.desc} 
        gender={item.gender} 
        avatar={item.avatar} 
        id={item.id}
        favorite={item.favorite}
        onFavoriteChange={() => onFavoriteChange(item.id)} 
        onContactDelete={() => onContactDelete(item.id)} />
        );
    });

    return(
        <React.Fragment>
            <Search onSearch={onSearch} /> 
            <div className="col-md-10 offset-md-1 row-block">
                <ul id="sortable">
                    {newItem}          
                </ul>
            </div>
        </React.Fragment>
    );
};
export default ContactList;
