import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';

const listOfContact = [
    {
        name : "Camila Terry",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        gender : "women",
        avatar : "https://randomuser.me/api/portraits/women/50.jpg"
    }
]
console.log(listOfContact);

const App = () => {
    return(
        <section className="row-section">
            <div className="continer">
                <Header />
                <ContactList />
            </div>
        </section>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
