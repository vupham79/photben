import React, { Component } from "react";
import './slick.css';
import Slider from "react-slick";

export default class Slick extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
        };
        const { image } = this.props;
        return (
            <div className='slick-slider'>
                <Slider {...settings}>
                    {image.map(item => {
                        return (
                            <div>
                                <div style={{ backgroundImage: `url("${item.link}")`, backgroundSize: 'cover', minHeight: '400px' }}>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}