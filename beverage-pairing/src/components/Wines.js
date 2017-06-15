import React from 'react';
import {
  Image,imageResponsiveInstance,responsive
} from 'react-bootstrap';

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

   
function Wines(){
	return(
		<div>
		<div style={Style}>
		<Image style={imgs}  src="http://www.quoteambition.com/wp-content/uploads/2017/03/dogs.jpg" responsive />
		</div>

			

		<div >
		<Image style={Style2}  src="http://www.quoteambition.com/wp-content/uploads/2017/03/dogs.jpg" responsive />
		</div>

		</div>
	)
}

export default Wines