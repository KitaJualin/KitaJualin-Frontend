import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div className='crd'>
      <Link to={`/product/${product._id}`}>
        <Card.Img className='tg' src={product.image} variant='top' />
      </Link>

      <div className='crd1'>
        <Link to={`/product/${product._id}`}>
            <h5 className='tit'>{product.name}</h5>
        </Link>
        <h5>{product.category}</h5>
          <Rating value={product.rating}/>
          <h6>{product.numReviews} Reviews</h6>

        {/* <Card.Text className='price' as='h3'>${product.price}</Card.Text> */}
      </div>
      <div className='crd2'>
        <Link to={`/product/${product._id}`}>
        <h2 className='h22'>See Details</h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
