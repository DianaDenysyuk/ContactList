import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';

const App = () => {
    return(
        <section className="row-section">
            <div className="continer">
                <Header />
                <div className="col-md-10 offset-md-1 row-block">
                    <ul id="sortable">
                        <ContactList />
                    </ul>
                </div>
            </div>
        </section>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
