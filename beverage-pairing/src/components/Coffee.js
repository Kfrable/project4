import React,{Component} from 'react';
import {Navbar,Form,FormGroup,FormControl,Button,Well
  
} from 'react-bootstrap';
import Footer from'./Footer';
import axios from 'axios';

const Style={
	/*border:'solid black',*/
	height: '340',
    width: '321',
    'margin-left': '120',
    display: 'inline-flex',
    'margin-top': '38'
}

class Coffee extends Component {
  constructor(props) {
    super(props)
    this.state ={
    	search:''
    }
    
  }

  componentWillMount() {
    
    console.log('working')
  }

  handleChange(e){
  	this.setState({
  		search:e.target.value
  	})
  }

  handleSubmit(e){
  	e.preventDefault()
  	let url = 'https://stormy-thicket-68972.herokuapp.com/coffee/' + this.state.search;
  	axios.get(url).then((res) => {
  		let alldata = res.data.coffee
  		console.log(alldata)
  		let name = document.createElement('h1');
  		name.innerHTML=alldata.name
  		name.setAttribute('className','w3-container w3-center w3-animate-right')
  		name.setAttribute('id','name')
  		let hold = document.getElementById('main')
  		
  		let des = document.createElement('h2');
      		des.innerHTML=alldata.description
      		let style = document.createElement('h2');
      		style.innerHTML=alldata.style
      		// let picture = document.createElement('div');
      		// picture.setAttribute('id','pic');
      		let food = document.createElement('h2');
      		food.innerHTML=alldata.food;
      		let co = document.createElement('h3');
      		co.innerHTML=alldata.origin
      		

      		let desc = document.getElementById('description')
      		let sty = document.getElementById('style')
      		let pair = document.getElementById('pairing')
      		let beer = document.getElementById('name')
      		
      		let ul = document.getElementById('holder')
      		name.appendChild(style);
      		name.appendChild(co);
      		

      		beer.appendChild(name);
      		desc.appendChild(des);
      		
  
      console.log(res.data)
      
     })
  }

 	

	render(){
		return(
			<div id='main' className='Container'>
				<h1>Coffee</h1>
	      <form id='put' onSubmit={(e)=>this.handleSubmit(e)}>
	      <input  type='text' onChange={(e) =>this.handleChange(e)} />
	      <input type='submit' />
	      </form>
	      <div >
	      
	      <div id='name' className='Container' style={Style}></div>
	     
	      <div id='description' className='Container' style={Style}></div>
	      
	      <div id='origin' className='Container' style={Style}></div>
	      </div>
	      <Footer/>
			</div>

		)
	}
}

	export default Coffee