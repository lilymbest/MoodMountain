import React, { Component } from 'react';
import './MoodInput.css'

class NewPost extends Component {
	constructor() {
        super()
        this.state = {
			euphoric: 1,
            happy: 1,
            neutral: 1,
            tense: 1,
            sad: 1,
		}
		this.state = this.initialState();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
		this.autocomplete = null;
	}


	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.handleAddPost({ ...this.state });
		this.props.history.push('/');
	}

	componentDidMount() {
		this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
			types: [ 'establishment' ]
		});
		this.autocomplete.setFields([ 'address_component' ]);

		this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handlePlaceSelect() {
		let addressObject = this.autocomplete.getPlace();
		let address = addressObject.address_components;
		this.setState({
			address: `${address[0].long_name} ${address[1].long_name}`,
			city: address[3].long_name,
			state: address[5].short_name,
			zip_code: address[7].short_name,
			googleMapLink: addressObject.url
		});
		console.log(this.autocomplete.getPlace());
		console.log(this.state);
	}

	handleMe = (e) => {
		this.setState({
			name: e.target.value
		});
	};

	render() {
		return (
			<div>
				<h1>Add New Place</h1>
				<form onSubmit={this.handleSubmit}>
					<input id="autocomplete" className="input-field" ref="input" type="text" onChange={this.handleMe} />

					<input name={'name'} value={this.state.name} placeholder={'Name'} onChange={this.handleChange} />
					<input
						name={'street_address'}
						value={this.state.address}
						placeholder={'Street Address'}
						onChange={this.handleChange}
					/>
					<input name={'city'} value={this.state.city} placeholder={'City'} onChange={this.handleChange} />
					<input name={'state'} value={this.state.state} placeholder={'State'} onChange={this.handleChange} />
					<input
						name={'zip_code'}
						value={this.state.zip_code}
						placeholder={'Zipcode'}
						onChange={this.handleChange}
					/>
					<button onSubmit={this.handleSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}

export default NewPost;