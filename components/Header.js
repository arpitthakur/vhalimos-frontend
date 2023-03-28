// import Link from 'next/link'

// function Header() {
//   return (
//     <div>
//       <div className="header-menu bg-light">
//         <div className="container-fluid">
//           <nav className="navbar navbar-expand-lg navbar-light ">
//           <Link className="logoLink" href="/"> <img src='vhalimos.png'className='vhalimos_logo'
             
//             /></Link>
           

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarText"
//               aria-controls="navbarText"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarText">
//               <ul className="navbar-nav ">
//                 <li className="nav-item ">
//                   <Link href="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/service">Services</Link>
//                 </li>
//                    <li className="nav-item">
//                   <Link href="/vehicle">Vehicles</Link>
//                 </li>
//                  <li className="nav-item">
//                   <Link href="/aboutus">About Us</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/special_offer">Special Offers</Link>
//                 </li>
//                 <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
//             Frequent traveller Account setup
           
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//            <li> <Link href="/company_account" >Company Account Setup</Link></li>
//            <li> <Link href="/individual_account" >Individual Account Setup</Link></li>
//             <li><Link href="/join_driver">Join as a driver</Link></li>
//           </ul>
//         </li>
               
             
        

//                   <li className="nav-item">
//                   <Link href="/contact">Contact Us</Link>
//                   </li>
               
//                     <li className="nav-item">
//                     <Link href="/book_now">Book Now</Link>
//                     </li> :
//                     <li className="nav-item">
//                     <Link href="/contact">Blogs</Link>
//                     </li>

              
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header
import Link from 'next/link'
import {Button, Dropdown,  Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';


import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';

 const Header = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Home',
      'Services',
      'Vehicles',
      'About Us',
      'Special Offers',
      'Frequent traveller Account setup',
      'Contact Us',
      'Book Now',
      'Blogs'
      
   ];
   return (
    <>
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <img src='vhalimos.png'alt="vhalimous_img"className='vhalimos_logo'></img>
             
          
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '10rem',
               }}
            >
             <Navbar.Link isActive >
            <Link href="/"> Home</Link>
               </Navbar.Link>
               <Navbar.Link >
               <Link href="/service">
               Services</Link></Navbar.Link>
               <Navbar.Link ><Link href="/vehicle">Vehicles</Link></Navbar.Link>
               <Navbar.Link ><Link href="/aboutus">About Us</Link></Navbar.Link>
               <Navbar.Link ><Link href="/special_offer">Special Offers</Link></Navbar.Link>
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        
                        ripple={false}
                     >
                     <Link href ="/#" > Frequent traveller Account setup</Link> 
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="ACME features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="autoscaling"
                        showFullDescription
                      
                       
                     >
                     <Link href="/company_account">Company Account Setup</Link>  
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="usage_metrics"
                        showFullDescription
                       
                       
                     >
                      <Link href="/individual_account">Individual Account Setup</Link>  
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="production_ready"
                        showFullDescription
                       
                     
                     >
                   <Link href="/join_driver">Join as a driver</Link>  
                        
                     </Dropdown.Item>
                    
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link><Link href="/contact">Contact Us</Link></Navbar.Link>
               <Navbar.Link><Link href="/book_now">Book Now</Link></Navbar.Link>
               <Navbar.Link><Link href="/#">Blogs</Link></Navbar.Link>
            
              
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                 
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
              
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            

          
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                 
               </Link>
            </Navbar.Item>
            {/* <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item> */}
         </Navbar.Content>
      </Navbar>
      </>
   );
};
export default Header