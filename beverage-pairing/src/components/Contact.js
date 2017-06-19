import React from 'react'
import {
  imageShapeInstance,circle,Col,Image,imageResponsiveInstance,responsive
} from 'react-bootstrap';


function Contact(){
	return(
		<div className='Container'>
			<Image id='me' src="./images/kyle.png" responsive />
				<p>Hello, my name is Kyle Frable. I'm the developer behind this application. I've but several categories into this application, and tried to make it as easy to navigate as possible. I hope you enjoy. Should there be any problems the contact information is listed below. </p>
			
			    <h2>Email: kcfrable@gmail.com</h2>
				<h2>github:<a href='https://github.com/Kfrable'>Link</a></h2>
				<h2>LinkedIn: <a href='www.linkedin.com/in/kyle-frable'>Link</a></h2>
      
      
      
      
		</div>
	)
}

export default Contact