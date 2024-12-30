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
				<p className="small-text">Questions?</p>
				<br></br>
				<p className="mini-text">
					Contact us at 847-312-3051, and we'd love to talk to you!
				</p>
			</div>
			
			
	<div className="container" style={{paddingTop:`${window.innerHeight}`}}>

	<img className={`${large_window ? "center-image" : "center-small-image"}`} src={logo_image}></img>
			
	<div className='centered'>
	
	
			<p className='text'>
				<b>Experience Traditional Chai in Chicagoland!</b>
				
				
			</p>
			<br></br>
			<br></br>
			<p className='small-text'>
			Pyaali is a startup founded by 2 sisters in the Chicagoland Area. 
			We are dedicated to provide our customers with the taste of traditional chai, the quality of home, and the feeling of our motherland.
			</p>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<hr></hr>

			
			<br></br>
			<br></br>
			<br></br>
		
		<p className='medium-text-center'>
			We are currently taking <b>wholesale orders</b> for Chai. We will provide you with freshly prepared chai at your events, like picnics, parties, potlucks, etc!
		</p>
		<br></br>
		<br></br>
		<br></br>
		
		<hr></hr>
		<br></br>
		<br></br>
		<br></br>
		
		<div className={`${large_window ? "row" : "regular"}`}>
			
			<div className={`${large_window ? "column" : "regular-col"}`}>
				<div className={`${large_window ? "non-colored" : "regular-col"}`} >
					<p className='medium-text-center'>
							<b>Request an Order Now:</b>
							
						</p>
						<br></br>
						<p className='small-text'>
							Fill out the following form and we will contact you within 24 hours
						</p>
						<a href="https://forms.gle/2niDN5CAkR1ehpd9A">
							<button className="action-button">Order Now!</button>

						</a>
				</div>
				
			</div>
			<div className={`${large_window ? "column" : "regular-col"}`}>
				<div className={`${large_window ? "colored" : "colored"}`}>
					<p className='medium-text-center'>
						<b>Menu:</b>
						
					</p>
					<br></br>
					<p className='small-text'>
						
						Masala Chai (<t style={{color:"red"}}>Hot</t>)<br></br><br></br>
						Chilled Chai (<t style={{color:"blue"}}>Iced</t>)<br></br><br></br>
						Saffron Chai (<t style={{color:"red"}}>Hot</t>)
					</p>
				</div>
			
			</div>
		</div>
<hr></hr>
<br></br>
<br></br>
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
		<br></br>
		<br></br>
		<p className='small-text'>
			Hello! We are 2 sisters, who have set on a journey to spread the love of chai to the Chicagoland area!
			In the past 2 years, we experimented with our idea to gauge how interested you guys are in the traditional taste of a cutting chai. We started sampling our chai in Chicago Downtown.
			
			<br></br> <br></br>
			 And GUESS WHAT!!! 
			 <br></br> <br></br>
			Your response surprised us! Y'all were so supportive of this idea, that at one point, we were selling 300+ cups of chai in only a few hours! You gave us all your love and support to get us to the next stage in our journey! 
			In that next step, we are now serving traditional chai in wholesale, but this time, AT YOUR PLACE, and AT YOUR TIME!!
			<br></br> <br></br>

			In addition, to having the vision to spread the taste of traditional chai, we founded Pyaali to support women empowerment in Asian communities. Reach out to us to know more!



		</p>

		<br></br><br></br><br></br><br></br>
		<p style={{textAlign:'center'}}> Pyaali © 2023</p>
		<br></br>
	</div>
    </div>

	
	</div>
);
};

export default Home;
