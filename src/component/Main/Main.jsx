import React from 'react'
import "./Main.css"
// import MakeSlider from "../MakeSlider/MakeSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../assest/ar1.jpg";
import img2 from "../../assest/ar2.jpg";
import img3 from "../../assest/ar3.jpg";
import img4 from "../../assest/ar4.jpg";
import img5 from "../../assest/ar5.jpg";

import videobg from '../../assest/interior.mp4';
const Main = () => {
    return (
        <>
        <section class="one">
            <div className="container1">
                <div className="main">
                    <div className="overlay"></div>
                    <video src={videobg} autoPlay loop muted />
                    {/* <div className="content">
                        <h1>Welcome </h1>
                        <p>to my amazing website</p>
                    </div> */}
                </div>


                <div className="wrapper">
                    <Carousel autoPlay infiniteLoop class="main-slide"  >
                        <div>
                            <img src={img1} alt="" height="300px" width="300px" />

                        </div>
                        <div>
                            <img src={img2} alt="" height="300px" width="300px" />

                        </div>
                        <div>
                            <img src={img3} alt="" height="300px" width="300px" />

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
            </section>
        </>

    );
}

export default Main