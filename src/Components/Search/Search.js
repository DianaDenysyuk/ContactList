import React from "react";

class Search extends React.Component{
    state = {
        search: ""
    };

    onSearch = e => {
         const findContact = e.target.value;
         this.setState({
           search: findContact
         });
        this.props.onSearch(findContact);
    };

    render(){
        return(
            <div className="col-md-10 offset-md-1 row-block">
               <input onChange={this.onSearch} name="Search" className="form-control searchInput" placeholder="Search..." />
            </div>
        )
    }
}
export default Search; 