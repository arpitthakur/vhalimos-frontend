
import Header from "../components/Header"
function Specialoffer() {
  return (
    <>
    <Header/>
<div className="special_offer_muted_text">
      <h3 className="Special_Offer">Special Offer pricing for the cities fares</h3>
      </div>
      <div className='special_offer-section'>

      <div className="container">
<div className="row">
  <div className="col-md-4">
  <div className="melbourn_section">
  <div class="card" >
  <img class="melbourn_image" src="melbourn.jpg" alt="melbourn_img"/>
  <div class="card-body">
    <h5 class="card-title">Melbourne Airport to Melbourne City ($85)</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <button className="btn btn-primary">Book Now</button>
  </div>
  </div>
</div>
  </div>
  <div className="col-md-4">
  <div className="sydney_section">
  <div class="card" >
  <img class="sydney.jpg" src="sydney.jpg" alt="sydney_img"/>
  <div class="card-body">
    <h5 class="card-title">Sydney Airport to Sydney CBD ($99)</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <button className="btn btn-primary">Book Now</button>
  </div>
</div>
</div>

  </div>
  <div className="col-md-4">
  <div className="adelaide_section">
  <div class="card" >
  <img class="adelaide.jpg" src="adelaide.jpg" alt="adelaide_img"/>
  <div class="card-body">
    <h5 class="card-title">Adelaide Airport to Adelaide CBD ($77)</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <button className="btn btn-primary">Book Now</button>
  </div>
  </div>
</div>
  </div>
  <div className="col-md-4">
  <div className="gold_coast_section">
      <div class="card" >
  <img class="gold_coast.jpg" src="gold_coast.jpg" alt="gold_coast_img"/>
  <div class="card-body">
    <h5 class="card-title">Gold Coast Airport to Surfer Paradise($99)</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <button className="btn btn-primary">Book Now</button>
  </div>
</div>
  </div>
  </div>
  <div className="col-md-4">
  <div className="perth_airport_section">
  <div class="card" >
  <img class="perth_airport_img" src="perth_airport.jpg" alt="perth_airport_img"/>
  <div class="card-body">
    <h5 class="card-title">Perth Airport to Perth Central Business District ($99)</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <button className="btn btn-primary">Book Now</button>
  </div>
</div>
  </div>
  </div>
  <div className="col-md-4">
  <div className="auckland_section">
  <div class="card" >
  <img class="auckland_img" src="auckland.jpg" alt="auckland_img"/>
  <div class="card-body">
    <h5 class="card-title">Auckland Airport to Auckland CBD ($129)</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <button className="btn btn-primary">Book Now</button>
  </div>
</div>
  </div>
  </div>
  </div>

      </div>
        {/* {/* <h1 className='special_offer_text'>Special offer pricing for<br/>
        the cities fares
        </h1>
      </div>
      <div className='melbourn_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src='melbourn.jpg'alt='melbourn_img'className='melbourn_image'></img>
            </div>
            <div className="col-md-6">
              <h3 className="melbourn_highlight">Melbourne Airport to<br/> Melbourne City ($85)</h3>
              <p className="melbourn_muted_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br/> cupidatat non proident.</p>
              <button className="book_now">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sydney_airport_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="sydney_highlight_text">Sydney Airport to Sydney CBD<br/> ($99)</h3>
              <p className="sydney_muted_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris. Duis aute irure dolor in reprehenderit in voluptate velit<br/> esse cillum dolore eu fugiat nulla pariatur.</p>
              <button className="book_now">BOOK NOW</button>
            </div>
            <div className="col-md-6">
              <img src="sydney.jpg"alt="sydney_img"className="sydney-image"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="adelaide_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="adelaide.jpg"alt="adelaide_img"className="adelaide_image"></img>
            </div>
            <div className="col-md-6">
              <h3 className="adelaide_text">Adelaide Airport to Adelaide<br/> CBD ($77)</h3>
              <p className="adelaide_muted_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br/> cupidatat non proident.</p>
              <button className="book_now">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="gol_coast_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="gol_coast_highlight_text">Gold Coast Airport to Surfer<br/> Paradise($99)</h3>
            <p className="gol_coast_muted_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris. Duis aute irure dolor in reprehenderit in voluptate velit<br/> esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className="book_now">BOOK NOW</button>
          </div>
          <div className="col-md-6">
            <img src="gold_coast.jpg"alt="gold_coast_img"className="gold_coast_image"></img>
          </div>
          </div>
        </div>
      </div>
      <div className="perth_airport_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="perth_airport.jpg"alt="perth_image"className="perth_image"></img>
            </div>
            <div className="col-md-6">
              <h3 className="perth_airport_text">Perth Airport to Perth Central <br/>Business District ($99)</h3>
              <p className="perth_airport_muted_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br/> cupidatat non proident.</p>
              <button className="book_now">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="auckland_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="auckland_highlight_text">Auckland Airport to Auckland <br/>CBD ($129)</h3>
            <p className="auckland_muted_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris. Duis aute irure dolor in reprehenderit in voluptate velit<br/> esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className="book_now">BOOK NOW</button>
          </div>
          <div className="col-md-6">
            <img src="auckland.jpg"alt="auckland_img"className="auckland_image"></img>
          </div>
          </div>
        </div>
      </div> */}
      <div className="book_ride_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="book_ride_heading_text">Book Your Ride Today</h3>
            </div>
            <div className="col-md-6">
            <button type="button" class="btn btn-light book_ride_btn">BOOK NOW</button>
            </div>
          </div>
        </div> 
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
    </>
  )
}

export default Specialoffer