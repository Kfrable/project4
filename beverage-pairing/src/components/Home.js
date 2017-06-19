import React from 'react';
import Footer from'./Footer';

const homes = {
  // border:'solid black',
  padding: 5,
  height: '800px',
  width: '100%',
  margin: 'auto'
}



function Home(){
	return(
		<div ><h1>Welcome</h1>

<div style={homes} id='middle' className='container'> 
<p className='w3-container w3-center w3-animate-right'>This application was designed to help you find information about your beverages. All you have to do is piack a category, enter the name of what you're looking for and you will be given highlights about your search.
The information will include, the name of what you searched. The company that produces/origin of the beverage. If alcoholic, the ABV associated. A short description about the beverage. And the best food-pairing associated with the beverage. </p></div>

</div>
	)
}

export default Home