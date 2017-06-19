import React,{Component} from 'react'
import {Navbar,Form,FormGroup,FormControl,Button,Well
  
} from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';


const Style={
  // border:'black solid',
  height: '340',
    width: ' 266',
     /*'margin-left': '24',*/
    display: 'inline-flex',
    'margin-left': '80'
}

const Final={
  height:'340',
  width: '448',
  display:'inline-flex',
  'margin-left': '-90'
}

const Main={
  border:'solid white',
  'background-color':'slategray',
  height: '561'
}

class Wines extends Component {
  constructor(props) {
    super(props)
    this.state ={
      search:''
    }

    
    
  }

  componentWillMount() {
    // this.getWine()
    console.log('working')
  }
  handleChange(e){
    this.setState({
      search:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    let url = 'https://stormy-thicket-68972.herokuapp.com/wines/' + this.state.search;
    axios.get(url).then((res) => {
      let alldata = res.data.wine
      console.log(alldata)
      let name = document.createElement('h1');
      name.innerHTML=alldata.name
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
          let shade = document.createElement('h2');
          shade.innerHTML=alldata.color
          let where = document.createElement('h2');
          where.innerHTML=alldata.origin
          let eats = document.createElement('h2');
          eats.innerHTML=alldata.food

          let hue = document.getElementById('color');
          let sty = document.getElementById('origin');
          let wine = document.getElementById('name');
          let ul = document.getElementById('holder');
          let desc = document.getElementById('description');
          let place = document.getElementById('origin');
          let hungry = document.getElementById('food');
          name.appendChild(shade)
          // hue.appendChild(shade);
          wine.appendChild(name);
          desc.appendChild(des);
          place.appendChild(where);
          hungry.appendChild(eats);


          console.log(res.data)
      
     })
  }

 	/*press(event){
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
          let shade = document.createElement('h2');
      		shade.innerHTML=alldata[i].color
      		
      		let picture = document.createElement('div');
      		picture.setAttribute('id','pic');
      		let hold = document.getElementById('main')
      		let ul = document.getElementById('holder')
          let 

      		
      		
      		name.appendChild(picture);
      		hold.appendChild(name);
      }
	})
}*/

	render(){
    return(
      <div id='main' className='Container'>
      
        <h1>Wines</h1>
        <form id='put' onSubmit={(e)=>this.handleSubmit(e)}>
        <input  type='text' onChange={(e) =>this.handleChange(e)} />
        <input type='submit' />
        </form>
        <div style={Main}>
        <div id='name' className='Container' style={Style}></div>
        <div id='description' className='Container' style={Style}></div>
        {/*<div id='color' className='Container' style={Style}></div>*/}
        <div id='origin' className='Container' style={Style}></div>
        <div id='food'  className='Container' style={Style}></div>
        </div>
        <Footer/>

      </div>

    )
  }
}

export default Wines