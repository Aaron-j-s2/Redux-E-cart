import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Components/ExampleCarouselImage';



function Landing() {
  return (
    <div >


      <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imgUrl='https://img.freepik.com/free-photo/sale-with-special-discount-vr-glasses_23-2150040388.jpg' />
        <Carousel.Caption>
          <Link to={'/products'}>
       <button className='btn btn-primary'>View Products</button>
       </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imgUrl='https://img.freepik.com/free-photo/discount-armchair-podium_23-2150165449.jpg?t=st=1749139421~exp=1749143021~hmac=49d5a9417dc02064ab9b3c3bc77b3e72bb1ee7d2a73f3b702053bfe08ea2e61c' />
        <Carousel.Caption>
          <Link to={'/products'}>
       <button className='btn btn-success'>View Products</button>
       </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imgUrl='https://img.freepik.com/free-photo/discount-water-bottle-podium_23-2150165468.jpg?ga=GA1.1.1286173946.1743529910&semt=ais_items_boosted&w=740' />
        <Carousel.Caption>
          <Link to={'/products'}>
       <button className='btn btn-primary'>View Products</button>
       </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>





    

    </div>




    
  )
}

export default Landing
