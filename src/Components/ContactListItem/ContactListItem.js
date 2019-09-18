import React from 'react';

class ContactListItem extends React.Component {

	state = {
		btnChange: false,
		btnText: "Contact Now",
		btnStyle: "btn btn-default"
	}

	onClickBtn = () => {
		this.setState({ 
			btnChange: true,
			btnText: "Contacted",
			btnStyle: "btn btn-danger"
		});
	};

	render() {
		const { name, desc, gender, avatar } = this.props;
		// let btnStyle = "btn btn-default";
		// if (this.state.btnChange){
		// 	btnStyle = "btn btn-danger"
		// }
		const url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
		return(
			<li><div className="media">
					<div className="media-left align-self-center">
						<img className="rounded-circle" src={url} alt=""/>
					</div>
					<div className="media-body">
						<h4>{name}</h4>
						<p>{desc}</p>
					</div>
					<div className="media-right align-self-center">
						<a href="#" className={this.state.btnStyle} onClick = {this.onClickBtn}>
							{this.state.btnText}
						</a>
					</div>
			</div></li>
		)
	}
}
export default ContactListItem;
