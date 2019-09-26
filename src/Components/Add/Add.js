import React from 'react'

class Add extends React.Component {
    state = {
        name: null,
        gender: null,
        desc: null
    };

    onGetName = e =>{
        this.setState({
            name: e.target.value
        });
    }
    onGetGender = e =>{
        this.setState({
            gender: e.target.value
        });
    }
    onGetDesc = e =>{
        this.setState({
            desc: e.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state.name, this.state.gender, this.state.desc);
    };
    // alert = () =>{
    //         // return(
    //         // <div class="alert alert-primary" role="alert">
    //         //     This is a primary alert—check it out!
    //         // </div>  
    //         // )
    //         console.log("added");
    // };
    render() {
        return (
            <div className="col-md-10 offset-md-1 row-block">
            <form onSubmit={this.onSubmit}>
                <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={this.onGetName}
                />
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="usergender"
                    id="usergender1"
                    value="women"
                    onClick={this.onGetGender}
                />
                <label className="form-check-label" htmlFor="usergender1">
                    Women
                </label>
                </div>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="usergender"
                    id="usergender2"
                    value="men"
                    onClick={this.onGetGender}
                />
                <label className="form-check-label" htmlFor="usergender2">
                    Men
                </label>
                </div>
                <textarea
                type="text"
                placeholder="Description"
                className="form-control"
                onChange={this.onGetDesc}
                />
                <button className="btn btn-success mt-1" type="submit">
                    New Contact
                </button>
            </form>
            </div>
        );
    }
}
export default Add;
