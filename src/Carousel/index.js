import React from "react";
import Slider from "react-slick"

import { cdnData } from "../cdnData";

   class Carousel extends React.Component {
        render() {
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
          };
          return (
            <div>
              
              <Slider {...settings}>
                <div> 
                  <img src={cdnData.img1} alt={''} height={500} />
                </div>
                <div>
                 
                  <img src={cdnData.img2} alt={''} height={500}/>
                </div>
                <div>
                <img src={cdnData.img2} alt={''} height={500}/>
                </div>
                <div>
                <img src={cdnData.img2} alt={''} height={500}/>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          );
        }
      }
      export default Carousel 