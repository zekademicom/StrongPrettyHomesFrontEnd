import React from 'react';
import { Carousel } from 'react-bootstrap';
import SearchBar from '../search/searchbar';
import StatusBar from '../search/status-bar';
import './slider.css';
import slides from './slider.json';

const Slider = () => {
	return (
		<Carousel fade className="slider">
			{slides.map((slide, index) => {
				let image = require(`../../../../assets/img/slider/${slide.image}`);
				return (
					<Carousel.Item key={index} style={{ backgroundImage: `url(${image})` }}>
						<Carousel.Caption>
							<h3  className="d-none d-lg-block">{slide.title}</h3>
							<p  className="d-none d-lg-block">{slide.desc}</p>
							<StatusBar/>
     
      <SearchBar/>
   
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};
export default Slider;
