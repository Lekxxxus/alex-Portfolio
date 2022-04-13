import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function HeaderImage() {
  return (
    <div className="flex mt-8">
      <div className="w-2/3 mr-1 rounded">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={31}
          totalSlides={3}
          interval={2000}
          isPlaying={true}
          infinite={true}
        >
          <Slider className="w-full h-full">
            <Slide index={0}>
              <img
                className="w-full h-full rounded"
                src="https://cf.shopee.ph/file/ee23405983ad8407e4b5bbac05ca4f7e_xxhdpi"
                alt="lmao"
              />
            </Slide>
            <Slide index={1}>
              <img
                className="w-full h-full rounded"
                src="https://cf.shopee.ph/file/ee23405983ad8407e4b5bbac05ca4f7e_xxhdpi"
                alt="lmao"
              />
            </Slide>
            <Slide index={2}>
              <img
                className="w-full h-full rounded"
                src="https://cf.shopee.ph/file/ee23405983ad8407e4b5bbac05ca4f7e_xxhdpi"
                alt="lmao"
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
      <div className="flex flex-col w-1/3 mr-1">
        <div className="h-32 mb-1 rounded">
          <img
            className="w-full rounded"
            src="https://cf.shopee.ph/file/179a647c629d3e4089fd663db854564e_xhdpi"
            alt="hihi"
          />
        </div>
        <div className="rounded ">
          <img
            className="w-full h-32 mt-1 rounded"
            src="https://cf.shopee.ph/file/e64eaaf3060f5735cde45023705ed60c_xhdpi"
            alt="blank"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
