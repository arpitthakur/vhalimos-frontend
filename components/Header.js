import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className="header-menu bg-light">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="logoLink" href="/"> <img src='vhalimos.png'className='vhalimos_logo'
             
            /></Link>
           

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">Services</Link>
                </li>
                   <li className="nav-item">
                  <Link href="/services">Vehicles</Link>
                </li>
                 <li className="nav-item">
                  <Link href="/membership">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">Special Offers</Link>
                </li>
               
             
        

                  <li className="nav-item">
                  <Link href="/contact">Contact Us</Link>
                  </li>
               
                    <li className="nav-item">
                    <Link href="/contact">Book Now</Link>
                    </li> :
                    <li className="nav-item">
                    <Link href="/contact">Blogs</Link>
                    </li>

              
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header