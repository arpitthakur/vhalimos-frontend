import React from 'react'
import Header from "../components/Header"

function Join_driver() {
  return (
   <>
   <Header/>
    <div className='join_driver_section'>
      <h3 className="join_driver_text">Join as Driver</h3>
    </div>
    <div className='join_driver_form_section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src='join_driver.png'alt='join_driver_img'className='join_driver_image'></img>
          </div>
          <div className='col-md-6'>
          <div className='company_form'>
          <h3 className="join_heading_text">Join as a Driver</h3>
              <form>
                <label htmlFor="join_heading">Company Name <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="join_heading">Title <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="join_heading">Name <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="join_heading">Surname <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="join_heading">Email<span className="require">*</span></label>
                <input type="email"className="form-control"></input>
                <label htmlFor="join_heading">Phone <span className="require">*</span></label>
                <input type="number"className="form-control"></input>

                <label htmlFor="join_heading">Do you have a Vehicle</label><br/>
             
                <select className="form-select" aria-label="Default select example">
  <option value="Please select an option">---Please select an option---</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>

   
    </select><br/>
    <label htmlFor="join_heading">Do you have  DC</label><br/>
    
    <select className="form-select" aria-label="Default select example">
  <option value="Please select an option">---Please select an option---</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>

   
    </select><br/>
  
  

   
    <label htmlFor="join_heading">Do you have Experience</label><br/>
    
    <select className="form-select" aria-label="Default select example">
  <option value="Please select an option">---Please select an option---</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>

   
    </select><br/>
    <label htmlFor="join_heading">Suburb you Live in</label>
                <input type="text"className="form-control"></input>

    <label htmlFor="form_heading">How did you find us Option Word of Mouth, Google, Facebook, Other social media?</label>
   <textarea className="form-control"></textarea>
   <button className="btn btn-dark book-now">
              Book Now
            </button>
              </form>
          </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Join_driver