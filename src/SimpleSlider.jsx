import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const slides = [
    { 
      id: 1, 
      image: "https://picsum.photos/200/100?random=1",
      title: "Slide 1 Title",
      description: "This is a description for slide 1.",
      link: "https://example.com" 
    },
    { 
      id: 2, 
      image: "https://picsum.photos/200/100?random=1",
      title: "Slide 2 Title",
      description: "This is a description for slide 2.",
      link: "https://example.com" 
    },
    { 
      id: 3, 
      image: "https://picsum.photos/200/100?random=1",
      title: "Slide 2 Title",
      description: "This is a description for slide 2.",
      link: "https://example.com" 
    },
    { 
      id: 4, 
      image: "https://picsum.photos/200/100?random=1",
      title: "Slide 2 Title",
      description: "This is a description for slide 2.",
      link: "https://example.com" 
    },
    { 
      id: 5, 
      image: "https://picsum.photos/200/100?random=1",
      title: "Slide 2 Title",
      description: "This is a description for slide 2.",
      link: "https://example.com" 
    },
    // Add more slide objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides per view
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id} className="slide">
          <div className="box">
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <a href={slide.link}>Learn more</a>
          </div>
        </div>
      ))}
    </Slider>
  );
}
