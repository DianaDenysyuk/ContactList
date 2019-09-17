import React from 'react'

const ContactList = () =>{
    return(
        <li><div className="media">
	            <div className="media-left align-self-center">
	                <img className="rounded-circle" src="https://randomuser.me/api/portraits/women/50.jpg" alt=""/>
	            </div>
	            <div className="media-body">
	                <h4>Camila Terry</h4>
	                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
	            </div>
	            <div className="media-right align-self-center">
	                <a href="https://www.google.com" className="btn btn-default">Contact Now</a>
	            </div>
        </div></li>
    )
}
export default ContactList;
