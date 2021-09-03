import React, { useEffect, useState } from 'react';
import './App.css';
import { Testimonial } from './Testimonial';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function App() {

  const arrowStyles = {
            position: 'absolute',
            zIndex: 2,
            top: 'calc(50% - 15px)',
            width: 30,
            height: 30,
            cursor: 'pointer',
        };

  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch("https://testimonialapi.toolcarton.com/api").then(response => response.json())
      console.log(request);
      setTestimonial(request);
      return request;
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <h1>Testimonial</h1>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          interval={5000}
          statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button className="slider__btn" type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, left: 0 }}>
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button className="slider__btn" type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, right: 0 }}>
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                )
            }
        >
        {testimonial?.map(({ id, audio, avatar, designation, location, lorem, message, name, rating }) => (
            <Testimonial 
              key={id}
              audio={audio}
              avatar={avatar}
              designation={designation}
              location={location}
              lorem={lorem}
              message={message}
              name={name}
              rating={rating}
            />
        ))}
        </Carousel>
      </header>
    </div>
  );
}



export default App;
