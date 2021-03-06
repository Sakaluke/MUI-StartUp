import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img
        src='./arrow-icon.png'
        // style={{
        //   height: '1.7rem',
        //   paddingLeft: '0.3rem',
        //   backgroundRepea: 'no-repeat',
        // }}
        className='carousel-right-arrow'
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    >
      <img src='./arrow-icon.png' className='carousel-left-arrow' />
    </div>
  );
}

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3.6,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerMode: true,
      adaptiveHeight: true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false,
            dots: false,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <div className='img-container'>
          <img src='./img/Im111.jpg' alt='img1' className='carousel-img' />
        </div>
        <div>
          <img src='./img/Im222.jpg' alt='img2' className='carousel-img' />
        </div>
        <div>
          <img src='./img/Im333.jpg' alt='img3' className='carousel-img' />
        </div>
        <div>
          <img src='./img/Im444.jpg' alt='img4' className='carousel-img' />
        </div>
        <div>
          <img src='./img/Im555.jpg' alt='img5' className='carousel-img' />
        </div>
        <div>
          <img src='./img/Im666.jpg' alt='img6' className='carousel-img' />
        </div>
        <div>
          <img src='./img/Im777.jpg' alt='img7' className='carousel-img' />
        </div>
        <div>
          <img src='./img/Im888.jpg' alt='img8' className='carousel-img' />
        </div>
      </Slider>
    );
  }
}
export default Carousel;
