import React from 'react';
import Footer from'./Footer';

const homes = {
  // border:'solid black',
  padding: 5,
  height: 500,
  width: 750,
  margin: 'auto'
}



function Home(){
	return(
		<div ><h1>Welcome</h1>

<div style={homes} id='middle'> 
<p className='w3-container w3-center w3-animate-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ut, modi, magni pariatur aspernatur unde doloremque voluptatibus quis porro recusandae! Odio sequi, enim facere officiis recusandae asperiores itaque, libero quae.</p></div>
<Footer/>
</div>
	)
}

export default Home