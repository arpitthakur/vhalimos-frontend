
import Header from "../components/Header"
function ContactUs() {
  return (
    <>
    <Header/>
      <div className="get_in_touch_section">
        <h3 className="get_in_touch_text">Get In Touch</h3>
        <p className="get_in_touch_muted_text"> VHA Limos provide service 24×7 for booking. Our contact details are mentioned below</p>
      </div>
      <div className="address_section">
        <div className="container">
          <div className="row">
          
            <div className="col-md-4">
            <div className="address_section_one" data-aos="slide-up">
              <img src="address.png"alt="address_img"className="address_image"></img>
              <h3 className="address_heading_text">Address</h3>
              <p className="address_muted_text">6 Grace Street Craigieburn.<br/>
Melbourne 3064. VIC</p>
            </div>
            </div>
        
            <div className="col-md-4">
            <div className="phone_number_section" data-aos="slide-up" >
              <img src="phone.png"alt="phone_image"className="phone-img"></img>
              <h3 className="phone_heading_text">Phone</h3>
              <p className="phone_muted_text">0430 579 957</p>
            </div>
            </div>
           
            <div className="col-md-4">
            <div className="email_section"data-aos="slide-up">
              <img src="email.png"alt="email_img"className="email_image"></img>
              <h3 className="email_heading_text">Email</h3>
              <p className="email_muted_text">info@vhalimos.com.au</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_us_section">
      <h3 className="contact_us_text">CONTACT US</h3>
      <div className="container">
        <form>
          <div className="form_input">
            <label htmlFor="form-heading">
              Name<span className="require">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Name"/>
            <label htmlFor="form-heading">
              Email<span className="require">*</span>
            </label>
            <input type="email" className="form-control"placeholder="Email" />
            <label htmlFor="form-heading">
              Address<span className="require">*</span>
            </label>
            <input type="text" className="form-control"placeholder="Address" />
            <label htmlFor="form-heading">
              Resedential/Business<span className="require">*</span>
            </label>
            <input type="text" className="form-control"placeholder="Resedential/Business" />
            <label htmlFor="form-heading">
              Message<span className="require">*</span>
            </label>
            <textarea
              id="w3review"
              className="form-control"
              name="w3review"
              classrows="4"
              cols="50"placeholder="Message"
            ></textarea>


            <button className="btn btn-dark">
              SEND MESSAGES
            </button>
          </div>
        </form>
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
      {/* <div className="container">
      <div className="row">
      <h3 className="contact_us_heading_text">Contact Us</h3>
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
        <button type="button" class="btn btn-warning message_btn">SEND MESSAGES</button>
        </div>
        <div className="col-md-6"></div>
        
        </div>
        </div> */}
      </div>
    </>
  )
}

export default ContactUs