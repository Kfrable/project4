import React,{Component} from 'react'
import {Navbar,Form,FormGroup,FormControl,Button,Well
  
} from 'react-bootstrap';
import Footer from'./Footer'
import axios from 'axios';


const Style={
	/*border:'solid black',*/
	height: '340',
    width: '321',
    'margin-left': '120',
    display: 'inline-flex',
    'margin-top': '38'
}
const Info={
	'font-size': '30',
    'text-align': 'center',
    'font-style': 'times new roman',
    'font-family': 'fantasy',
    'padding-left': '129'
}

const Main={
	border:'solid white',
	'background-color':'slategray',
	height: '561'
}

class Beers extends Component {
  constructor(props) {
    super(props)
    this.state ={
    	search:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentWillMount() {
    this.getABeer()
    console.log('working')
  }

  handleChange(e){
  	this.setState({
  		search:e.target.value
  	})
  }

  handleSubmit(e){
  	e.preventDefault()
  	let url = 'https://stormy-thicket-68972.herokuapp.com/beers/' + this.state.search;
  	axios.get(url).then((res) => {
  		let alldata = res.data.beers
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
      		co.innerHTML=alldata.company
      		let percentage=document.createElement('h3');
      		percentage.innerHTML=alldata.abv

      		let desc = document.getElementById('description')
      		let sty = document.getElementById('style')
      		let pair = document.getElementById('pairing')
      		let beer = document.getElementById('name')
      		
      		let ul = document.getElementById('holder')
      		name.appendChild(style);
      		name.appendChild(co);
      		name.appendChild(percentage);

      		beer.appendChild(name);
      		desc.appendChild(des);
      		// sty.appendChild(style);
      		pair.appendChild(food);
      		// name.appendChild(picture);
      		



      // for(let i = 0; i < alldata.length; i++){
      // 		// let name = document.createElement('h1');
      // 		/*name.innerHTML=alldata[i].name*/
      // 		// name.innerHTML=this.state.alldata[i].name
      // 		let des = document.createElement('h2');
      // 		des.innerHTML=alldata[i].description
      // 		let style = document.createElement('h3');
      // 		style.innerHTML=alldata[i].style
      // 		let picture = document.createElement('div');
      // 		picture.setAttribute('id','pic');
      // 		let food = document.createElement('h4');
      // 		food.innerHTML=alldata[i].food;
      // 		let hold = document.getElementById('main')
      // 		let ul = document.getElementById('holder')

      // 		name.appendChild(des);
      // 		name.appendChild(style);
      // 		name.appendChild(food);
      // 		name.appendChild(picture);
      		
      // 		hold.appendChild(name);
      // 		console.log(name)
      // }
      console.log(res.data)
      
     })
  }

  // handleSubmit(e){
  //   e.preventDefault(e)
  //   // console.log(e)
  //   let query = document.getElementById('put').value.toLowerCase();
  //   console.log(query)
  //   console.log('hi there')
  //   let cap = query.charAt(0).toUpperCase()
  //   this.setState({
  //     search: query
  //   })
  //   console.log('------->',this.state);
  //   window.location.assign('/beers/' + query)
  //   console.log(query)
  // }

  getABeer(){
  	let url = 'https://stormy-thicket-68972.herokuapp.com/beers/';
    axios.get(url).then((res) => {
      console.log('whats new return-->', res.data.beers.name);
      let alldata = res.data
      // for(let i = 0; i < alldata.length; i++){

      // }
      
    })
    console.log(url)
  }



 /*	press(event){
		let value = document.getElementById('put').value
		console.log(value)
		let url = 'https://stormy-thicket-68972.herokuapp.com/beers/';
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
      		let food = document.createElement('h4');
      		food.innerHTML=alldata[i].food;
      		let hold = document.getElementById('main')
      		let ul = document.getElementById('holder')

      		name.appendChild(des);
      		name.appendChild(style);
      		name.appendChild(food);
      		name.appendChild(picture);
      		
      		hold.appendChild(name);
      }
	})
}*/

	render(){
		return(
			<div id='main' className='Container'>
				<h1>Beers</h1>
			{/*<center>
			<Navbar.Form>
	        <FormGroup>
	        
	          <FormControl onChange={(e) =>this.handleChange(e)} id='put' type="text" placeholder="Search" />
	        </FormGroup>

	        <Button onClick={(e)=> this.handleSubmit(e) } type="submit">Submit</Button>
	        <Button onClick={ this.press } type="submit">Submit</Button>
	      </Navbar.Form>
	      </center>*/}


	      <form id='put' onSubmit={(e)=>this.handleSubmit(e)}>
	      <input  type='text' onChange={(e) =>this.handleChange(e)} />
	      <input type='submit' />
	      </form>
	      <div style={Main}>
	      {/*<h1 className='head'>Name</h1>*/}
	      <div id='name' className='Container' style={Style}></div>
	      {/*<h1 className='head'>Description</h1>*/}
	      <div id='description' className='Container' style={Style}></div>
	      {/*<div id='style' className='Container' style={Style}></div>*/}
	       {/*<h1 className='head'>Food Pairing</h1>*/}
	      <div id='pairing' className='Container' style={Style}></div>
	      </div>
	      <Footer/>
			</div>

		)
	}
}

export default Beers


