import React from 'react';
import {
  Carousel,Item,Caption,wellInstance,Well
} from 'react-bootstrap';

 const Style = {
 	display:'inline',
 	padding:'15',

 }

 const Style2 = {
 	'text-align':'center'
 }

function Footer(){
	return(
		<div>
			 <Carousel>
    <Carousel.Item>
      <img width={200} height={100} style={Style} src="http://www.coca-colacompany.com/content/dam/journey/us/en/private/generic/one-brand.rendition.598.336.jpg"/>
      
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={200} height={100} style={Style} src="https://s-media-cache-ak0.pinimg.com/600x315/c7/e3/c5/c7e3c59c69787058a05432dfb143d1d0.jpg"/>
      
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={200} height={100} style={Style} src="http://images.wisegeek.com/bottle-of-alcohol-poured-into-glass.jpg"/>
      
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <Well style={Style2}bsSize="small">Footer</Well>
</div>		 
	)
}

export default Footer