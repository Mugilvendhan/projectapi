import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function ResultComponent({ searchQuery }) {
  const [airports, setAirports] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAirportPhoto = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`,
        {
          headers: {
            'Authorization': '1bADmPNFevWjmq51EyavVvXlBOAmN1jzlVQwJyoV3rpqBzUTXuYPxCKJ',
            'Content-Type': 'application/json'
          },
        }
      );

      if (response.data.results.length > 0) {
        const imageUrl = response.data.results[0].urls.regular;
        console.log('Image URL:', imageUrl);
        return imageUrl;
      } else {
        console.error('No images found for', searchQuery);
      }
    } catch (error) {
      console.error('Error fetching airport photo:', error);
      throw new Error('Error fetching airport photo');
    }
    return null;
  };

  useEffect(() => {
    const fetchAirports = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = 'LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK';
        const response = await fetch(`https://api.api-ninjas.com/v1/airports?name=${searchQuery}`, {
          method: 'GET',
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Map through the data and fetch airport photos concurrently
        const airportsWithPhotos = await Promise.all(data.map(async (airport) => {
          try {
            const imageUrl = await fetchAirportPhoto(airport.name);
            return { ...airport, image: imageUrl };
          } catch (error) {
            // Handle errors if image fetch fails
            console.error('Error fetching airport photo:', error);
            return { ...airport, image: null }; // Set image to null if fetch fails
          }
        }));
        setAirports(airportsWithPhotos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchAirports();
    }
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
        return <p>Data not available</p>;
       }

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {airports !== null && airports.map((airport, index) => (
        <Col key={index}>
          <Card style={{ marginBottom: '1rem' }} className="text-left">
   {/*          <Card.Img variant="top" src={airport.image} alt={`${airport.name} Image`} style={{ height: '200px' }} />  */}
            <Card.Body>
              <Card.Title>{airport.name}</Card.Title>
              <hr />
              <Card.Text><b>ICAO</b>: {airport.icao || 'N/A'}</Card.Text>
              <Card.Text><b>IATA</b>: {airport.iata || 'N/A'}</Card.Text>
              <Card.Text><b>City</b>: {airport.city || 'N/A'}</Card.Text>
              <Card.Text><b>Region</b>: {airport.region || 'N/A'}</Card.Text>
              <Card.Text><b>Country</b>: {airport.country || 'N/A'}</Card.Text>
              <Card.Text><b>Elevation</b>: {airport.elevation_ft ? airport.elevation_ft + ' ft' : 'N/A'}</Card.Text>
              <Card.Text><b>Latitude</b>: {airport.latitude || 'N/A'}</Card.Text>
              <Card.Text><b>Longitude</b>: {airport.longitude || 'N/A'}</Card.Text>
              <Card.Text><b>Timezone</b>: {airport.timezone || 'N/A'}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ResultComponent;



















// /* 
// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';

// function ResultComponent({ searchQuery }) {
//   const [celebrities, setCelebrities] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCelebrities = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const apiKey = 'LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK';
//         const response = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${searchQuery}`, {
//           method: 'GET',
//           headers: {
//             'x-api-key': apiKey,
//             'Content-Type': 'application/json'
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCelebrities(data);
//         // Call fetchCelebrityPhoto for each celebrity
//         data.forEach(celebrity => {
//           fetchCelebrityPhoto(celebrity.name)
//             .then(photoUrl => {
//               celebrity.image = photoUrl;
//               setCelebrities(prevCelebrities => [...prevCelebrities]); // Trigger re-render
//             })
//             .catch(error => console.error('Error fetching celebrity photo:', error));
//         });
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (searchQuery) {
//       fetchCelebrities();
//     }
//   }, [searchQuery]);

//   const fetchCelebrityPhoto = async (celebrityName) => {
//     try {
//       const response = await axios.get(
//         `https://api.unsplash.com/search/photos?query=${encodeURIComponent(celebrityName)}&per_page=1`,
//         {
//           headers: {
//             'Authorization': 'p_3cnqzg0-fLYsbGZGLz7vwNKgpR6sTt9qbVSUTwPFU',
//             'Content-Type': 'application/json'
//           },
//         }
//       );
//       if (response.data.results.length > 0) {
//         const imageUrl = response.data.results[0].urls.regular;
//         console.log('Image URL:', imageUrl); // Debugging statement
//         return imageUrl;
//       } else {
//         console.error('No images found for', celebrityName); // Debugging statement
//       }
//     } catch (error) {
//       console.error('Error fetching celebrity photo:', error);
//     }
//     return null;
//   };
  

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <Row xs={1} md={2} lg={4} className="g-4">
//       {celebrities.map((celebrity, index) => (
//         <Col key={index}>
//           <Card style={{ marginBottom: '1rem' }}>
//           <Card.Body>
//           {celebrity.image && (
//   <Card.Img variant="top" src={celebrity.image} />
// )}

            
//               <Card.Title>{celebrity.name}</Card.Title>
//               <Card.Text>Gender: {celebrity.gender}</Card.Text>
//               <Card.Text>Net worth: {celebrity.net_worth}</Card.Text>
//               <Card.Text>Height: {celebrity.height}</Card.Text>
//               <Card.Text>BirthDay: {celebrity.birthday}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default ResultComponent; */




// /* 
// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';

// function ResultComponent({ searchQuery }) {
//   const [celebrities, setCelebrities] = useState(null);
//   const [airports, setairports] = useState('');

//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCelebrities = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const apiKey = 'LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK';
//         const response = await fetch(`https://api.api-ninjas.com/v1/airports?name=${searchQuery}`, {
//           method: 'GET',
//           headers: {
//             'x-api-key': "LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK",
//             'Content-Type': 'application/json'
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         // Map through the data and fetch celebrity photos concurrently
//         const celebritiesWithPhotos = await Promise.all(data.map(async (celebrity) => {
//           const imageUrl = await fetchCelebrityPhoto(celebrity.name);
//           return { ...celebrity, image: imageUrl };
//         }));
//         setCelebrities(celebritiesWithPhotos);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (searchQuery) {
//       fetchCelebrities();
//     }
//   }, [searchQuery]);
  
//   const fetchCelebrityPhoto = async (image) => {
//     try {
//       const response = await axios.get(
//         `https://api.pexels.com/v1/search?query=${image}&per_page=1`, // Encode the name parameter
//         {
//           headers: {
//             'Authorization': '1bADmPNFevWjmq51EyavVvXlBOAmN1jzlVQwJyoV3rpqBzUTXuYPxCKJ',
//             'Content-Type': 'application/json'
//           },
//         }
//       );
//       if (response.data.results.length > 0) {
//         const imageUrl = response.data.results[0].urls.regular;
//         console.log('Image URL:', imageUrl);
//         return imageUrl;
//       } else {
//         console.error('No images found for', image);
//       }
//     } catch (error) {
//       console.error('Error fetching celebrity photo:', error);
//     }
//     return null;
//   };
  
  
//   return (
//       <Row xs={1} md={2} lg={4} className="g-4">
//         {celebrities !== null && celebrities.map((celebrity, index) => (
//           <Col key={index}>
//             <Card style={{ marginBottom: '1rem' }}>
//               <Card.Img variant="top" src={celebrity.image} alt={`${celebrity.name} Image`} style={{ height: '200px' }} />
//               <Card.Body>
//                 <Card.Title>{celebrity.name}</Card.Title>
//                 <Card.Text>Gender: {celebrity.gender}</Card.Text>
//                 <Card.Text>Net worth: {celebrity.net_worth}</Card.Text>
//                 <Card.Text>Height: {celebrity.height}</Card.Text>
//                 <Card.Text>BirthDay: {celebrity.birthday}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     );
// }

// export default ResultComponent;

//  */





// /* import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';

// function ResultComponent({ searchQuery }) {
//   const [airports, setAirports] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchAirports = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const apiKey = 'LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK';
//         const response = await fetch(`https://api.api-ninjas.com/v1/airports?name=${searchQuery}`, {
//           method: 'GET',
//           headers: {
//             'x-api-key': apiKey,
//             'Content-Type': 'application/json'
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         // Map through the data and fetch airport photos concurrently
//         const airportsWithPhotos = await Promise.all(data.map(async (airport) => {
//           const imageUrl = await fetchAirportPhoto(airport.name);
//           return { ...airport, image: imageUrl };
//         }));
//         setAirports(airportsWithPhotos);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (searchQuery) {
//       fetchAirports();
//     }
//   }, [searchQuery]);
  
//   const fetchAirportPhoto = async (name) => {
//     try {
//       const response = await axios.get(
//         `https://api.pexels.com/v1/search?query=${name}&per_page=1`,
//         {
//           headers: {
//             'Authorization': '1bADmPNFevWjmq51EyavVvXlBOAmN1jzlVQwJyoV3rpqBzUTXuYPxCKJ',
//             'Content-Type': 'application/json'
//           },
//         }
//       );
//       if (response.data.results.length > 0) {
//         const imageUrl = response.data.results[0].urls.regular;
//         console.log('Image URL:', imageUrl); 
//         return imageUrl;
//       } else {
//         console.error('No images found for', name);
//       }
//     } catch (error) {
//       console.error('Error fetching airport photo:', error);
//     }
//     return null;
//   };
  
  
//   return (
//     <Row xs={1} md={2} lg={4} className="g-4">
//     {airports !== null && airports.map((airport, index) => (
//       <Col key={index}>
//         <Card style={{ marginBottom: '1rem' }}>
      
//           {console.log('Image URL:', airport.image)}
//           <Card.Img variant="top" src={airport.image} alt={`${airport.name} Image`} style={{ height: '200px' }} />
//           <Card.Body>
//             <Card.Title>{airport.name}</Card.Title>
//             <Card.Text>Location: {airport.location}</Card.Text>
//             <Card.Text>Terminal: {airport.terminal}</Card.Text>
//             <Card.Text>Gate: {airport.gate}</Card.Text>
//             <Card.Text>Flight Schedule: {airport.flightSchedule}</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row>
//     );
// }

// export default ResultComponent; */





// // import React, { useState, useEffect } from 'react';
// // import Card from 'react-bootstrap/Card';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// // import axios from 'axios';

// // function ResultComponent({ searchQuery }) {
// //   const [airports, setAirports] = useState(null);
// //   const [airportImage, setAirportImage] = useState('');
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     const fetchAirports = async () => {
// //       setLoading(true);
// //       setError(null);
// //       try {
// //         const apiKey = 'LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK';
// //         const response = await fetch(`https://api.api-ninjas.com/v1/airports?name=${searchQuery}`, {
// //           method: 'GET',
// //           headers: {
// //             'x-api-key': apiKey,
// //             'Content-Type': 'application/json'
// //           }
// //         });
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
// //         // Map through the data and fetch airport photos concurrently
// //         const airportsWithPhotos = await Promise.all(data.map(async (airport) => {
// //           try {
// //             const imageUrl = await fetchAirportPhoto(airport.name);
// //             return { ...airport, image: imageUrl };
// //           } catch (error) {
// //             // Handle errors if image fetch fails
// //             console.error('Error fetching airport photo:', error);
// //             return { ...airport, image: null }; // Set image to null if fetch fails
// //           }
// //         }));
// //         setAirports(airportsWithPhotos);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
  
// //     if (searchQuery) {
// //       fetchAirports();
// //     }
// //   }, [searchQuery]);


// //   const fetchAirportPhoto = async (name) => {
// //     try {
// //       const response = await axios.get(
// //         `https://api.pexels.com/v1/search?query=${name}&per_page=1`,
// //         {
// //           headers: {
// //             'Authorization': '1bADmPNFevWjmq51EyavVvXlBOAmN1jzlVQwJyoV3rpqBzUTXuYPxCKJ',
// //             'Content-Type': 'application/json'
// //           },
// //         }
// //       );



   
// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }


// //       if (response.data.results.length > 0) {
// //         const imageUrl = response.data.results[0].urls.regular;
// //         console.log('Image URL:', imageUrl);
// //         return imageUrl;
// //       } else {
// //         console.error('No images found for', name);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching airport photo:', error);
// //     }
// //     return null;
// //   };
  
  
// //   return (
// //     <Row xs={1} md={2} lg={4} className="g-4">
// //     {airports !== null && airports.map((airport, index) => (
// //       <Col key={index}>
// //         <Card style={{ marginBottom: '1rem' }}>
// //         <Card.Img variant="top" src={airport.image} alt={`${airport.name} Image`} style={{ height: '200px' }} />

// //           <Card.Body>
// //             <Card.Title>{airport.name}</Card.Title>
// //               <Card.Text>ICAO: {airport.icao}</Card.Text>
// //               <Card.Text>IATA: {airport.iata}</Card.Text>
// //               <Card.Text>City: {airport.city}</Card.Text>
// //               <Card.Text>Region: {airport.region}</Card.Text>
// //               <Card.Text>Country: {airport.country}</Card.Text>
// //               <Card.Text>Elevation: {airport.elevation_ft} ft</Card.Text>
// //               <Card.Text>Latitude: {airport.latitude}</Card.Text>
// //               <Card.Text>Longitude: {airport.longitude}</Card.Text>
// //               <Card.Text>Timezone: {airport.timezone}</Card.Text>
// //           </Card.Body>
// //         </Card>
// //       </Col>
// //     ))}
// //   </Row>
// //     );
// // }

// // export default ResultComponent;






// /* 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, ListGroup } from 'react-bootstrap';

// function CardSmComp({ url1, model, fuel, trans, year, index, carImageSearchQuery,mod }) {
//   const url=url1+mod;
//   const [carData, setCarData] = useState(null);
//   const [carImage, setCarImage] = useState('');
// console.log(url)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const options = {
//           method: 'GET',
//           headers: { 'x-api-key': 'KcH0p5y3nm2N4tqJFfr1Vj4NLEXuEbGytNTq7rNf' }
//         };
//         const response = await axios.get(url, options);
//         setCarData(response.data);
//       } catch (error) {
//         console.error('Error fetching car data:', error);
//       }
//     };

//     const fetchCarImage = async () => {
//       try {
//         const response = await axios.get(
//           https://api.pexels.com/v1/search?query=${carImageSearchQuery}&per_page=1,
//           {
//             headers: {
//               Authorization: 'YpkmDQ8PDR3I3ml8Jlco6yuUejeGP4TGcK5aHij1ry6oFHv4jH6VX5XH',
//             },
//           }
//         );
//         if (response.data.photos.length > 0) {
//           setCarImage(response.data.photos[0].src.medium);
//         }
//       } catch (error) {
//         console.error('Error fetching car image:', error);
//       }
//     };

//     fetchData();
//     fetchCarImage();
//   }, [url, carImageSearchQuery]);
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={carImage} alt="Car Image" style={{height:'200px'}}/>
//       <Card.Body>
//         <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'center',textTransform:'capitalize'}}>Make: {carData && carData[index].make}</Card.Title>
//         <Card.Text className='text-center' style={{textTransform:'capitalize'}}>
//         Model: {carData && carData[index].model}
//         </Card.Text>
//         <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//         <Button style={{backgroundColor:'#537d90',border:'none',color:'white'}}>View Details</Button>
//         </div>
        
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardSmComp;


// */





// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';

// function ResultComponent({ searchQuery }) {
//   const [airports, setAirports] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchAirportPhoto = async (searchQuery) => {
//     try {
//       const response = await axios.get(
//         `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`,
//         {
//           headers: {
//             'Authorization': '1bADmPNFevWjmq51EyavVvXlBOAmN1jzlVQwJyoV3rpqBzUTXuYPxCKJ',
//             'Content-Type': 'application/json'
//           },
//         }
//       );

//       if (response.data.results.length > 0) {
//         const imageUrl = response.data.results[0].urls.regular;
//         console.log('Image URL:', imageUrl);
//         return imageUrl;
//       } else {
//         console.error('No images found for', searchQuery);
//       }
//     } catch (error) {
//       console.error('Error fetching airport photo:', error);
//       throw new Error('Error fetching airport photo');
//     }
//     return null;
//   };

  

//   useEffect(() => {
//     const fetchAirports = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const apiKey = 'LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK';
//         const response = await fetch(`https://api.api-ninjas.com/v1/airports?name=${searchQuery}`, {
//           method: 'GET',
//           headers: {
//             'x-api-key': apiKey,
//             'Content-Type': 'application/json'
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         // Map through the data and fetch airport photos concurrently
//         const airportsWithPhotos = await Promise.all(data.map(async (airport) => {
//           try {
//             const imageUrl = await fetchAirportPhoto(airport.name);
//             return { ...airport, image: imageUrl };
//           } catch (error) {
//             // Handle errors if image fetch fails
//             console.error('Error fetching airport photo:', error);
//             return { ...airport, image: null }; // Set image to null if fetch fails
//           }
//         }));
//         setAirports(airportsWithPhotos);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//       fetchAirportPhoto();
//       fetchAirports();

//   }, [searchQuery]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <Row xs={1} md={2} lg={4} className="g-4">
//       {airports !== null && airports.map((airport, index) => (
//         <Col key={index}>
//           <Card style={{ marginBottom: '1rem' }} className="text-left">
//             <Card.Img variant="top" src={airport.image} alt={`${airport.searchQuery} Image`} style={{ height: '200px' }} /> 
//             <Card.Body>
//              {/*  <Card.Title>{airport.name}</Card.Title>
//               <hr/>
//               <Card.Text><b>ICAO</b> : {airport.icao}</Card.Text>
//               <Card.Text>IATA: {airport.iata}</Card.Text>
//               <Card.Text>City: {airport.city}</Card.Text>
//               <Card.Text>Region: {airport.region}</Card.Text>
//               <Card.Text>Country: {airport.country}</Card.Text>
//               <Card.Text>Elevation: {airport.elevation_ft} ft</Card.Text>
//               <Card.Text>Latitude: {airport.latitude}</Card.Text>
//               <Card.Text>Longitude: {airport.longitude}</Card.Text>
//               <Card.Text>Timezone: {airport.timezone}</Card.Text>
//             </Card.Body> */}



//         <Card.Title>{airport.name}</Card.Title>
//         <hr />
//         <Card.Text><b>ICAO</b>: {airport.icao || 'N/A'}</Card.Text>
//         <Card.Text><b>IATA</b>: {airport.iata || 'N/A'}</Card.Text>
//         <Card.Text><b>City</b>: {airport.city || 'N/A'}</Card.Text>
//         <Card.Text><b>Region</b>: {airport.region || 'N/A'}</Card.Text>
//         <Card.Text><b>Country</b>: {airport.country || 'N/A'}</Card.Text>
//         <Card.Text><b>Elevation</b>: {airport.elevation_ft ? airport.elevation_ft + ' ft' : 'N/A'}</Card.Text>
//         <Card.Text><b>Latitude</b>: {airport.latitude || 'N/A'}</Card.Text>
//         <Card.Text><b>Longitude</b>: {airport.longitude || 'N/A'}</Card.Text>
//         <Card.Text><b>Timezone</b>: {airport.timezone || 'N/A'}</Card.Text>
//       </Card.Body>


//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default ResultComponent;



// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';

// function ResultComponent({ searchQuery }) {
//   const [airports, setAirports] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchAirportPhoto = async (searchQuery) => {
//     try {
//       const response = await axios.get(
//         `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`,
//         {
//           headers: {
//             'Authorization': '1bADmPNFevWjmq51EyavVvXlBOAmN1jzlVQwJyoV3rpqBzUTXuYPxCKJ',
//             'Content-Type': 'application/json'
//           },
//         }
//       );

//       if (response.data.results.length > 0) {
//         const imageUrl = response.data.results[0].urls.regular;
//         console.log('Image URL:', imageUrl);
//         return imageUrl;
//       } else {
//         console.error('No images found for', searchQuery);
//       }
//     } catch (error) {
//       console.error('Error fetching airport photo:', error);
//       throw new Error('Error fetching airport photo');
//     }
//     return null;
//   };

//   useEffect(() => {
//     const fetchAirports = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const apiKey = 'LitYzNGwsQ3hfGt/cZlnqg==aKItcosmbfb0yNxK';
//         const response = await fetch(`https://api.api-ninjas.com/v1/airports?name=${searchQuery}`, {
//           method: 'GET',
//           headers: {
//             'x-api-key': apiKey,
//             'Content-Type': 'application/json'
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         // Map through the data and fetch airport photos concurrently
//         const airportsWithPhotos = await Promise.all(data.map(async (airport) => {
//           try {
//             const imageUrl = await fetchAirportPhoto(airport.name);
//             return { ...airport, image: imageUrl };
//           } catch (error) {
//             // Handle errors if image fetch fails
//             console.error('Error fetching airport photo:', error);
//             return { ...airport, image: null }; // Set image to null if fetch fails
//           }
//         }));
//         setAirports(airportsWithPhotos);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (searchQuery) {
//       fetchAirports();
//     }
//   }, [searchQuery]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error || !airports) {
//     return <div>Data not available</div>;
//   }

//   return (
//     <Row xs={1} md={2} lg={4} className="g-4">
//       {airports.map((airport, index) => (
//         <Col key={index}>
//           <Card style={{ marginBottom: '1rem' }} className="text-left">
//             {/* <Card.Img variant="top" src={airport.image} alt={`${airport.name} Image`} style={{ height: '200px' }} />  */}
//             <Card.Body>
//               <Card.Title>{airport.name}</Card.Title>
//               <hr />
//               <Card.Text><b>ICAO</b>: {airport.icao || 'N/A'}</Card.Text>
//               <Card.Text><b>IATA</b>: {airport.iata || 'N/A'}</Card.Text>
//               <Card.Text><b>City</b>: {airport.city || 'N/A'}</Card.Text>
//               <Card.Text><b>Region</b>: {airport.region || 'N/A'}</Card.Text>
//               <Card.Text><b>Country</b>: {airport.country || 'N/A'}</Card.Text>
//               <Card.Text><b>Elevation</b>: {airport.elevation_ft ? airport.elevation_ft + ' ft' : 'N/A'}</Card.Text>
//               <Card.Text><b>Latitude</b>: {airport.latitude || 'N/A'}</Card.Text>
//               <Card.Text><b>Longitude</b>: {airport.longitude || 'N/A'}</Card.Text>
//               <Card.Text><b>Timezone</b>: {airport.timezone || 'N/A'}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default ResultComponent;
