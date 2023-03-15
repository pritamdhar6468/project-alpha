import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../assest/ar1.jpg";
import img2 from "../../assest/ar2.jpg";
import img3 from "../../assest/ar3.jpg";
import img4 from "../../assest/ar4.jpg";
import img5 from "../../assest/ar5.jpg";


import "./MakeSlider.css";




const MakeSlider = () => {
    return (
        <>
        <div className="container">
            <div className="wrapper">
            <Carousel autoPlay infiniteLoop  class="main-slide"  >
                <div>
                    <img src={img1} alt="" height="300px" width="300px" />

                </div>
                <div>
                    <img src={img2} alt=""  height="300px" width="300px" />

                </div>
                <div>
                    <img src={img3} alt=""  height="300px" width="300px" />

                </div>
                <div>
                    <img src={img4} alt="" height="300px" width="300px" />

                </div>
                <div>
                    <img src={img5} alt="" height="300px" width="300px" />

                </div>
            </Carousel>
            </div>
        </div>
           
        </>

    )
}

export default MakeSlider