import React from 'react';
import "./ContactListItem.css"

class ContactListItem extends React.Component {
	state = {
		btnChange: false,
		btnText: "Contact Now",
		btnStyle: "btn btn-default",
		avatar: this.props.avatar,
		favorite: this.props.favorite,
		starStyle: "fa fa-star-o fa-2x star"
	}

	onClickBtn = () => {
		if (!this.state.btnChange) {
			this.setState({ 
				btnChange: true,
				btnText: "Contacted",
				btnStyle: "btn btn-danger"
			});
			
		}
		else{
			this.setState({ 
				btnChange: false,
				btnText: "Contact Now",
				btnStyle: "btn btn-default"
			});
		}
	};
	onAvatar = () => {
		const newAvatar = Math.floor(Math.random() * 99);
		this.setState({
			avatar: newAvatar
		});
	}
	onFavoriteClick = () => {
		if (!this.state.favorite) {
			this.setState(() => {
				return{
					favorite: !this.state.favorite, 
					starStyle: "fa fa-star fa-2x star"
				}
			});
			
		}
		else{
			this.setState(() => {
				return{
					favorite: !this.state.favorite,
					starStyle: "fa fa-star-o fa-2x star"
				} 
			});
		}
		// this.setState(() => {
		// 	return {
		// 	  favorite: !this.state.favorite,
		// 	  starStyle: "fa fa-star fa-2x star"
		// 	};
		//   });
		this.props.onFavoriteChange();
	}

	render() {
		const { name, desc, gender, onContactDelete } = this.props;
		// let btnStyle = "btn btn-default";
		// if (this.state.btnChange){
		// 	btnStyle = "btn btn-danger"
		// }
		const url = `https://randomuser.me/api/portraits/${gender}/${this.state.avatar}.jpg`;
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
						<a href="#" className="btn btn-warning" onClick = {this.onAvatar}>
							Random Ava
						</a>
						<a href="#" className={this.state.btnStyle} onClick = {this.onClickBtn}>
							{this.state.btnText}
						</a>
						<i className={this.state.starStyle} aria-hidden="true" onClick={this.onFavoriteClick}></i>
						<i className="fa fa-times fa-2x remove" aria-hidden="true" onClick={onContactDelete}></i>
					</div>
			</div></li>
		)
	}
}
export default ContactListItem;
