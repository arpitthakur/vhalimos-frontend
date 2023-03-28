import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import Header from "../components/Header"

const { Meta } = Card;

function Services() {
  
  return (

    <>
    <Header/>
    <div className='container'>
    <div className='our_services_car_section'>
    <h3 className='our_service_heading_text'>Our Services</h3>
    <p className="our_service_muted_text">
      VHA Limos is melbourne’s largest taxi cab network with fastest coverage. Our services are<br/> for your every event in Melbourne. Hire our luxury cars with highly trained chauffeurs and<br/> feel the difference. Book us today for your next event! 
      </p>
    <div className='row'>
    <div className='col-md-4'>
    <div className='airport_transfer_section'>


      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        
      >
      <img src='airport.jpg'alt='airport_img'className='airport_image'></img>
        <Meta
       
          title="Melbourne Airport Transfers"
          description="We understand you can’t be late for your flight, nor do you need
the stress or worry.
Transfers to or from Melbourne airport are guaranteed*.
Sedans and People Movers for up to 7 passengers."
        />
      </Card>
     
       
     
      </div>
      </div>
      <div className='col-md-4'>
      <div className='corporate_section'>
      
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        
      >
      <img src='corporate.jpg'alt='corporate_img'className='corporate_image'></img>
        <Meta
       
          title="Corporate car hire"
          description="Our corporate car hire service offers a clean, reliable and sensible
alternative to a regular taxi. Southern Cross can fulfil a range of
transport requirements to a consistently high standard, across
your organisation."
        />
      </Card>
      </div>
      </div>
      <div className='col-md-4'>
      <div className='wedding_transfer_section'>
     
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
     
      >
      <img src='wedding_transfer.jpg'alt='wedding_transfer_img'className='wedding_transfer_img'></img>
        <Meta
       
          title="Wedding transfers"
          description="We offer modern luxury wedding cars at affordable prices. Be
chauffeur driven in one of our luxury sedans or people movers.
Cars are available in Champagne, Black or Silver."
        />
      </Card>
      </div>
      </div>
      
      </div>
      </div>
      </div>
      <div className="help_section">
  <div className="container">
      <div className="row">
      <div className="col-md-6">
      <h3 className="help_section_headlight_text">We're Here To Help!</h3>
      <div className="col-sm-6 mb-3">
        
        
        <input type="text"className="form-control"placeholder="Name"></input>

        </div>
        <div className="col-sm-6 mb-3">
        
        
        <input type="text"className="form-control"placeholder="Email Address"></input>

        </div>
        <div className="col-sm-6 mb-3">
        
        
        <input type="text"className="form-control"placeholder="Address"></input>

        </div>
        <div className="col-sm-6 mb-3">
        
        
        <input type="text"className="form-control"placeholder="Resedential/Business"></input>

        </div>
        <div className="col-sm-6 mb-3">
        
        
        <textarea className="form-control"placeholder="Message"></textarea>
        <button className="btn btn-dark">
              Send Message
            </button>
        </div>
        </div>
        <div className="col-md-6"data-aos="slide-left">
          <div className="address_section">

            <ul className="adddress_menu">
            <img src='visit.png'alt='visit_img'className='visit_image'/>
            <li className="address_items"> Office</li>
          
              
            <li className="address_items">6 Grace Street Craigieburn.</li>
              <li className="address_items">Melbourne 3064. VIC</li>
              <li className="address_items">info@vhalimos.com.au</li>
<img src='timer.png'alt='timer_img'className="timer_image"></img>
<li className="address_items">Hours</li>
<li className="address_items">Booking Line open</li>
<li className="address_items">7 AM – 9 PM</li>
<img src='phone2.png'alt='phone_image'className='phone_img'></img>
<li className="address_items">Call Us</li>
<li className="address_items">0430 579 957</li>


            </ul>
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

      {/* <div className="service_section">
  
      <h1 className="our_service_text">Our Services</h1>
      <p className="our_service_muted_text">
      VHA Limos is melbourne’s largest taxi cab network with fastest coverage. Our services are<br/> for your every event in Melbourne. Hire our luxury cars with highly trained chauffeurs and<br/> feel the difference. Book us today for your next event! 
      </p>
    
</div>
<div className="melbourn_section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h3 className="melbourn_heading_text">Melbourne Airport Transfers</h3>
        <p className="melbourn_muted_text">We understand you can’t be late for your flight, nor do you need <br/>the stress or worry.<br/>

Transfers to or from Melbourne airport are guaranteed*.<br/>
Sedans and People Movers for up to 7 passengers.</p>
      </div>
      <div className="col-md-6">
        <img src="airport.jpg"alt="airport_img"className="airport_image"></img>
      </div>
    </div>
  </div>
</div>
<div className="corporate_section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="corporate.jpg"alt="corporate_img"className="corporate_image"></img>
      </div>
      <div className="col-md-6">
        <h3 className="corporate_heading_text">Corporate car hire</h3>
        <p className="corporate_muted_text">Our corporate car hire service offers a clean, reliable and sensible <br/>alternative to a regular taxi. Southern Cross can fulfil a range of<br/> transport requirements to a consistently high standard, across <br/>your organisation.</p>
      </div>
    </div>
  </div>
</div>
<div className="wedding_transfer_section">
<div className="container">
<div className="row">
<div className="col-md-6">
  <h3 className="wedding_transfer_headline_text">Wedding transfers
  </h3>
  <p className="wedding_transfer_muted_text">
  We offer modern luxury wedding cars at affordable prices. Be <br/>chauffeur driven in one of our luxury sedans or people movers. <br/>Cars are available in Champagne, Black or Silver. <br/>
  </p>
  </div>
  <div className="col-md-6">
    <img src="wedding_transfer.jpg"alt="wedding_transfer_img"className="wedding_transfer_img"></img>
  </div>
  </div>
</div>
</div> */}
    </>
  )
}

export default Services