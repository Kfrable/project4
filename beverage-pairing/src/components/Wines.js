import React,{Component} from 'react';
import {
  Image,imageResponsiveInstance,responsive,Navbar,Form,FormGroup,FormControl,Button,Well
} from 'react-bootstrap';
import axios from 'axios';

const Style ={
	'border-radius':0,
	 height:360,
	 width:300,
	 display: 'inline',
	 /*'margin-left': 954*/
	 float:'right',
	 'padding-right':45
}

 const imgs ={
 	'border-radius':0,
	 height:360,
	 width:300,
	 'box-shadow':'inset 3 4 5 #000'
 }

const Style2 ={
	borderRadius:0,
	 height:360,
	 width:300,
	 display: 'inline',/*,
	 'margin-left': 954*/
	 float:'left',
	 paddingLeft:45
}

   
class Wines extends Component(){
	
	
	press(event){
		let value = document.getElementById('put').value
		console.log(value)
		let url = 'https://stormy-thicket-68972.herokuapp.com/wines';
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
      		name.appendChild(picture);
      		hold.appendChild(name);
      }
	})
}
	render(){
	return(
		<div>
		<div id='main'>
				
			<center>
			<Navbar.Form>
	        <FormGroup>
	        
	          <FormControl id='put' type="text" placeholder="Search" />
	        </FormGroup>

	        <Button onClick={this.press} type="submit">Submit</Button>
	      </Navbar.Form>
	      </center>
		<div style={Style}>
		<Image style={imgs}  src="http://www.quoteambition.com/wp-content/uploads/2017/03/dogs.jpg" responsive />
		</div>
		</div>
		</div>


			

		

		
	)
}
}

export default Wines