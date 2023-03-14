import Footer from "../components/Footer"
import Header from "../components/Header"
function index() {
  console.log("text")
  return (
    <>
 
    <Header/>

    <div className="service_section">
      <h1 className="service_text">What We Do</h1>
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src=""></img>
          <h1 className="airport_highlight_text">Airport Transfer</h1>
          <p className="airport_muted_text">Providing best services for airport<br/> transfers in Melbourne, because<br/> we let them travel in comfort and<br/> secure</p>
        </div>
        <div className="col-md-4">
          <img src=""></img>
          <h1 className="corporate_highlight_text">Corporate car hire</h1>
          <p className="corporate_muted_text">We deliver reliable and safe <br/>corporate services to help you<br/> commute with ease and safety<br/> while your business travel.</p>
          </div>
          <div className="col-md-4">
          <h1 className="wedding_highlight_text">Wedding transfers</h1> 
          <p className="wedding_muted_text">We Provide luxury wedding cars<br/> in Melbourne or budget wedding<br/> car for hire in <br/>Melbourne.exhilarating<br/> experience at cost effective prices</p>
          </div>
          <div className="col-md-4">
            <h1 className="hotel_transfer_text">Hotel transfer</h1>
            <p className="hotel_muted_text">
            We are here to furnish you with <br/>the mesmerize hotel transfer<br/> services with great travelling<br/> experience that you will never<br/> ever have in your life.
            </p>
          </div>

          <div className="col-md-4">
            <h1 className="parcel_text">Parcel pickup and drop off</h1>
            <p className="parcel_muted_text">
            We can surely be much more <br/>efficient than regular courier<br/> services. So next time you wish to<br/> send a parcel across Melbourne.<br/> Call Now
            </p>
          </div>
          <div className="col-md-4">
            <h1 className="car_hire-text">Hourly Hire with a car </h1>
            <p className="car_muted_text">Now you can hire our cars on<br/> hourly basis. Depends upon the<br/> requirment, you can contact us <br/>and book your ride on hourly<br/> basis. Contact us today!</p>
          </div>

       
        </div>
      </div>
      </div>
      <div className="airport_section">
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
    <div className="jayride_section">
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
          <img src=""></img>
          <img src=""></img>
        </div>
        <div className="col-md-3">
          <h4 className="jayride_text">We Accept All Major Cards</h4>
          <img src=""></img>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default index