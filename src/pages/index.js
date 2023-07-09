import React from 'react';
import "../styles/index.css"
import chai_image from "../img/chai-pouring.png"
import logo_image from "../img/pyaali_logo.png"
var large_window = true
if(window.innerWidth < 1000){
	large_window = false
}

const Home = () => {
return (
	<div>
		
			<img className={`${large_window ? "photo" : "invisible"}`} src={chai_image}></img>
			<div className={`${large_window ? "popup-right" : "invisible"}`}>
				<p className="medium-text-center">Questions?</p>
				<br></br>
				<p className="small-text">
					Shoot us an email at ____, and we'd love to talk to you!
				</p>
			</div>
			
			
	<div className="container">

	<img className={`${large_window ? "center-image" : "center-small-image"}`} src={logo_image}></img>
			
	<div className='centered'>
	
	
			<p className='text'>
				<b>Experience Traditional Chai in Chicagoland!</b>
				
				
			</p>
			<br></br>
			<br></br>
			<p className='small-text'>
			Pyaali is a startup founded by a group of women in the Chicagoland Area. 
			We are dedicated to provide our customers with the taste of traditional chai, the quality of home, and the feeling of our motherland.
			</p>
			<br></br>
			<hr></hr>
		<br></br>
		<p className='medium-text-center'>
			We are currently taking <b>wholesale orders</b> for chai in bulk, and <b>catering orders</b> where we serve traditional chai at your event!
		</p>
		<br></br>
		<hr></hr>
		<div className={`${large_window ? "row" : "regular"}`}>
			
			<div className={`${large_window ? "column" : "regular"}`}>
				<div className='non-colored'>
					<p className='medium-text-center'>
							<b>Request an Order Now:</b>
							
						</p>
						<br></br>
						<p className='small-text'>
							Fill out the following form and we will contact you within 24 hours
						</p>
						<button className="action-button">Order Now!</button>
				</div>
				
			</div>
			<div className={`${large_window ? "column" : "regular"}`}>
				<div className='colored'>
					<p className='medium-text-center'>
						<b>Menu:</b>
						
					</p>
					<br></br>
					<p className='small-text'>
						
						Masala Chai (<t style={{color:"red"}}>Hot</t>)<br></br><br></br>
						Chilled Chai (<t style={{color:"blue"}}>Iced</t>)<br></br><br></br>
						Saffron Chai (<t style={{color:"red"}}>Hot</t>/<t style={{color:"blue"}}>Iced</t>)
					</p>
				</div>
			
			</div>
		</div>
<hr></hr>
<br></br>
		<p className='text'>
				<b>You Have Probably Seen Us...</b>
		</p>
		<p className='small-text'>In Chicago Downtown!</p>
		<br></br><br></br>
		<div class="tech-slideshow">
			<div class="mover-1"></div>
		</div>
		<br></br>
		<p className='small-text'>
			Hello! We are a group of 3 women, who have set on a journey to spread the love of chai to the Chicagoland area!
			In the past 2 years, we experimented with our idea to gauge how interested you guys are in the traditional taste of a cutting chai. We started sampling our chai in Chicago Downtown.
			
			<br></br> <br></br>
			 And GUESS WHAT!!! 
			 <br></br> <br></br>
			Your response was awesome! You gave us all your love and support to get us to the next stage in our journey! At a certain point, we were sharing hundred of cups of chai in only a few hours DAILY!! 
			It was now time to take the next step in the journey for Pyaali. We are now serving traditional chai in wholesale, but this time, AT YOUR PLACE, and AT YOUR TIME!!
			<br></br> <br></br>



		</p>
			
	</div>
    </div>
	</div>
);
};

export default Home;
