import {Container,Row,Col} from 'react-bootstrap';
import CardSmComp from './cardSmComp';
function CardSm(){
    const url1 = 'https://api.api-ninjas.com/v1/celebrity?name=emma-watson';
    return(
        <div>
{/* <Container className='mb-5'>
            <h3 className='text-center mt-3 mb-3'>Popular Cars (1990-1995)</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1992" index="0" carImageSearchQuery="autokraft limited"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1993" index="1" carImageSearchQuery="subaru"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1994" index="2" carImageSearchQuery="alfa romeo spider"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1995" index="4" carImageSearchQuery="chevrolet corvette"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3'>Popular Cars (1995-2000)</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1999" index="3" carImageSearchQuery="bmw m roadster"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1996" index="1" carImageSearchQuery="acura nsx"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1997" index="2" carImageSearchQuery="ferrari"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=1998" index="4" carImageSearchQuery="aston martin volante"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3'>Popular Cars (2000-2005)</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2000" index="3" carImageSearchQuery="bmw z3 coupe"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2005" index="3" carImageSearchQuery="audi tt roadster quattro"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2002" index="2" carImageSearchQuery="aston martin vanquish"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2001" index="4" carImageSearchQuery="bmw m coupe"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3'>Popular Cars (2005-2010)</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2006" index="3" carImageSearchQuery="cadillac xlr"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2007" index="3" carImageSearchQuery="mercedes-benz sl550"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2010" index="2" carImageSearchQuery="jaguar  xk convertible"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2009" index="4" carImageSearchQuery="mercedes-benz automatic"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3'>Popular Cars (2010-2015)</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2011" index="3" carImageSearchQuery="bmw z4 sdrive35i"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2012" index="3" carImageSearchQuery="audi r8 spyder"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2013" index="2" carImageSearchQuery="volkswagen "/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2014" index="4" carImageSearchQuery="mazda cx-5 2wd"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3'>Popular Cars (2015-2020)</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2016" index="3" carImageSearchQuery="kia sorento fe awd"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2017" index="3" carImageSearchQuery="hyundai santa fe sport ultimate awd"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2018" index="2" carImageSearchQuery="audi a5 cabriolet quattro"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2019" index="4" carImageSearchQuery="chevrolet"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3'>Popular Cars (2020-Now)</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2020" index="3" carImageSearchQuery="toyota"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2021" index="3" carImageSearchQuery="jaguar coupe"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2022" index="2" carImageSearchQuery="kia stinger rwd"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="year=2020" index="4" carImageSearchQuery="toyota"/>
                </Col>
            </Row>
        </Container> */}
        {/* <Container>
        <h3 className='text-center mt-3 mb-3'>Fuel Type Gas</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="0" carImageSearchQuery="Alfa Romeo"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="1" carImageSearchQuery="Ferrari Testarossa"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="2" carImageSearchQuery="Dodge Charger"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="3" carImageSearchQuery="Dodge"/>
                </Col>
               
               
            </Row>
        <h3 className='text-center mt-3 mb-3'>Fuel Type Diesel</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="0" carImageSearchQuery="Mercedes-Benz"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="1" carImageSearchQuery="Gmc"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="4" carImageSearchQuery="Chevrolet"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="3" carImageSearchQuery="Chevrolet automatic"/>
                </Col>
               
               
            </Row>
        <h3 className='text-center mt-3 mb-3'>Fuel Type Electricity</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="0" carImageSearchQuery="Nissan"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="1" carImageSearchQuery="Toyota"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="4" carImageSearchQuery="Ford Bronco"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="3" carImageSearchQuery="Ford Th!Nk"/>
                </Col>
               
               
            </Row>
        </Container> */}
        <Container>
        <h3 className='text-center mt-3 mb-3'>Transmission Type Automatic</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="name=emma watson" carImageSearchQuery="emma watson"/>
                </Col>
                
                </Row>
       
        </Container>
        </div>
        
    );
}
export default CardSm;