import Footer from "../components/Footer"
import Header from "../components/Header"
import Testimonials  from "@/components/Testimonials"
import Features3 from "@/components/Feature3"

function index() {
  
  return (
    <>
 
    <Header/>

    <div className="service_section">
      <h1 className="service_text">What We Do</h1>
      <div className="container">
      <div className="row">
        <div className="col-md-4">
        <div className="airport_section"data-aos="flip-right">
          <img src="airportservice.png"alt="airport_img"className="airport_image"data-aos="flip-up"></img>
          <h3 className="airport_highlight_text">Airport Transfer</h3>
          <p className="airport_muted_text">Providing best services for airport<br/> transfers in Melbourne, because<br/> we let them travel in comfort and<br/> secure</p>
        </div>
        </div>
        <div className="col-md-4">
        <div className="car_section"data-aos="flip-right">
          <img src="car.png"alt="car-img"className="car-image"></img>
          <h3 className="corporate_highlight_text">Corporate car hire</h3>
          <p className="corporate_muted_text">We deliver reliable and safe <br/>corporate services to help you<br/> commute with ease and safety<br/> while your business travel.</p>
        </div>
          </div>
          <div className="col-md-4">
          <div className="wedding_section"data-aos="flip-right">
          <img src="wedding.png"alt="wedding-img"className="wedding-image"></img>
          <h3 className="wedding_highlight_text">Wedding transfers</h3> 
          <p className="wedding_muted_text">We Provide luxury wedding cars<br/> in Melbourne or budget wedding<br/> car for hire in <br/>Melbourne.exhilarating<br/> experience at cost effective prices</p>
          </div>
          </div>
          <div className="col-md-4">
          <div className="hotel_section"data-aos="flip-right">
          <img src="hotel.png"alt="hotel_img"className="hotel-image"></img>
                      <h3 className="hotel_transfer_text">Hotel transfer</h3>
            <p className="hotel_muted_text">
            We are here to furnish you with <br/>the mesmerize hotel transfer<br/> services with great travelling<br/> experience that you will never<br/> ever have in your life.
            </p>
            </div>
          </div>

          <div className="col-md-4">
          <div className="parcel_section"data-aos="flip-right">
          <img src="parcel.png"alt="parcel_img"className="parcel_image"></img>
            <h3 className="parcel_text">Parcel pickup and drop off</h3>
            <p className="parcel_muted_text">
            We can surely be much more <br/>efficient than regular courier<br/> services. So next time you wish to<br/> send a parcel across Melbourne.<br/> Call Now
            </p>
            </div>
          </div>
          <div className="col-md-4">
          <div className="taxi_hire_section"data-aos="flip-right">
          <img src="taxi_hire.jpg"alt="taxi_img"className="taxi_image"></img>
                      <h3 className="car_hire-text">Hourly Hire with a car </h3>
            <p className="car_muted_text">Now you can hire our cars on<br/> hourly basis. Depends upon the<br/> requirment, you can contact us <br/>and book your ride on hourly<br/> basis. Contact us today!</p>
            </div>
          </div>

       
        </div>
      </div>
      </div>
      <div className="airport-chaffeur_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="airport_highlight_text">Airport Chauffeur Cars in <br/>Melbourne</h3>
            <p className="airport_muted_text">We specialize in offering chauffeur car, Limo, Van & Taxi services<br/> Melbourne at reasonable prices. Airport Chauffeur Cars offers the <br/>best private Chauffeur Car Melbourne Airport and limousines to <br/>you. Our collection of premium vehicles transportation provides<br/> you first class chauffeur car service Melbourne that you can travel <br/>in style and comfor</p>
            <button className="btn-btn-dark">CONTACT US</button>
          </div>
          <div className="col-md-6">
            <img src="departure.jpg"alt="departure_img"className="departure_img"></img>
          </div>
          </div>
        </div>
      </div>
      <div className="booking_section">
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="booking_highlight_text">Our goal is to provide<br/> professional and<br/> affordable transportation <br/>
            services</h2>
            <p className="booking_muted_text">
            We provide the best & highly valued taxi services in<br/> Melbourne, Australia. We are offering an extensive scope <br/>of economic taxi services 24 hours a day
            </p>
            <button className="btn_book">BOOK ONLINE</button>
          </div>
          
        
        <div className="col-md-6">
          <img src="booking.jpg"alt="booking-img"className="booking_image"></img>
        </div>
        </div>
        </div>
      </div>
      <div className="choose_us_section">
        <Features3/>
      </div>
      <div className="testinomial_section">
     
<Testimonials/>
      </div>
      <div className="partners_section">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="quatar_img" src="quatar.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="malyasia_img" src="malyasia.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
      
    <div className="jayride_section">
    <div className="container">
      <div className="row">
      
        <div className="col-md-3">
          <h4 className="jayride_text">Contact</h4>
          <p className="jayride_muted_text">6 Grace Street Craigieburn.
Melbourne 3064. VIC<br/>
info@vhalimos.com.au<br/>
0430 579 957<br/>
Booking Line open 7 AM – 9 PM
</p>
        </div>
        <div className="col-md-3">
          <h4 className="jayride_text">Additional Links</h4>
          <li className="jayride_list_text">About Us</li>
          <li className="jayride_list_text">FAQ</li>
          <li className="jayride_list_text">Terms and Conditions</li>
          <li className="jayride_list_text">Privacy Policy</li>
 
        </div>
        <div className="col-md-3">
          <h4 className="jayride_text">Trusted Partner</h4>
          <img src="jayride.png"alt="jayride_img"className="jayride_image"></img>
          
        </div>
        <div className="col-md-3">
          <h4 className="jayride_text">We Accept All Major Cards</h4>
          <img src="card.png"alt="card-img"className="card_image"></img>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default index