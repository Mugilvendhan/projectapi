// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../Assets/imgs/airport3.jpg';
// import Paul from '../Assets/imgs/airport1.jpg';
// import emilia from '../Assets/imgs/airport2.jpg';
// import hugh from '../Assets/imgs/airport3.jpg';
// import kristen from '../Assets/imgs/airport4.jpg';
// import kriste from '../Assets/imgs/airport5.jpg';

// function Maincarousels() {
//   const imageStyle = {
//     maxWidth: '50%', // Maximum width of the image
//     height: '30%', // Auto-adjusting height to maintain aspect ratio
//     margin: '0 auto' // Center the image horizontally
//   };

//   return (
//     <Carousel>
//       <Carousel.Item interval={2500}>
//         <img src={ExampleCarouselImage} style={imageStyle} alt="First slide" />
//       </Carousel.Item>
//       <Carousel.Item interval={2500}>
//         <img src={Paul} style={imageStyle} alt="Second slide" />
//       </Carousel.Item>
//       <Carousel.Item interval={2500}>
//         <img src={emilia} style={imageStyle} alt="Third slide" />
//       </Carousel.Item>
//       <Carousel.Item interval={2500}>
//         <img src={hugh} style={imageStyle} alt="Third slide" />
//       </Carousel.Item>
      
//        <Carousel.Item interval={2500}>
//         <img src={kristen} style={imageStyle} alt="Third slide" />
//       </Carousel.Item>

//       <Carousel.Item interval={2500}>
//       <img src={kriste} style={imageStyle} alt="Third slide" />
//       </Carousel.Item>

//     </Carousel>
//   );
// }

// export default Maincarousels;



import Carousel from 'react-bootstrap/Carousel';
import Airport1 from '../Assets/imgs/airport1.jpg';
import Airport2 from '../Assets/imgs/airport2.jpg';
import Airport3 from '../Assets/imgs/airport3.jpg';
import Airport4 from '../Assets/imgs/airport4.jpg';
import Airport5 from '../Assets/imgs/airport5.jpg';

function MainCarousel() {
  const imageStyle = {
    width: '52%', // Fixed width for the images
    margin: '0 auto',
    maxHeight:'450px'
  };

  return (
    <Carousel>
      <Carousel.Item interval={2500}>
        <img src={Airport1} style={imageStyle} alt="Airport 1" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img src={Airport2} style={imageStyle} alt="Airport 2" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img src={Airport3} style={imageStyle} alt="Airport 3" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img src={Airport4} style={imageStyle} alt="Airport 4" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img src={Airport5} style={imageStyle} alt="Airport 5" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
