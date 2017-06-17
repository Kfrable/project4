import React,{Component} from 'react'
import {Navbar,Form,FormGroup,FormControl,Button,Well
  
} from 'react-bootstrap';
import axios from 'axios';


class Wines extends Component {
  constructor(props) {
    super(props)
    /*this.state={
      search: this.props.match.params.name.toUpperCase()
    }*/
    
    
  }

  componentWillMount() {
    this.getWine()
    console.log('working')
  }

  getWine(){
  	let url = 'https://stormy-thicket-68972.herokuapp.com/wines' /*+ this.props.match.params.name;*/
    axios.get(url).then((res) => {
      console.log('whats new return-->', res.data.wines.name);
      let alldata = res.data
      // for(let i = 0; i < alldata.length; i++){

      // }
      
    })
    console.log(url)
  }

 	press(event){
		let value = document.getElementById('put').value
		console.log(value)
		let url = 'https://stormy-thicket-68972.herokuapp.com/wines';
    axios.get(url).then((res) => {
      console.log('whats new return-->', res.data.wines);
      let alldata = res.data.wines
      for(let i = 0; i < alldata.length; i++){
      		let name = document.createElement('h1');
      		name.innerHTML=alldata[i].name
      		let des = document.createElement('h2');
      		des.innerHTML=alldata[i].description
      		
      		let picture = document.createElement('div');
      		picture.setAttribute('id','pic');
      		let hold = document.getElementById('main')
      		let ul = document.getElementById('holder')

      		name.appendChild(des);
      		
      		name.appendChild(picture);
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

	      
                            

	      <Well  bsSize="small">Footer</Well>
			</div>

		)
	}
}

export default Wines