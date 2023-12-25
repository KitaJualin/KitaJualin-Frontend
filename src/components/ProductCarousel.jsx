import { Carousel } from 'react-bootstrap';
import banner from '../assets/banner.png';
import banner1 from '../assets/banner1.png';

const ProductCarousel = () => {

  return(
    <Carousel className='mb-4' style={{marginTop: '80px',}}>
      <Carousel.Item interval={2000}>
        <img src={banner} alt="test" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={banner1} alt="test" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={banner} alt="test" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
