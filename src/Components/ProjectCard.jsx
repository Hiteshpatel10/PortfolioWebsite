import React from 'react'
import logo from '../Assets/hitesh.png'
import Slider from "react-slick"

export default function ProjectCard() {
    var settings = {
        dots: true,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 1000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMod: true,
      };
    return (
        <div class="shadow-lg p-3 mb-5 bg-white rounded w-25 card mx-auto mt-5">
            <div>
                <Slider {...settings}>
                    <div>
                        <img class="card-img-top" src={logo} alt="Card image cap"/>
                    </div>
                    <div>
                        <img class="card-img-top" src={logo} alt="Card image cap"/>
                    </div>
                    <div>
                        <img class="card-img-top" src={logo} alt="Card image cap"/>
                    </div>
                </Slider>
           
            </div>
    
            <div class="card-body">
            <h5 class="card-title text-center font-weight-bold">Udhar Manager</h5>
            <p class="card-text text-justify">Easily manage your udhaar using Udhaar Manager</p>
            <a href="#" class="btn btn-primary">Downdload Udhaar Manager</a>
            </div>
        </div>
    )
}
