import Header from "../components/Header";
function Book_now() {
  return (
    <>
      <Header />
      <div className="ready_book_section">
        <h3 className="ready_book_text">Ready to Book?</h3>
      </div>
      <div className="form_fill_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="fill_form_section">
                <div className="card">
                  <div className="card-body1">
                    <img
                      src="form.png"
                      alt="form_img"
                      className="form_image"
                    ></img>
                    <h5 className="card-title">Step 1</h5>
                    <p className="card-text">Fill out your booking details below</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="payment_section">
                <div className="card">
                  <div className="card-body1">
                    <img
                      src="payment.png"
                      alt="payment_img"
                      className="payment_image"
                    ></img>
                    <h5 className="card-title">Step 2</h5>
                    <p className="card-text">Choose Payment Method</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="confirm_section">
                <div className="card">
                  <div className="card-body1">
                    <img
                      src="approval.png"
                      alt="approval_img"
                      className="approval_image"
                    ></img>
                    <h5 className="card-title">Step 3</h5>
                    <p className="card-text">Confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="form_input">
            <label htmlFor="form-heading">
              Name<span className="require">*</span>
            </label>
            <input type="text" className="form-control" />
            <label htmlFor="form-heading">
              Surname<span className="require">*</span>
            </label>
            <input type="password" className="form-control" />
            <label htmlFor="form-heading">
              Your email<span className="require">*</span>
            </label>
            <input type="email" className="form-control" />
            <label htmlFor="form-heading">
              Phone Number<span className="require">*</span>
            </label>
            <input type="number" className="form-control" />
            <div className="hours_section">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="form-heading">Hours</label>{" "}
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please choose an option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="form-heading">Mins</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Please choose an option--</option>
                    <option value="05">O5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className=" form-select"
                    id="form_select"
                    aria-label="Default select example"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
              </div>
            </div>
            <label htmlFor="form-heading">Pick up Date</label>
            <input type="date" className="form-control"></input>
            <label>Picked up From</label>
            <input type="text" className="form-control"></input>
            <label htmlFor="form-heading">Drop Off Address</label>
            <input type="text" className="form-control"></input>
            <label htmlFor="form-heading">Number of Passengers</label>
            <input type="number" className="form-control"></input>
            <label htmlFor="form-heading">Vehicle Type</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Please choose an option</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="Mini Bus">Mini Bus</option>
              <option value="others">Others</option>
            </select>
            <label htmlFor="form-heading">Number of Luggage</label>
            <input type="number" className="form-control"></input>
            <label htmlFor="form-heading">Baby seat required</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Please choose an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="form-heading">Note To Driver</label>
            <textarea
              id="w3review"
              className="form-control"
              name="w3review"
              classrows="4"
              cols="50"
            ></textarea>

            <button className="btn btn-dark">
              Next
            </button>
          </div>
        </form>
      </div>
      <div className="middle_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 " data-aos="slide-right">
              <h3 className="middle_text">
                We Accept All Credit Cards and Cab
                <br /> Charge
              </h3>
            </div>
            <div className="col-md-6" data-aos="slide-left">
              <img
                src="checkout.png"
                alt="checkout_img"
                className="checkout_image"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="content px-xl-5">
                <h3>
                  Frequently Asked <strong>Questions</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div
                className="accordion accordion-flush"
                id="faqlist"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      <span className="num">1.</span>
                      Are there any Extras to pay?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      We try and make our fares simple and transparent.
                      Variations or extras to a straight point-to-point transfer
                      fare include: Child Seats, Larger car, Additional pick up
                      points, Waiting time if applicable and Melbourne Airport
                      parking fees.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      <span className="num">2.</span>
                      What sorts of Cars are available?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      Please refer to Our vehicle section page on the menu bar
                      for a snapshot of our available cars. You can also click
                      here
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      <span className="num">3.</span>
                      Will the car turn up on time?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      Yes. Everything we do serves to achieve this priority.
                      Please see our Home Page for the steps we take to
                      guarantee your Booking. If we can improve in any way,
                      please be in touch.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="jayride_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="jayride_text">Contact</h4>
              <p className="jayride_muted_text">
                6 Grace Street Craigieburn. Melbourne 3064. VIC
                <br />
                info@vhalimos.com.au
                <br />
                0430 579 957
                <br />
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
              <img
                src="jayride.png"
                alt="jayride_img"
                className="jayride_image"
              ></img>
            </div>
            <div className="col-md-3">
              <h4 className="jayride_text">We Accept All Major Cards</h4>
              <img src="card.png" alt="card-img" className="card_image"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book_now;
