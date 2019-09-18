import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';

const listOfContact = [
    {
        id: 1,
        name : "Camila Terry",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        gender : "women",
        avatar : 26
    },
    {
        id: 2,
        name : "Eva Spring",
        desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
        gender : "women",
        avatar : 13
    },
    {
        id: 3,
        name : "Angel Bruk",
        desc : "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
        gender : "women",
        avatar : 4
    },
    {
        id: 4,
        name : "Misha Lee",
        desc : "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
        gender : "men",
        avatar : 33
    },
    {
        id: 5,
        name : "Sasha Kim",
        desc : "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
        gender : "men",
        avatar : 46
    },
    {
        id: 6,
        name : "Mary MacMiller",
        desc : "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
        gender : "women",
        avatar : 58
    }
];

const App = () => {
    return(
        <section className="row-section">
            <div className="continer">
                <Header />
                <ContactList persons = {listOfContact}/>
            </div>
        </section>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
