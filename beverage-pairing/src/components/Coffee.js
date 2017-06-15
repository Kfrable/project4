import React,{Component} from 'react';
import {Navbar,Form,FormGroup,FormControl,Button,Well
  
} from 'react-bootstrap';

const Style = {
	'text-align':'center',
	'margin-bottom':'0'
}

class Coffee extends Component {
  constructor(props) {
    super(props)
    
    
  }

  componentWillMount() {
    
    console.log('working')
  }

 	press(event){
		let value = document.getElementById('put').value
		console.log(value)
	}

	render(){
		return(
			<div>
				
			<center>
			<Navbar.Form>
	        <FormGroup>
	        
	          <FormControl id='put' type="text" placeholder="Search" />
	        </FormGroup>

	        <Button onClick={this.press} type="submit">Submit</Button>
	      </Navbar.Form>
	      </center>

	      <ul>
	      	<li>{this.press.props}</li>
	      	<li></li>
	      	<li></li>
	      	<li></li>
	      </ul>

	      <Well style={Style} bsSize="small">Footer</Well>
			</div>

		)
	}
}

	export default Coffee