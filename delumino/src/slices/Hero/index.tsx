import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-28 text-white bg-red-500"
    >
      <div className="relative bg-black text-white min-h-screen flex">
        {prismic.isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            fill={true}
            className="absolute inset-0 object-cover w-full h-full opacity-30"
          />
        )}
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-center relative z-20 lg:mt-10 bg-gray-900 lg:bg-transparent bg-opacity-40 lg:bg-opacity-0">
          <div className="max-w-lg lg:max-w-xl mt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Where Light <br /> meets Art
            </h1>
            <p className="mt-4 text-lg lg:text-xl">
              With Delumino, light and art become one. Transform your space with our mesmerizing luminescent creations and crystal portraits.
            </p>
            <div className="mt-8 flex space-x-4">
              <a href="#get-started" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Get Started</a>
              <a href="#view-demo" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">View Demo</a>
            </div>
          </div>
          <div className="hidden lg:block lg:max-w-xl mt-10">
            {prismic.isFilled.image(slice.primary.image) && (
              <PrismicNextImage
                field={slice.primary.image}
                fill={false}
                className="rounded-lg"
              />
            )}
          </div>
        </div>
        
        <div className="lg:hidden absolute inset-0 z-10">
          {prismic.isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              fill={false}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
