import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/index.css"
import chai_image from "../img/chai-pouring.png"
import logo_image from "../img/pyaali_logo.png"
import video_background from "../img/chai_background.mp4"
import card_image_1 from "../img/past/chai-selling-5.jpeg"
import card_image_2 from "../img/chai_image2.jpg"
import card_video from "../img/chai-background.mp4"
import founders from "../img/founders.png"
import ImageSlideshow from '../components/ImageSlideshow'; // Import the slideshow component


var large_window = true
if(window.innerWidth < 1000){
	large_window = false
}

const Home = () => {
	return (
		<div>

			<div className="main-content">
				<div className="card-container">
					<div className="card-left">
						<video autoPlay loop muted className="card-video">
							<source src={card_video} type="video/mp4" />
						</video>
						<div className="card-content">
							<div className="top-bar">
							<div className="">
								<img className="logo" src={logo_image}></img>
							</div>

							<div className="">
							<h2 className="card-title">Pyaali</h2>
							</div>
							<div className="">
							Order Now
							</div>
							<div className="">
							About Us
							</div>
							<div className="">
							Chicago
							</div>
							<div className="">
							Instagram
							</div>
							</div>



							
							
						</div>
					<div className="bottom-text"> 
					<h2 className="card-description">experience chai</h2>

					</div>
					</div>
					<div className="card-right">	
						{/* <div className="card-container-small">
							<div className="button-card">
							<h2 className="button-description">Now selling at Green St x 4th St, Champaign IL</h2></div>
							<div className="button-card">
							<h2 className="button-description">Order Wholesale Chai Now</h2></div>
						</div>
						
						
						<div className="card-small">
						<div className="topic">About us</div>
							
							<div className="top-bar">
								<div className="">
									<img className="founders" src={founders}></img>
								</div>

								<div className="">
								<div className="regular-text"> Hello! We are two sisters who have set on a journey to spread the experience of chai to America!
									<br></br>
									To us, chai is a symbol of firendship, love, and teamwork. We want to spread this companionship in America through this amazing and healthy form of caffeine called Chai :).
									<br></br>
									With the help of our mom's recipie, we will bring th authentic taste and feeling of chai to you. Stay tuned to learn more baout us!
             </div>
								</div>
								</div>
						


						</div>
						<div className="card-small">
							<div className="topic">You've Probabaly Seen us in Chicago</div>
							<div className="card-content">
							<div class="tech-slideshow">
								<div class="mover-1"></div>
					
							</div>
							</div>
						</div> */}
						<button className="button-card-about">About</button>
						<br></br>
						<button className="button-card-buy">Buy</button>
						<br></br>
						<button className="button-card-chicago">Chicago</button>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;




// return (
    // <div>
        
            {/* <img className={`${large_window ? "photo" : "invisible"}`} alt="chai_image" src={chai_image}></img>
            <div className={`${large_window ? "popup-right" : "invisible"}`}>
                <p className="small-text">Questions?</p>
                <br></br>
                <p className="mini-text">
                    Contact us at 847-312-3051, and we'd love to talk to you!
                </p>
            </div>
            
            
    <div className="container" style={{paddingTop:`${window.innerHeight}`}}>

    <img className={`${large_window ? "center-image" : "center-small-image"}`} alt="logo" src={logo_image}></img>
            
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
        <p style={{textAlign:'center'}}> Pyaali © 2024</p>
        <br></br> */}

        
    {/* // </div> */}

    
    
{/* // ); */}
