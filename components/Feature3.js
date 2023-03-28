import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import { MessageOutlined} from '@ant-design/icons';

import {Flex} from '../components/Flex';

 const Features3 = () => {
   return (
      <>
         
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               
               <Text h3>Why You Choose Us ?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Our services are for your every event in Melbourne. Hire our luxury cars with highly trained chauffeurs and feel the difference. Book us today for your next event!
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                       
                        <Flex direction={'column'}>
                        <img src='message.png'alt='message_img'className="message_image"></img>
                           <Text h5>EASY ONLINE BOOKING</Text>
                         
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                      
                        <Flex direction={'column'}>
                        <img src='iconsand.gif'alt="icon_sand_img"className='iconsand_img'></img>
                           <Text h5>ON TIME SERVICE</Text>
                         
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                       
                        <Flex direction={'column'}>
                        <img src='phone1.png' alt='phone_img'className='phone_image'></img>
                           <Text h5>24/7 TAXI & CAR SERVICES</Text>
                       
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
              
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                       
                        <Flex direction={'column'}>
                        <img src='driver.png'alt='driver_image'className='driver_image'></img>
                           <Text h5>PROFESSIONAL DRIVERS</Text>
                        
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                       
                        <Flex direction={'column'}>
                        <img src='door.png'alt='door_img'className="door_image"></img>
                           <Text h5>DOOR TO DOOR SERVICE</Text>
                          
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               
            </Flex>
          
        

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
export default Features3