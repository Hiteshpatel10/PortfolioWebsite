import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import Slider from "react-slick";

export default function Projects() {
    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 7000,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMod: true,
      };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <ProjectCard/>
                </div>
                <div>
                    <ProjectCard/>
                </div>
                <div>
                    <ProjectCard/>
                </div>
                <div>
                    <ProjectCard/>
                </div>
                <div>
                    <ProjectCard/>
                </div>
            
            </Slider>

         
        </div>
    )
}
