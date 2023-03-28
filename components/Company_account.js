
import Header from "../components/Header"
function Company_account() {
  return (
    <>
    <Header/>
      <div className="comapny_account_section">
        <h3 className="company_account_text">Company Account Setup</h3>
      </div>
      <div className="company_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="company_section_muted_text1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry’s standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type and scrambled it to <br/>make a type specimen book. It has survived not only five centuries, but also<br/> the leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset sheets containing<br/> Lorem Ipsum passages, and more recently with desktop publishing software <br/>like Aldus PageMaker including versions of Lorem Ipsum.<br/></p>
              <p className="company_section_muted_text2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry’s standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type and scrambled it to <br/>make a type specimen book. It has survived not only five centuries, but also<br/> the leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset sheets containing<br/> Lorem Ipsum passages, and more recently with desktop publishing software <br/>like Aldus PageMaker including versions of Lorem Ipsum.<br/></p>
              <p className="company_section_muted_text3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry’s standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type and scrambled it to <br/>make a type specimen book. It has survived not only five centuries, but also<br/> the leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset sheets containing<br/> Lorem Ipsum passages, and more recently with desktop publishing software <br/>like Aldus PageMaker including versions of Lorem Ipsum.<br/></p>

              <p className="company_section_muted_text4">

              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry’s standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type and scrambled it to <br/>make a type specimen book. It has survived not only five centuries, but also<br/> the leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset sheets containing<br/> Lorem Ipsum passages, and more recently with desktop publishing software <br/>like Aldus PageMaker including versions of Lorem Ipsum.<br/></p>
              
            </div>
            <div className="col-md-6">
            <div className="company_form">
              <h3 className="company_heading_text">Company Account Setup</h3>
              <form>
                <label htmlFor="company_heading">Company Name <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="comapny_heading">Title <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="comapny_heading">Name <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="comapny_heading">Surname <span className="require">*</span></label>
                <input type="text"className="form-control"></input>
                <label htmlFor="comapny_heading">Email<span className="require">*</span></label>
                <input type="email"className="form-control"></input>
                <label htmlFor="comapny_heading">Phone <span className="require">*</span></label>
                <input type="number"className="form-control"></input>
                <label htmlFor="Company_heading">Travel frequency<span className="require">*</span></label><br/>
                <select className="form-select" aria-label="Default select example">
              <option selected>Please choose an option</option>
              <option value="1-5trips">1-5trips</option>
              <option value="5-10trips">5-10trips</option>
              <option value="10-15trips">10-15trips</option>
              <option value="15+trips">15+trips</option>
              
            
            </select>
  {/* <select name="seat" id="seat">
    <option value="1-5trips">1-5trips</option>
    <option value="5-10trips">5-10trips</option>
    <option value="10-15trips">10-15trips</option>
    <option value="15+trips">15+trips</option>
   
    </select> */}

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

export default Company_account