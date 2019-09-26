import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';
import Add from './Components/Add/Add';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';



class App extends React.Component {
    counterID = 100;
    state = {
        listOfContact: [
            {
                id: 1,
                name : "Camila Terry",
                desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                gender : "women",
                avatar : 26,
                favorite: false
            },
            {
                id: 2,
                name : "Eva Spring",
                desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
                gender : "women",
                avatar : 13,
                favorite: false
            },
            {
                id: 3,
                name : "Angel Bruk",
                desc : "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
                gender : "women",
                avatar : 4,
                favorite: false
            },
            {
                id: 4,
                name : "Misha Lee",
                desc : "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
                gender : "men",
                avatar : 33,
                favorite: false
            },
            {
                id: 5,
                name : "Sasha Kim",
                desc : "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
                gender : "men",
                avatar : 46,
                favorite: false
            },
            {
                id: 6,
                name : "Mary McMiller",
                desc : "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
                gender : "women",
                avatar : 58,
                favorite: false
            },
            {
                id: 7,
                name : "Gary",
                desc : "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates",
                gender : "women",
                avatar : 60,
                favorite: false
            }
        ],
        findContact: ""
    }; 

    onFavoriteChange = id => {
        this.setState(state => {
          const index = this.state.listOfContact.findIndex(elem => elem.id === id);

          const newFavorite = this.state.listOfContact.slice();
          
          newFavorite[index].favorite = !newFavorite[index].favorite;
          
          return {
            favorite: !this.newFavorite
          };
        });
      };

    onSearch = searchName => {
        this.setState({
            findContact: searchName
        });
    }

    onShowContact = (items, searchValue) => {
        if (searchValue.length === 0) {
            return items;
        }
    
        return items.filter(item => {
          return (
                item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
          );
        });
    }

    onContactDelete = id => {
    this.setState(state => {
        const index = this.state.listOfContact.findIndex(elem => elem.id === id);
        const firstPart = this.state.listOfContact.slice(0, index);
        const lastPart = this.state.listOfContact.slice(index + 1);
        const newList = [...firstPart, ...lastPart];

        return {
        listOfContact: newList
        };
    });
    }
    addNewContact = (name, gender, desc) =>{
        return {
            id: this.counterID++,
            name : name,
            desc : desc,
            gender : gender,
            avatar : Math.floor(Math.random() * 99),
            favorite: false
        }
    }

    addContact = (name, gender, desc) =>{
        const contact = this.addNewContact(name, gender, desc);
        const newContactArr = [ ... this.state.listOfContact, contact];
        this.setState(state => {
            return {
                listOfContact: newContactArr
            };
        })
    }
    
    render() {
        const showContacts = this.onShowContact(
            this.state.listOfContact,
            this.state.findContact
        );

        return(
            <section className="row-section">
                <div className="continer">
                    <Router>
                    <Header />
                        <Switch>
                            <Route path="/" 
                            exact 
                            render={() => (
                                <ContactList 
                                persons = {showContacts}
                                onFavoriteChange = {this.onFavoriteChange}
                                onContactDelete={this.onContactDelete}
                                onSearch={this.onSearch} 
                                />
                            )} 
                            />
                            <Route path="/about" exact component={About} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/add"
                            exact
                            render={() => (
                                <Add 
                                addContact={this.addContact}
                                />
                            )} 
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </div>
            </section>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
