"use client"
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 md:px-44 mt-20 mb-20"
    >
      <div>
      <Slider {...sliderSettings}>
        {slice.primary.photos.map((item, index) => (
          <div className="flex px-4 items-stretch" key={index}>
            <PrismicNextLink
            key={index}
            field={item.image_link}
            target="_blank"

            className="block overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:z-20 relative"
          >
            <PrismicNextImage
              field={item.image}
              className="max-w-[29rem] h-auto max-h-[40rem] object-cover"
            />
          </PrismicNextLink>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default Carousel;
