import React,{Component} from 'react'
import {Navbar,Form,FormGroup,FormControl,Button,Well
  
} from 'react-bootstrap';
import axios from 'axios';


class Beers extends Component {
  constructor(props) {
    super(props)
    
    
  }

  componentWillMount() {
    this.getABeer()
    console.log('working')
  }

  getABeer(){
  	let url = 'https://stormy-thicket-68972.herokuapp.com/beers';
    axios.get(url).then((res) => {
      console.log('whats new return-->', res.data.beers.name);
      let alldata = res.data
      // for(let i = 0; i < alldata.length; i++){

      // }
      
    })
    console.log(url)
  }

 	press(event){
		let value = document.getElementById('put').value
		console.log(value)
		let url = 'https://stormy-thicket-68972.herokuapp.com/beers';
    axios.get(url).then((res) => {
      console.log('whats new return-->', res.data.beers);
      let alldata = res.data.beers
      for(let i = 0; i < alldata.length; i++){
      		let name = document.createElement('h1');
      		name.innerHTML=alldata[i].name
      		let des = document.createElement('h2');
      		des.innerHTML=alldata[i].description
      		let style = document.createElement('h3');
      		style.innerHTML=alldata[i].style
      		let picture = document.createElement('div');
      		picture.setAttribute('id','pic');
      		let hold = document.getElementById('main')
      		let ul = document.getElementById('holder')

      		name.appendChild(des);
      		name.appendChild(style);
      		name.appendChild(picture)
      		hold.appendChild(name);
      }
	})
}

	render(){
		return(
			<div id='main'>
				
			<center>
			<Navbar.Form>
	        <FormGroup>
	        
	          <FormControl id='put' type="text" placeholder="Search" />
	        </FormGroup>

	        <Button onClick={this.press} type="submit">Submit</Button>
	      </Navbar.Form>
	      </center>

	      <ul id='holder'>
                            <li>Name</li>
                            <li>Food Pairing</li>
                            <li>Region</li>
                            <li>Abv</li>
                            <li>Description</li>
                          </ul>

	      <Well  bsSize="small">Footer</Well>
			</div>

		)
	}
}

export default Beers


