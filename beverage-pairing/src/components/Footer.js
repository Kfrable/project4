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
 const Move = {
 	left:'613'
 }

function Footer(){
	return(
		<div>
			 <Carousel>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="http://www.coca-colacompany.com/content/dam/journey/us/en/private/generic/one-brand.rendition.598.336.jpg"/>
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="https://s-media-cache-ak0.pinimg.com/600x315/c7/e3/c5/c7e3c59c69787058a05432dfb143d1d0.jpg"/>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="https://cdn.shopify.com/s/files/1/0706/6071/products/marquee-word-signs-beer-marquee-letter-light-sign-1.jpg?v=1465832806"/>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="http://images.wisegeek.com/bottle-of-alcohol-poured-into-glass.jpg"/>    
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="http://www.cuisineabc.com/images/show_images/2016/9/clip_1474109038624.png"/>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="http://hastingsfamilyfarm.net/images/liquorstore.jpg"/>
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="http://xflow.pentair.com/~/media/websites/x-flow/industries/header%20images/pentair%20x-flow%20filtration%20food%20and%20beverage.jpg"/>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <Well style={Style2}bsSize="small">Beverage Index</Well>
</div>		 
	)
}

export default Footer